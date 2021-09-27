import { LoremIpsum } from "lorem-ipsum";

function aboutUs(element) {
    const title = document.getElementById("title").innerText;
    const descriptionBox = document.createElement("div");
    const description = document.createElement("p");
    description.classList.add("bodyDesc");
    const lorem = new LoremIpsum({
        sentencesPerParagraph: {
            max: 8,
            min: 4,
        },
        wordsPerSentence: {
            max: 16,
            min: 4,
        },
    });

    const loremElem = document.createElement("p");
    loremElem.innerText = lorem.generateParagraphs(1);
    
    description.innerText = title + ` was born during COVID in 2020. \n
        We are available for pickup or delivery via Uber Eats, Doordash, or probably some other delivery services.`;
    descriptionBox.appendChild(description);
    descriptionBox.appendChild(loremElem);
    element.appendChild(descriptionBox);

    return element;
}

export default aboutUs;