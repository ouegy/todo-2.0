import View from "./view";

export default function createProjectView(project) {
    const projectsContainer = View.createElement(
        "div",
        "",
        "project-container"
    );
    const projectHeader = View.createElement("div", "", "project-header");
    const projectTitle = View.createHeader(project.title, "project");
    const projectButtons = View.createElement("div", "", "project-buttons");
    const edit = View.createElement("button", "");
    const del = View.createElement("button", "");
    const add = View.createElement("button", "+ Add Task", "button");
    const description = View.createElement("div", project.desc, "tasks");

    add.setAttribute("id", "add-task");

    projectButtons.appendChild(edit);
    projectButtons.appendChild(del);
    projectButtons.appendChild(add);
    projectHeader.appendChild(projectTitle);
    projectHeader.appendChild(projectButtons);
    projectsContainer.appendChild(projectHeader);
    projectsContainer.appendChild(description);

    return projectsContainer;
}
