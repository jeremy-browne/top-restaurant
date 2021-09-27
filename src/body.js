import homePage from "./home";
import aboutUs from "./aboutUs";
import contact from "./contact";
import menu from "./menu";

function loadBody(tab) {
    let body = document.getElementById("body");
    if (null == body) {
        body = document.createElement("div");
    }
    body.id = "body";
    body.classList.add("body");
    body.innerHTML = "";

    switch (tab) {
        case "home":
            body = homePage(body);
            break;

        case "menu":
            body = menu(body);
            break;

        case "aboutUs":
            body = aboutUs(body);
            break;

        case "contact":
            body = contact(body);
            break;
    
        default:
            body.innerText = "Unknown!";
            break;
    }

    content.appendChild(body);

    return;
}

export default loadBody;