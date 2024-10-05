export default class Task {
    constructor(title, desc, date) {
        this.title = title;
        this.desc = desc;
        this.date = date;
    }
    setTitle(title) {
        this.title = title;
    }

    getTitle() {
        return this.title;
    }
    // static getFormData() {
    //     console.log("set form data task model"); // in use
    //     return Controller.getFormData();
    // }
    // static getCurrentProject() {
    //     console.log("task model - get current project"); // not in use
    //     return Controller.getCurrentProject();
    // }

    // this needs fixing. need to get the current project from the controller

    // static addTask() {
    //     const data = this.getFormData();
    //     let project = Controller.getCurrentProject();
    //     console.log(project); // this works
    //     console.log("add task fired from  model");
    //     const newTask = new Task(data.title, data.desc, data.date);
    //     //const projects = Controller.getProjects();
    //     // const result = projects.find(({ tasks }) => tasks === "");
    //     // console.log(result);

    //     // project.tasks.push(data);
    // }
}

// console.log(Task.getCurrentProject());
