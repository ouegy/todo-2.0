import View from "./view";

// this is fine.

export function createForm(type) {
    const formContainer = View.createElement("div", "", "form-container");
    const formHeader = View.createElement("div", "", "form-header");
    const formTitle = View.createElement("h2", "Add " + type);

    const form = document.createElement("form");
    form.setAttribute("id", "add");
    const left = View.createElement("fieldset", "", "form-left");
    const right = View.createElement("fieldset", "", "form-right");
    const buttonContainer = View.createElement("div", "", "button-container");

    const title = View.createElement("label", "Title");
    const error = View.createElement("span", "", "hidden");
    title.setAttribute("for", "title");
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "title");

    const description = View.createElement("label", "Description");
    description.setAttribute("for", "description");
    const input2 = document.createElement("textarea");
    input2.setAttribute("id", "description");

    const date = View.createElement("label", "Due Date");
    date.setAttribute("for", "date");
    const input3 = document.createElement("input");
    input3.setAttribute("type", "date");
    input3.setAttribute("id", "date");

    const priority = View.createElement("label", "Priority");
    priority.setAttribute("for", "date");
    const input4 = document.createElement("select");
    input4.setAttribute("id", "priority");

    const placeholder = View.createElement("option");
    placeholder.textContent = "--Please set priority--";
    const high = View.createElement("option", "Priority");
    high.setAttribute("value", "1");
    high.textContent = "High";
    const med = View.createElement("option", "Priority");
    med.setAttribute("value", "2");
    med.textContent = "Medium";
    const low = View.createElement("option", "Priority");
    low.setAttribute("value", "3");
    low.textContent = "Low";

    const submit = View.createElement("button", "Add " + type, "button");
    submit.setAttribute("id", "submit");
    submit.setAttribute("data-type", type);

    const close = View.createElement("button", "Close", "button");
    close.setAttribute("id", "close");

    formHeader.appendChild(formTitle);
    formContainer.appendChild(formHeader);
    formContainer.appendChild(form);

    input4.appendChild(placeholder);
    input4.appendChild(low);
    input4.appendChild(med);
    input4.appendChild(high);

    left.appendChild(title);
    left.appendChild(input);
    left.appendChild(error);
    left.appendChild(description);
    left.appendChild(input2);
    left.appendChild(buttonContainer);

    right.appendChild(date);
    right.appendChild(input3);
    right.appendChild(priority);
    right.appendChild(input4);

    buttonContainer.appendChild(submit);
    buttonContainer.appendChild(close);

    form.appendChild(left);
    form.appendChild(right);

    return formContainer;
}
