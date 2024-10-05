export default class Task {
    constructor(title, desc, date) {
        this.title = title;
        this.desc = desc;
        this.date = date;
        this.completed = false;
    }

    setTitle(title) {
        this.title = title;
    }

    getTitle() {
        return this.title;
    }

    setCompleted(completed) {
        this.completed = completed;
    }

    getCompleted() {
        return this.completed;
    }

    checked() {
        this.completed = true;
    }

    unchecked() {
        this.completed = false;
    }
}
