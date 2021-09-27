function loadFooter() {
    const footer = document.createElement("footer");
    const a = document.createElement("a");
    const gitHubText = document.createTextNode("Github");
    a.appendChild(gitHubText);
    a.href = "https://github.com/jeremy-browne/top-restaurant"
    footer.innerHTML = "Jeremy Browne - ";
    footer.appendChild(a);
    footer.classList.add("footer");
    return footer;
}

export default loadFooter;