async function loadComponent(id, file){

    const response = await fetch(file);

    const html = await response.text();

    document.getElementById(id).innerHTML = html;

    console.log("Loaded:", id);

    if(id === "header" && typeof initSearch === "function"){

        console.log("Calling initSearch");

        initSearch();

    }

}

loadComponent("header","header.html");

loadComponent("footer","footer.html");

// ---------- Google Analytics ----------

const ga = document.createElement("script");
ga.async = true;
ga.src = "https://www.googletagmanager.com/gtag/js?id=G-4WECRVSVHD";
document.head.appendChild(ga);

window.dataLayer = window.dataLayer || [];
window.gtag = function () {
    dataLayer.push(arguments);
};

gtag("js", new Date());
gtag("config", "G-4WECRVSVHD");
