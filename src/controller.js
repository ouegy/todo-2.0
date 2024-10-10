import View from "./views/view";
import Project from "./models/project";
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
                        title: "High Priority Task: Create your first project",
                        desc: "The button on the bottom left will always be available for this.",
                        date: "2024-10-25",
                        priority: "1",
                        completed: false,
                    },
                    {
                        title: "Low Priority Task: Make a cup of coffee and procrastinate on the other tasks.",
                        desc: "",
                        date: "2024-10-25",
                        priority: "3",
                        completed: false,
                    },
                    {
                        title: "Medium Priority Task: Create some tasks to go with your new project",
                        desc: "Projects are displayed in the sidebar. Try clicking on the project you just created.",
                        date: "2024-10-25",
                        priority: "2",
                        completed: false,
                    },

                    {
                        title: "Completed Task: ",
                        desc: "Visit Github",
                        date: "2024-10-25",
                        priority: "3",
                        completed: true,
                    },
                ],
            },
            {
                title: "Example Project",
                desc: "This is your default project. Complete the tasks below to learn the features of the app.",
                date: "2024-10-25",
            },
        ];
        this.currentProject = this.projects[0];
        console.table(this.currentProject);
    }

    setProjects(projects) {
        this.projects = projects;
    }
    static getProjects() {
        return this.projects;
    }
    static getProjectTasks(project) {
        return project.tasks;
    }
    static setCurrentProject(currentProject) {
        this.currentProject = currentProject;
        console.log(currentProject);
    }
    getCurrentProject() {
        return this.currentProject;
    }
    addProject(a) {
        this.projects.push(new Project(a.title, a.desc, a.date));
    }
    addTask(title, desc, date, priority, project) {
        project["tasks"].push(new Task(title, desc, date, priority));
    }
    toggleComplete(task) {
        return (task.completed = task.completed ? false : true);
    }
    static getFormData() {
        return View.getFormData();
    }
    static deleteTask(tasks, index) {
        tasks.splice(index, 1);
    }
}
