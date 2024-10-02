export default class Project {
    constructor(title, desc, date, ...tasks) {
        this.title = title;
        this.desc = desc;
        this.date = date;
        this.tasks = tasks;
    }
}
