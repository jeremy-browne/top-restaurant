import { Loader } from "@googlemaps/js-api-loader";

// API Key: AIzaSyCvfc5aPmtDup_47vrRdT6kPl5boQLvHrM


const loader = new Loader({
    apiKey: "AIzaSyCvfc5aPmtDuP_47vrRdT6kPl5boQLvHrM",
    version: "weekly",
});

function contact(element) {
    const descriptionBox = document.createElement("div");
    descriptionBox.id = "contact"

    const description = document.createElement("p");
    description.classList.add("bodyDesc");
    description.innerText = "Phone: 0400 000 000";
    descriptionBox.appendChild(description);

    const email = document.createElement("p");
    email.innerText = "Email: mailus@kebabplace.com.au";
    descriptionBox.appendChild(email);

    const mapElem = document.createElement("div")
    mapElem.id = "map";
    let map;
    let marker;
    loader.load().then(() => {
        map = new google.maps.Map(document.getElementById("map"), {
            center: {lat: -37.7475805, lng: 145.0226729},
            zoom: 8,
        });

        marker = new google.maps.Marker({
            position: {lat: -37.7475805, lng: 145.0226729},
        });
    });

    descriptionBox.appendChild(mapElem);
    
    element.appendChild(descriptionBox);

    return element;
}

export default contact;