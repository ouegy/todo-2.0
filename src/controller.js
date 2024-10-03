import Project from "./models/project";
import Task from "./models/Task";
import View from "./views/view";

export function App() {
    const model = new Project();
    const view = new View();
    const projects = Project.getProjects();
    const controller = new Controller(view, model);
    const currentProject = projects[0];
    View.loadHomeView(projects[0]);
    View.renderSidebarProjects();
    console.log(currentProject);
    return {
        model,
        view,
        controller,
        currentProject,
    };
}

export default class Controller {
    constructor(view, model) {
        this.view = view;
        this.model = model;
    }
    // working
    static setCurrentProject(project) {
        console.log(project); // returns array of 2 items - 1 undefined
        console.log("inside set current project");
        //console.log(this.currentProject);
    }
    static getCurrentProject() {
        return currentProject;
    }
    static getProjects() {
        return Project.getProjects();
    }
    static getFormData() {
        console.log("get form data - controller");
        return View.getFormData();
    }
    static setFormData() {
        console.log("set form data - controller");
        const data = this.getFormData();
        const title = data.title;
        const desc = data.desc;
        const date = data.date;

        return { title, desc, date };
    }
}

View.addGlobalEventListener("click", "a.project", (e) => {
    e.preventDefault();
    const projects = Project.getProjects();
    // projects.forEach((project) => {
    //     let title = project.title;
    //     if (e.target.textContent == title) {
    //         console.log("its a match");
    //         return project;
    //     }
    // });
    const clicked = projects.map(function (item) {
        if (item.title == e.target.textContent) return item;
    });
    //currentProject = clicked;
    //Controller.setCurrentProject(clicked);
    //console.log(clicked); // working
});

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
    console.log("submit clicked"); // working
    console.log(formType); // working
    Controller.getFormData();
    //working
    if (formType == "project") {
        Project.addProject();
        View.renderSidebarProjects();
    }
    if (formType == "task") {
        Task.addTask();
        View.renderTasks();
    }
});
