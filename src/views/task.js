import View from "./view";

function createCheckbox() {
    return `<svg width="45" height="45" viewbox="0 0 95 95">
   <rect x="30" y="20" width="50" height="50" stroke="black" fill="none" />
   <g transform="translate(0,-952.36222)">
     <path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4 " stroke="black" stroke-width="3" fill="none" class="path1" />
   </g>
 </svg>`;
}

export default function renderTasks(project) {
    const tasks = project.tasks;
    const projectDescription = document.querySelector(".tasks");
    projectDescription.replaceChildren();

    if (tasks) {
        tasks.forEach((task) => {
            let index = tasks.indexOf(task);
            console.log(index);
            const checkboxWrapper = View.createElement(
                "div",
                "",
                "checkbox-wrapper"
            );
            const checkbox = document.createElement("input");
            const label = View.createElement("label", "", "label");
            label.setAttribute("for", "complete" + index);
            label.setAttribute("for", "complete" + index);
            label.innerHTML = createCheckbox();
            const isComplete = task.completed;
            const taskContainer = View.createElement(
                "div",
                "",
                "task-container"
            );
            const container = View.createElement("div", "", "form-container");
            checkbox.setAttribute("id", "complete" + index);
            checkbox.setAttribute("class", "check");
            checkbox.setAttribute("type", "checkbox");
            const header = View.createElement("div", "", "task-header");
            const title = View.createElement("h3", task.title);
            const formButtons = View.createElement("div", "", "task-buttons");
            const edit = View.createElement("button", "");
            const del = View.createElement("button", "");

            const p = View.createElement("p", task.desc, "description");
            container.setAttribute("class", "card");

            formButtons.appendChild(edit);
            formButtons.appendChild(del);
            header.appendChild(title);
            header.appendChild(formButtons);

            taskContainer.appendChild(header);
            taskContainer.appendChild(p);

            checkboxWrapper.appendChild(checkbox);
            checkboxWrapper.appendChild(label);

            container.appendChild(checkboxWrapper);
            container.appendChild(taskContainer);
            projectDescription.appendChild(container);

            if (isComplete === true) {
                checkbox.setAttribute("checked", "true");
                taskContainer.setAttribute("class", "strikethrough");
                const parent = taskContainer.parentNode;
                parent.setAttribute("class", "card grey");
            }
        });
    }
}