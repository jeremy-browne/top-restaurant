import loadHeader from "./header";
import loadBody from "./body";
import loadFooter from "./footer";

function loadPage() {
    const content = document.getElementById("content");
    const header = loadHeader();
    const footer = loadFooter();
    content.appendChild(header);
    loadBody("home");
    content.appendChild(footer);
    content.classList.add("center");
}

export default loadPage();