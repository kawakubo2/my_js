window.addEventListener('DOMContentLoaded', event => {
    const element = document.getElementById("p1");
    element.addEventListener("dragstart", dragstart);
});

const dragstart = event => {
    event.dataTransfer.setData("text/plain", event.target.id);
};

