import View from "./views/view";
import Task from "./models/Task";

export default class Controller {
    constructor(project, view, task) {
        this.view = view;
        this.project = project;
        this.task = task;
        this.projects = [
            {
                title: "Home Project",
                desc: "This is your default project. Complete the tasks below to learn the features of the app.",
                date: "2024-10-25",
                tasks: [
                    {
                        title: "Expired Task: ",
                        desc: "Visit Github",
                        date: "2024-10-25",
                        priority: "low",
                        //completed: false,
                    },
                    {
                        title: "High Priority Task: Create your first project",
                        desc: "The button on the bottom left will always be available for this.",
                        date: "2024-10-25",
                        priority: "high",
                        completed: true,
                    },
                    {
                        title: "Medium Priority Task: Create some tasks to go with your new project",
                        desc: "Projects are displayed in the sidebar. Try clicking on the project you just created.",
                        date: "2024-10-25",
                        priority: "high",
                        //completed: false,
                    },
                    {
                        title: "Low Priority Task: Make a cup of coffee and procrastinate on the other tasks.",
                        desc: "",
                        date: "2024-10-25",
                        priority: "med",
                        //completed: false,
                    },
                ],
            },
            {
                title: "Example Project",
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
        this.currentProject = this.projects[0];
        console.table(this.projects[0].tasks);
    }

    setProjects(projects) {
        this.projects = projects;
    }
    static getProjects() {
        return this.projects;
    }
    setCurrentProject(currentProject) {
        this.currentProject = currentProject;
    }
    getCurrentProject() {
        return this.currentProject;
    }
    addProject(newProject) {
        this.projects.push(newProject);
    }
    addTask(title, desc, date, project) {
        project["tasks"].push(new Task(title, desc, date));
    }
    static getFormData() {
        return View.getFormData();
    }
}
