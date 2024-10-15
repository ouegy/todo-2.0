import Project from "./models/project";
import View from "./views/View";

export default class Storage {
    static saveProject(data) {
        // get projects array or create one if it doesnt exist
        let projects = this.getProjects();

        // Add the todo to the projects array
        projects.push(
            new Project(data.title, data.desc, data.date, data.priority)
        );
        // Save the array to local storage

        localStorage.setItem("projects", JSON.stringify(projects));

        console.table(projects);
    }
    static getProjects() {
        const projects = JSON.parse(localStorage.getItem("projects"));
        if (projects) return projects;
        else if (!projects) return View.getProjects();
    }
    static populateStorage() {
        const local = JSON.parse(localStorage.getItem("projects"));
        if (!local) {
            const defaultProjects = View.getProjects();
            localStorage.setItem("projects", JSON.stringify(defaultProjects));
        }
    }
    static saveTask() {}
}
