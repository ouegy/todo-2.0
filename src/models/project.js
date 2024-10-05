//console.table(projects);
//const controller = new Controller();
console.table(controller.getFormData());

export default class Project {
    constructor(title, desc, date) {
        this.title = title;
        this.desc = desc;
        this.date = date;
        this.tasks = [];
    }
    setTitle(title) {
        this.title = title;
    }

    getTitle() {
        return this.title;
    }

    setTasks(tasks) {
        this.tasks = tasks;
    }

    getTasks() {
        return this.tasks;
    }

    // static getProjects() {
    //     console.log("Model - get projects"); // in use
    //     return projects;
    // }

    // static getFormData() {
    //     console.log("set form data model - in use"); // in use
    //     return Controller.getFormData();
    // }

    // static addProject() {
    //     const data = controller.getFormData();
    //     const newProject = new Project(data.title, data.desc, data.date);
    //     projects.push(newProject);
    // } // in use

    // static getCurrentProject() {
    //     return this;
    // }
}
