import "./styles.css";
import Project from "./models/project";
import View from "./views/view";
import Controller from "./controller";

const app = new App();

function App() {
    const model = new Project();
    const view = new View();
    const controller = new Controller(view, model);

    return { model, view, controller };
}

app.controller.myMethod();

console.log(app.controller);
