async function hentMenu() {

    let menufil = await fetch("menu.html");
    let menu = await menufil.text();

    document.querySelector("[data-menu]").innerHTML = menu;
}

window.addEventListener("load", hentMenu);
