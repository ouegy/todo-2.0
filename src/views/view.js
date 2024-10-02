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
    static loadForm() {
        const content = document.getElementById("form-container");
        content.appendChild(createForm());
        content.classList.add("fade-in");
    }
    static closeForm() {
        const parent = document.getElementById("form-container");
        parent.classList.remove("fade-in");
        const child = document.getElementById("add");
        parent.removeChild(child);
    }
    static renderSidebarProjects() {
        return renderSidebarProjects();
    }
}

// View.addGlobalEventListener("click", "a", (e) => {
//     e.preventDefault();
//     console.log(e.target.textContent);
//     return e.target.textContent;
// });

// View.addGlobalEventListener("click", "#add-project", (e) => {
//     e.preventDefault();
//     View.loadForm();
// });

// View.addGlobalEventListener("click", "#close", (e) => {
//     e.preventDefault();
//     View.closeForm();
// });
