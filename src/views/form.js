import View from "./view";

// this is fine.

export default function createForm(type) {
    const form = document.createElement("form");
    form.setAttribute("id", "add");

    const title = View.createElement("label", "Title");
    title.setAttribute("for", "title");
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "title");

    const description = View.createElement("label", "Description");
    description.setAttribute("for", "description");
    const input2 = document.createElement("input");
    input2.setAttribute("type", "text");
    input2.setAttribute("id", "description");

    const date = View.createElement("label", "Due Date");
    date.setAttribute("for", "date");
    const input3 = document.createElement("input");
    input3.setAttribute("type", "date");
    input3.setAttribute("id", "date");

    const submit = View.createElement("button", "Add " + type);
    submit.setAttribute("id", "submit");
    submit.setAttribute("data-type", type);

    const close = View.createElement("button", "Close");
    close.setAttribute("id", "close");

    form.appendChild(title).appendChild(input);
    form.appendChild(description).appendChild(input2);
    form.appendChild(date).appendChild(input3);
    form.appendChild(submit);
    form.appendChild(close);

    return form;
}
