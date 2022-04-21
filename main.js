import App from "./App.js";

const root = document.getElementById("app");
const app = new App(root);
document.getElementById("darktheme").onclick = function() { darkclick() };

function darkclick() {
    document.body.style.backgroundColor = "grey"
    document.getElementById('darktheme').style.color = 'red'

}