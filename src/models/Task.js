export default class Task {
    constructor(title, desc, date, priority) {
        this.title = title;
        this.desc = desc;
        this.date = date;
        this.priority = priority;
        this.completed = false;
    }

    setTitle(title) {
        this.title = title;
    }

    getTitle() {
        return this.title;
    }
    setPriority(priority) {
        this.priority = priority;
    }
    getPriority() {
        return this.priority;
    }

    setCompleted(completed) {
        this.completed = completed;
    }

    getCompleted() {
        return this.completed;
    }
}
