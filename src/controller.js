import Project from "./models/project";
import Task from "./models/Task";
import View from "./views/view";

// export function App() {
//     const project = new Project();
//     const view = new View();
//     const task = new Task();
//     const controller = new Controller(project, view, task);
//     View.loadHomeView();
//     return { project, view, task, controller };
// }

export default class Controller {
    constructor(project, view, task) {
        this.view = view;
        this.project = project;
        this.task = task;

        this.projects = [
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
        this.foo = this.projects[0];
        this.foo["tasks"].push(new Task("test task"));
        console.log(this.foo);
    }
    setProjects(projects) {
        this.projects = projects;
    }
    static getProjects() {
        return this.projects;
    }
    setCurrentProject(foo) {
        this.currentProject = foo;
    }
    getCurrentProject() {
        return this.foo;
    }
    addProject(newProject) {
        this.projects.push(newProject);
    }
    addTask(newTask, project) {
        //const project = Controller.getCurrentProject();
        project["tasks"].push(newTask);
    }
    static getFormData() {
        return View.getFormData();
    }

    // static getProject() {
    //     return View.setProject();
    // }

    // // working
    // static setCurrentProject(project) {
    //     console.log(project); // returns array of 2 items - 1 undefined
    //     console.log("inside set current project");
    //     //console.log(this.currentProject);
    // }
    // static getCurrentProject() {
    //     return currentProject;
    // }
    // static getProjects() {
    //     return Project.getProjects();
    // }
    // static getFormData() {
    //     console.log("get form data - controller");
    //     return View.getFormData();
    // }
    // static setFormData() {
    //     console.log("set form data - controller");
    //     const data = this.getFormData();
    //     const title = data.title;
    //     const desc = data.desc;
    //     const date = data.date;

    //     return { title, desc, date };
    // }
}

// const app = new App();

// const app = new App();
//console.table(app.controller.projects);
//console.table(app.controller.getProjects);
//console.table(app.controller.getProjects());
// console.table(app.controller.task);
// console.table(app.controller.project);
