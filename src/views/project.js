import View from "./view";

export default function createProjectView(project) {
    const projectsContainer = document.createElement("div");
    projectsContainer.setAttribute("class", "project-container");
    const projectHeader = View.createElement("div", "", "project-header");
    const projectTitle = View.createHeader(project.title, "project");
    const projectButtons = View.createElement("div", "", "project-buttons");
    const edit = View.createElement("button", "", "edit-project");
    const del = View.createElement("button", "", "delete-project");
    const add = View.createElement("button", "+ Add Task", "button");
    const description = View.createElement("div", project.desc, "tasks");

    add.setAttribute("id", "add-task"); // set an id on the button to allow a click event listener

    projectButtons.appendChild(edit);
    projectButtons.appendChild(del);
    projectButtons.appendChild(add);
    projectHeader.appendChild(projectTitle);
    projectHeader.appendChild(projectButtons);
    projectsContainer.appendChild(projectHeader);
    projectsContainer.appendChild(description);

    return projectsContainer;
}
