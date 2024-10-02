import Controller from "../controller";
import View from "./view";

export function renderSidebarProjects() {
    const sidebarList = document.getElementById("projects");
    sidebarList.replaceChildren();
    const projects = Controller.getProjects();

    projects.forEach((project) => {
        const li = document.createElement("li");
        const a = View.createElement("a", project.title, "project");
        a.setAttribute("href", "#");
        li.appendChild(a);
        sidebarList.appendChild(li);
        a.addEventListener("click", (e) => {
            e.preventDefault;
            //loadProjectView(project);
        });
    });
}
