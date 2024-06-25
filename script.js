document.addEventListener("DOMContentLoaded", () => {
    // Example of a simple interactive element
    const header = document.querySelector("header h1");
    header.addEventListener("mouseover", () => {
        header.style.color = "yellow";
    });
    header.addEventListener("mouseout", () => {
        header.style.color = "white";
    });
});
