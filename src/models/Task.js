import Controller from "../controller";

export default class Task {
    constructor(title, desc, date) {
        this.title = title;
        this.desc = desc;
        this.date = date;
    }
    static getFormData() {
        console.log("set form data task model"); // in use
        return Controller.getFormData();
    }
    // static getCurrentProject() {
    //     console.log("task model - get current project"); // not in use
    //     return Controller.getCurrentProject();
    // }

    // this needs fixing. need to get the current project from the controller

    static addTask() {
        const data = this.getFormData();
        let project = Controller.getCurrentProject();
        console.log(project); // this works
        console.log("add task fired from  model");
        const newTask = new Task(data.title, data.desc, data.date);
        project[0].tasks.push(newTask);
        // project.tasks.push(data);
    }
}

// console.log(Task.getCurrentProject());
