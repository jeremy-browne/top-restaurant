import menuImage from "./images/homeImage.jpg";

function homePage(element) {
    const image = document.createElement("img");
    image.src = menuImage;

    const title = document.getElementById("title").innerText;
    const descriptionBox = document.createElement("div");
    const description = document.createElement("p");
    
    description.innerText = title + " is your destination for Charcoal Grill Kebabs in Murrumbeena. \n\n Made with passion since 2020.";
    description.classList.add("bodyDesc");
    descriptionBox.appendChild(description);
    descriptionBox.appendChild(image);
    element.appendChild(descriptionBox);

    return element;
}

export default homePage;