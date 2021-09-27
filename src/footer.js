function loadFooter() {
    const footer = document.createElement("footer");
    const gitHub = document.createElement("a");
    footer.innerText = "Jeremy Browne ";
    footer.classList.add("footer");
    return footer;
}

export default loadFooter;