import View from "./views/view";

export default class Controller {
    constructor(project, view, task) {
        this.view = view;
        this.project = project;
        this.task = task;
        this.currentProject = projects[0];
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
    addTask(newTask, project) {
        project["tasks"].push(newTask);
    }
    static getFormData() {
        return View.getFormData();
    }
}
