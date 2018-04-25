window.addEventListener("load", hentMenu);

async function hentMenu() {

    let menufil = await fetch("menu.html");
    let menu = await menufil.text();

}

// BURGER MENU START */
document.querySelector(".burger").addEventListener("click", toggleMenu);

function toggleMenu() {
    document.querySelector(".burger").classList.toggle("change");
    document.querySelector("#burgerlinks").classList.toggle("show");

}

// BURGER MENU SLUT */
