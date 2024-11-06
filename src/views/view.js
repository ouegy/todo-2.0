import { createForm } from "./form";
import createProjectView from "./project";
import { renderTasks } from "./task";
import Controller from "../Controller";
import Storage from "../Storage";
const controller = new Controller();

export default class View {
    static addGlobalEventListener(type, selector, callback, options) {
        document.addEventListener(
            type,
            (e) => {
                if (e.target.matches(selector)) callback(e);
            },
            options
        );
    }
    static createElement(tag, text, classes) {
        const ele = document.createElement(tag);
        ele.textContent = text;
        if (classes) ele.classList.add(classes);
        return ele;
    }
    static createHeader(pageName, classes) {
        const home = document.createElement("div", classes);
        const title = this.createElement("h1", pageName, "title");
        if (classes) title.classList.add(classes);
        home.appendChild(title);
        return home;
    }
    static createImage(src, alt, classes) {
        const image = this.createElement("img", "", classes);
        image.src = src;
        image.alt = alt;
        if (classes) image.classList.add(classes);
        return image;
    }
    static renderForm(type) {
        const main = document.getElementById("main");
        const formContainer = document.createElement("div");
        formContainer.setAttribute("id", "form-container");
        main.prepend(formContainer);
        formContainer.appendChild(createForm(type));
        formContainer.setAttribute("class", "fade-in box-shadow");
    }
    static populateForm() {}
    static removeForm() {
        const parent = document.getElementById("main");
        parent.classList.remove("fade-in");
        const child = document.getElementById("form-container");
        if (child) parent.removeChild(child);
    }
    static renderSidebarProjects() {
        const sidebarList = document.getElementById("projects");
        sidebarList.replaceChildren();
        const projects = Storage.getProjects();
        projects.forEach((project) => {
            this.createSidebarProjects(project, sidebarList);
        });
    }
    static createSidebarProjects(project, sidebarList) {
        const li = document.createElement("li");
        const a = this.createElement("a", project.title, "project");
        a.setAttribute("href", "#");
        li.appendChild(a);
        sidebarList.appendChild(li);
    }

    static loadHomeView() {
        const projects = Storage.getProjects();
        View.renderSidebarProjects();
        View.renderProjectView(projects[0]);
    }
    // static getProjects() {
    //     return controller.projects;
    // }
    static handleProjectRoute(e) {
        const projects = Storage.getProjects();
        console.table(projects);
        const clicked = projects.map(function (project) {
            Controller.setCurrentProject(project);
            if (e.target.textContent == "Home")
                View.renderProjectView(projects[0]);
            if (project.title == e.target.textContent)
                View.renderProjectView(project);
        });
    }

    static renderProjectView(project) {
        const content = document.getElementById("main");
        const projectsContainer = document.createElement("div");
        projectsContainer.setAttribute("class", "card");
        content.replaceChildren(); // clear the view
        content.appendChild(projectsContainer);
        projectsContainer.appendChild(createProjectView(project));
        renderTasks(project);
    }
    static setCardColour(priority) {
        let colour = "";
        switch (priority) {
            case "3":
                colour = "green";
                break;
            case "2":
                colour = "orange";
                break;
            case "1":
                colour = "red";
                break;

            default:
                colour = "grey";
                break;
        }
        return colour;
    }
    static getFormData() {
        let title = document.getElementById("title").value;
        let desc = document.getElementById("description").value;
        let date = document.getElementById("date").value;
        let priority = document.getElementById("priority").value;
        return { title, desc, date, priority };
    }
    static deleteTask(e) {
        const project = controller.getCurrentProject();
        const tasks = project.tasks;
        tasks.forEach((task) => {
            let index = tasks.indexOf(task);
            if (
                task.title ==
                e.target.closest("div.task-header").querySelector("h3")
                    .textContent
            ) {
                Controller.deleteTask(tasks, index);
                renderTasks(project);
            }
        });
    }
    static submitForm(e) {
        const title = document.querySelector("h1.title").textContent;
        const projects = Storage.getProjects();
        e.preventDefault();
        //console.table(projects);
        const formType = e.target.dataset.type;
        const data = View.getFormData();
        if (formType == "project") {
            controller.addProject(data);
            View.renderSidebarProjects();
        }
        if (formType == "task") {
            const clicked = projects.map(function (project) {
                if (project.title == title) {
                    controller.addTask(data, project);
                    renderTasks(project);
                }
            });
        }
    }
    static checkValidity(title) {
        const projects = Storage.getProjects();
        //console.table(projects);
        return projects.find((ele) => ele.title === title);
    }

    static toggleCheckbox(e) {
        const project = controller.getCurrentProject();
        const tasks = project.tasks;
        tasks.forEach((task) => {
            if (task.title == e.target.dataset.title) {
                if (task.completed == false) {
                    setTimeout(() => {
                        controller.toggleComplete(task);
                    }, 250);
                    setTimeout(() => {
                        renderTasks(project);
                    }, 650);
                } else if (task.completed == true) {
                    controller.toggleComplete(task);
                    renderTasks(project);
                }
            }
        });
    }
    static handleForm(e) {
        const title = document.getElementById("title");
        const titleError = document.querySelector("span");
        titleError.className = "hidden";
        const validity = View.checkValidity(title.value);
        if (validity) {
            e.preventDefault();
            title.setCustomValidity("This project already exists.");
            //title.reportValidity();
            titleError.textContent = "This project name already exists.";
            titleError.className = "error active";
        } else {
            title.setCustomValidity("");
            View.submitForm(e);
        }
    }
    static showError() {
        return console.log("show error function");
    }
}

// User interactions

View.addGlobalEventListener("change", "input#title", (e) => {
    const validity = View.checkValidity(e.target.value);
    const titleError = document.querySelector("span");
    if (validity) {
        titleError.textContent = "This project name already exists.";
        titleError.className = "error active";
    } else {
        View.submitForm(e);
    }
});

View.addGlobalEventListener("click", ".check", (e) => {
    View.toggleCheckbox(e);
});

View.addGlobalEventListener("click", "#add-project", (e) => {
    e.preventDefault();
    View.removeForm();
    View.renderForm("project");
});
View.addGlobalEventListener("click", "#add-task", (e) => {
    e.preventDefault();
    View.removeForm();
    View.renderForm("task");
});
View.addGlobalEventListener("click", "#close", (e) => {
    e.preventDefault();
    View.removeForm();
});
View.addGlobalEventListener("click", "#submit", (e) => {
    View.handleForm(e);
});
View.addGlobalEventListener("click", "a.project", (e) => {
    e.preventDefault();
    View.handleProjectRoute(e);
});
View.addGlobalEventListener("click", "button.delete-task", (e) => {
    View.deleteTask(e);
});
View.addGlobalEventListener("click", "button.edit-task", (e) => {
    View.renderForm("task");
});
View.addGlobalEventListener("click", "button.edit-project", (e) => {
    View.renderForm("project");
});
