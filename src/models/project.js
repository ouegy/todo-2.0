import Controller from "../controller";

const projects = [
    {
        title: "Default Project",
        desc: "This is your default project. Complete the tasks below to learn the features of the app.",
        date: "2024-10-25",
        tasks: [
            {
                title: "Create New Project",
                desc: "Once you have created your first project you can mark this task as complete",
                date: "2024-10-25",
            },
        ],
    },
    {
        title: "Default Project2",
        desc: "This is your default project. Complete the tasks below to learn the features of the app.",
        date: "2024-10-25",
        tasks: [
            {
                title: "Create New Project2",
                desc: "Once you have created your first project you can mark this task as complete",
                date: "2024-10-25",
            },
        ],
    },
];

export default class Project {
    constructor(title, desc, date, ...tasks) {
        this.title = title;
        this.desc = desc;
        this.date = date;
        this.tasks = tasks;
    }

    setTasks(tasks) {
        this.tasks = tasks;
    }

    getTasks() {
        return this.tasks;
    }

    static getProjects() {
        console.log("Model - get projects"); // in use
        return projects;
    }

    static getFormData() {
        console.log("set form data model - in use"); // in use
        return Controller.getFormData();
    }

    static addProject() {
        const data = this.getFormData();
        const newProject = new Project(data.title, data.desc, data.date);
        projects.push(newProject);
    } // in use

    // static getCurrentProject() {
    //     return this;
    // }
}
