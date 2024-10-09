import createForm from "./form";
import createProjectView from "./project";
import renderTasks from "./task";
import Controller from "../controller";
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
    static removeForm() {
        const parent = document.getElementById("main");
        parent.classList.remove("fade-in");
        const child = document.getElementById("form-container");
        if (child) parent.removeChild(child);
    }
    //static sidebarCb() {}
    static renderSidebarProjects() {
        const sidebarList = document.getElementById("projects");
        sidebarList.replaceChildren();
        const projects = controller.projects;
        projects.forEach((project) => {
            this.creatSidebarProjects(project, sidebarList);
        });
    }
    static creatSidebarProjects(project, sidebarList) {
        const li = document.createElement("li");
        const a = this.createElement("a", project.title, "project");
        a.setAttribute("href", "#");
        li.appendChild(a);
        sidebarList.appendChild(li);
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
        projectsContainer.appendChild(createProjectView(project));
        renderTasks(project);
    }
    static getFormData() {
        let title = document.getElementById("title").value;
        let desc = document.getElementById("description").value;
        let date = document.getElementById("date").value;
        return { title, desc, date };
    }
}

// User interactions

View.addGlobalEventListener("click", ".check", (e) => {
    const title = e.target.dataset.title;
    const project = controller.getCurrentProject();
    const tasks = project.tasks;
    tasks.forEach((task) => {
        if (task.title == e.target.dataset.title) {
            controller.toggleComplete(task);
        }
    });
    renderTasks(project);
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
                renderTasks(project);
            }
        });
    }
});
View.addGlobalEventListener("click", "a.project", (e) => {
    e.preventDefault();
    const projects = View.getProjects();
    const clicked = projects.map(function (project) {
        Controller.setCurrentProject(project);
        if (e.target.textContent == "Home") View.renderProjectView(projects[0]);
        if (project.title == e.target.textContent)
            View.renderProjectView(project);
    });
});
