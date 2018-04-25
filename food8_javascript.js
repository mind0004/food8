let posts;
let minTemplate = document.querySelector("#myTemplate");

//vis template i DOM
document.addEventListener("DOMContentLoaded", hentJson);

async function hentJson() {

    //hent Json0
    let jsonObjekt = await fetch("http://mikkelhein.dk/kea/food8/wordpress/wp-json/wp/v2/shortposts")

    //vis objekt som json
    posts = await jsonObjekt.json();
    console.log(posts);

    visPosts();

}

//lav klon af template
function visPosts() {
    //console.log(posts);

    //kør jSon array'et igennem og lav en klon af min template
    posts.forEach(element => {

        let klon = minTemplate.cloneNode(true).content;
        let nummer = Number(-60);

        klon.querySelector("[data-navn]").innerHTML = element.title.rendered;
        //klon.querySelector("[data-type]").textContent = element.acf.fugletype;
        klon.querySelector("[data-tekst]").innerHTML = element.content.rendered;
        //klon.querySelector("[data-billede]").src = element.featured_media;

        klon.querySelector("[data-single]").href = "single.html?restaurant=" + (element.id + nummer);
        klon.querySelector("[data-readmore]").href = "single.html?restaurant=" + (element.id + nummer);

        document.querySelector("#modtager").appendChild(klon);

    })

}
