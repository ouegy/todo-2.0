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
}
