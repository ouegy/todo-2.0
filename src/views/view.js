import createForm from "./form";
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
        home.appendChild(title);
        return home;
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
        parent.removeChild(child);
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
            a.addEventListener("click", (e) => {
                e.preventDefault;
                //this.loadProjectView(project);
            });
        });
    }
    static renderTasks(project) {
        const tasks = project.tasks;
        const projectDescription = document.querySelector(".description");
        const ul = document.createElement("ul");
        tasks.forEach((task) => {
            const li = this.createElement("li", task.title);
            const description = this.createElement(
                "p",
                task.desc,
                "description"
            );
            li.appendChild(description);
            ul.appendChild(li);
            projectDescription.appendChild(ul);
        });
    }
    // // in use working
    static loadHomeView() {
        const projects = View.getProjects();
        View.renderSidebarProjects();
        View.renderProjectView(projects[0]);
        console.table(projects);
    }
    static getProjects() {
        return controller.projects;
    }

    // // working
    static renderProjectView(project) {
        const content = document.getElementById("main");
        const projectsContainer = document.createElement("div");
        projectsContainer.setAttribute("id", "projects-container");
        content.replaceChildren(); // clear the view
        content.appendChild(projectsContainer);
        projectsContainer.appendChild(this.createProjectView(project));
        this.renderTasks(project);
        this.loadAddTaskButton();
    }
    static createAddTaskButton() {
        const button = this.createElement("button", "+ Add Task");
        button.setAttribute("id", "add-task");
        return button;
    }
    static loadAddTaskButton() {
        const main = document.getElementById("main");
        main.appendChild(this.createAddTaskButton());
    }
    static createProjectView(project) {
        const projectView = this.createHeader(project.title, "project");
        const description = this.createElement(
            "p",
            project.desc,
            "description"
        );
        projectView.appendChild(description);
        return projectView;
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
    View.renderForm("project");
});
View.addGlobalEventListener("click", "#add-task", (e) => {
    e.preventDefault();
    View.renderForm("task");
});
View.addGlobalEventListener("click", "#close", (e) => {
    e.preventDefault();
    View.removeForm();
});
View.addGlobalEventListener("click", "#submit", (e) => {
    e.preventDefault();
    const formType = e.target.dataset.type;
    const data = View.getFormData();
    //working
    if (formType == "project") {
        controller.addProject(data);
        View.renderSidebarProjects();
    }
    if (formType == "task") {
        console.log(formType);
        controller.addTask(data);
        View.renderTasks();
    }
});
View.addGlobalEventListener("click", "a.project", (e) => {
    e.preventDefault();
    const projects = View.getProjects();
    // projects.forEach((project) => {
    //     let title = project.title;
    //     if (e.target.textContent == title) {
    //         console.log("its a match");
    //         return project;
    //     }
    // });
    const clicked = projects.map(function (project) {
        if (project.title == e.target.textContent) {
            View.renderProjectView(project);
        }
    });
    //currentProject = clicked;
    //Controller.setCurrentProject(clicked);
    //console.log(clicked); // working
});
