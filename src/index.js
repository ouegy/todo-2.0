import "./styles.css";
import Storage from "./Storage";
import View from "./views/View";

document.addEventListener("DOMContentLoaded", () => {
    View.loadHomeView();
    Storage.populateStorage();
});
