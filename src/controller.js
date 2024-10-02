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
    View.loadForm();
});

View.addGlobalEventListener("click", "#close", (e) => {
    e.preventDefault();
    View.closeForm();
});

function displayProjects() {
    View.renderSidebarProjects();
}

displayProjects();
