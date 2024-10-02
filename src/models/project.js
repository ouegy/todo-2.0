import Controller from "../controller";

const projects = [
    {
        title: "Default Project",
        desc: "Default project description",
        date: "2024-10-25",
        tasks: [
            {
                title: "Default Task",
                desc: "Default task description",
                date: "2024-10-25",
            },
        ],
    },
    {
        title: "Default Project 2",
        desc: "Default project 2 description",
        date: "2024-10-25",
        tasks: [
            {
                title: "Default Task 2",
                desc: "Default task 2 description",
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

    static getProjects() {
        console.log("get projects");
        return projects;
    }
}
