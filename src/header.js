import loadBody from "./body";

function loadNavBtns() {
    const nav = document.createElement("nav");
    const buttons = {
        "home":"Home",
        "menu":"Menu",
        "aboutUs":"About Us",
        "contact":"Contact"
    };

    for (const button in buttons) {
        const btn = document.createElement("button");
        btn.innerText = buttons[button];
        btn.id = button;
        btn.addEventListener("click", (event) => {
            console.log(event.target.id);
            loadBody(event.target.id);
        })
        nav.appendChild(btn);
    }

    nav.classList.add("header");

    return nav;
}

function loadHeader() {
    const header = document.createElement("header");
    const title = document.createElement("h1");
    const subTitle = document.createElement("h4");
    title.classList.add("title");
    title.id = "title";
    title.innerText = ("Ozzie Kebabs");

    subTitle.classList.add("subtitle");
    subTitle.id = "subtitle";
    subTitle.innerText = "123 Murrumbeena Road, Murrumbeena";
    const btns = loadNavBtns();
    header.classList.add("header");
    header.appendChild(title);
    header.appendChild(subTitle);
    header.appendChild(btns);
    header.classList.add("center");
    return header;
}

export default loadHeader;