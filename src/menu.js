import menuImage from "./images/homeImage.jpg";

function newMenuItem(name, desc, price, image) {
    const menuItem = document.createElement("div");
    const title = document.createElement("h3");
    const description = document.createElement("p");
    const priceTag = document.createElement("p");
    const img = document.createElement("img");
    const link = document.createElement("a");
    link.href = "https://www.doordash.com/en-AU/store/ozzie-kebabs-murrumbeena-murrumbeena-1040349";
    link.innerText = "Order on Doordash";

    title.innerText = name;
    description.innerText = desc;
    priceTag.innerText = price;
    img.src = image;

    menuItem.appendChild(title);
    menuItem.appendChild(description);
    menuItem.appendChild(priceTag);
    menuItem.appendChild(img);
    menuItem.appendChild(document.createElement("br"));
    menuItem.appendChild(link);
    menuItem.appendChild(document.createElement("hr"));
    menuItem.classList.add("menuItem");

    return menuItem;
}

function menu(element) {
    const title = document.getElementById("title").innerText;
    const descriptionBox = document.createElement("div");
    const description = document.createElement("p");
    const foods = [
        newMenuItem("Mixed Kebab", "A delicious mixed Kebab with lots of things.", "$9.99", menuImage),
        newMenuItem("HSP", "A mixed HSP with hot chilli, garlic and BBQ sauce.", "$12.99", menuImage),
        newMenuItem("Kebab combo", "A mixed Kebab with a can of drink and chips.", "$25.99", menuImage),
        newMenuItem("HSP Combo", "A mixed HSP with a can of drink and a side of chips.", "$25.99", menuImage)
    ];
    
    descriptionBox.appendChild(description);
    description.innerText = title + " has many delicious good foods.";

    foods.forEach(item => {
        descriptionBox.appendChild(item);
    });
    
    element.appendChild(descriptionBox);

    return element;
}

export default menu;