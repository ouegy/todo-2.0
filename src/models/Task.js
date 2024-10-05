export default class Task {
    constructor(title, desc, date) {
        this.title = title;
        this.desc = desc;
        this.date = date;
    }

    setTitle(title) {
        this.title = title;
    }

    getTitle() {
        return this.title;
    }
}
