import createForm from "./form";
import Controller from "../controller";
const controller = new Controller();

import bee from "../img/bee.svg";

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
        home.appendChild(title);
        return home;
    }
    static createImage(src, alt, classes) {
        const image = document.createElement("img");
        image.classList.add(classes);
        image.src = src;
        image.alt = alt;
        return image;
    }
    static renderForm(type) {
        const main = document.getElementById("main");
        const formContainer = document.createElement("div");
        formContainer.setAttribute("id", "form-container");
        main.prepend(formContainer);
        formContainer.appendChild(createForm(type));
        formContainer.classList.add("fade-in");
    }
    static removeForm() {
        const parent = document.getElementById("main");
        parent.classList.remove("fade-in");
        const child = document.getElementById("form-container");
        if (child) parent.removeChild(child);
    }
    static renderSidebarProjects() {
        const sidebarList = document.getElementById("projects");
        sidebarList.replaceChildren();
        const projects = controller.projects;
        projects.forEach((project) => {
            const li = document.createElement("li");
            const a = this.createElement("a", project.title, "project");
            a.setAttribute("href", "#");
            li.appendChild(a);
            sidebarList.appendChild(li);
        });
    }
    static renderTasks(project) {
        const tasks = project.tasks;
        const projectDescription = document.querySelector(".tasks");
        console.log(projectDescription);
        projectDescription.replaceChildren();

        if (tasks) {
            tasks.forEach((task) => {
                const container = View.createElement(
                    "div",
                    "",
                    "form-container"
                );
                const header = View.createElement("div", "", "task-header");
                const title = this.createElement("h3", task.title);
                const formButtons = View.createElement(
                    "div",
                    "",
                    "task-buttons"
                );
                const edit = View.createElement("button", "");
                const del = View.createElement("button", "");

                const p = this.createElement("p", task.desc, "description");
                container.setAttribute("class", "card");

                formButtons.appendChild(edit);
                formButtons.appendChild(del);
                header.appendChild(title);
                header.appendChild(formButtons);

                container.appendChild(header);
                container.appendChild(p);

                projectDescription.appendChild(container);
            });
        }
    }
    static loadHomeView() {
        const projects = View.getProjects();
        View.renderSidebarProjects();
        View.renderProjectView(projects[0]);
    }
    static getProjects() {
        return controller.projects;
    }
    static renderProjectView(project) {
        const content = document.getElementById("main");
        const projectsContainer = document.createElement("div");
        projectsContainer.setAttribute("class", "card");
        content.replaceChildren(); // clear the view
        content.appendChild(projectsContainer);
        projectsContainer.appendChild(this.createProjectView(project));
        this.renderTasks(project);
        // this.loadAddTaskButton();
    }
    // static createAddTaskButton() {
    //     const button = this.createElement("button", "+ Add Task");
    //     button.setAttribute("id", "add-task");
    //     return button;
    // }
    // static loadAddTaskButton() {
    //     const main = document.getElementById("main");
    //     main.appendChild(this.createAddTaskButton());
    // }
    static createProjectView(project) {
        const projectsContainer = this.createElement(
            "div",
            "",
            "project-container"
        );
        const projectHeader = this.createElement("div", "", "project-header");
        const projectTitle = this.createHeader(project.title, "project");
        const projectButtons = this.createElement("div", "", "project-buttons");
        const edit = this.createElement("button", "");
        const del = this.createElement("button", "");
        const add = this.createElement("button", "+ Add Task");
        const description = this.createElement("div", project.desc, "tasks");

        add.setAttribute("id", "add-task");

        projectButtons.appendChild(edit);
        projectButtons.appendChild(del);
        projectButtons.appendChild(add);
        projectHeader.appendChild(projectTitle);
        projectHeader.appendChild(projectButtons);
        projectsContainer.appendChild(projectHeader);
        projectsContainer.appendChild(description);

        return projectsContainer;
    }
    static getFormData() {
        let title = document.getElementById("title").value;
        console.log("View - get form data");
        let desc = document.getElementById("description").value;
        let date = document.getElementById("date").value;

        return { title, desc, date };
    }
}

// User interactions

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
    const projectTtile = document.querySelector("h1.title").textContent;
    const projects = View.getProjects();
    e.preventDefault();
    const formType = e.target.dataset.type;
    const data = View.getFormData();
    if (formType == "project") {
        controller.addProject(data);
        View.renderSidebarProjects();
    }
    if (formType == "task") {
        const clicked = projects.map(function (project) {
            if (project.title == projectTtile) {
                controller.addTask(data.title, data.desc, data.date, project);
                View.renderTasks(project);
                console.table(project.tasks);
            }
        });
    }
});
View.addGlobalEventListener("click", "a.project", (e) => {
    e.preventDefault();
    const projects = View.getProjects();
    const clicked = projects.map(function (project) {
        if (e.target.textContent == "Home") View.renderProjectView(projects[0]);
        if (project.title == e.target.textContent) {
            View.renderProjectView(project);
        }
    });
});
