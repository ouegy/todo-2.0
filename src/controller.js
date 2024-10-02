import Project from "./models/project";
import View from "./views/view";

export function App() {
    const model = new Project();
    const view = new View();
    const controller = new Controller(view, model);

    return { model, view, controller };
}

export default class Controller {
    constructor(view, model) {
        this.view = view;
        this.model = model;
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
    // static loadProjectView(project) {
    //     return View.loadProjectView(project);
    // }
}

View.addGlobalEventListener("click", "a", (e) => {
    e.preventDefault();
    console.log(e.target.textContent);
    return e.target.textContent;
});

View.addGlobalEventListener("click", "#add-project", (e) => {
    e.preventDefault();
    View.renderForm();
});

View.addGlobalEventListener("click", "#close", (e) => {
    e.preventDefault();
    View.removeForm();
});

View.addGlobalEventListener("click", "#submit", (e) => {
    console.log("submit clicked");
    Controller.getFormData();
    Project.addProject();
    View.renderSidebarProjects();
});

function displayProjects() {
    View.renderSidebarProjects();
}

displayProjects();
