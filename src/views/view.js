import createForm from "./form";
import Controller from "../controller";

import { renderSidebarProjects } from "./sidebar";

export default class View {
    static addGlobalEventListener(type, selector, callback, options) {
        document.addEventListener(
            type,
            (e) => {
                if (e.target.matches(selector)) callback(e);
            },
            options
        );
    }
    static createElement(tag, text, classes) {
        const ele = document.createElement(tag);
        ele.textContent = text;
        if (classes) ele.classList.add(classes);
        return ele;
    }
    static createHeader(pageName, classes) {
        const home = document.createElement("div", classes);
        const title = this.createElement("h1", pageName, "title");
        home.appendChild(title);
        return home;
    }
    static renderForm() {
        const main = document.getElementById("main");
        const formContainer = document.createElement("div");
        formContainer.setAttribute("id", "form-container");
        main.prepend(formContainer);
        formContainer.appendChild(createForm());
        formContainer.classList.add("fade-in");
    }
    static removeForm() {
        const parent = document.getElementById("main");
        parent.classList.remove("fade-in");
        const child = document.getElementById("form-container");
        parent.removeChild(child);
    }
    static renderSidebarProjects() {
        return renderSidebarProjects();
    }
    static renderTasks(project) {
        const tasks = project.tasks;
        const description = document.querySelector(".description");
        const ul = document.createElement("ul");
        tasks.forEach((task) => {
            const li = this.createElement("li", task.title);
            ul.appendChild(li);
            description.appendChild(ul);
        });
    }
    static loadProjectView(project) {
        const content = document.getElementById("main");
        content.replaceChildren();
        content.appendChild(this.createProjectView(project));
        this.renderTasks(project);
    }
    static createProjectView(project) {
        const projectView = this.createHeader(project.title, "project");
        const description = this.createElement(
            "p",
            project.desc,
            "description"
        );
        projectView.appendChild(description);
        return projectView;
    }
    static getFormData() {
        let title = document.getElementById("title").value;
        console.log("View - get form data");
        let description = document.getElementById("description").value;
        let date = document.getElementById("date").value;

        return { title, description, date };
    }
}
