// ======================================================
// Load HTML Component
// ======================================================

async function loadComponent(id, file){

    const response = await fetch(file);
    const html = await response.text();

    document.getElementById(id).innerHTML = html;

    // เมื่อ Header โหลดเสร็จ
    if(id === "header"){

        await loadScript("products-data.js");
        await loadScript("search.js");
        await loadScript("mobile-menu.js");

        if(typeof initSearch === "function"){
            initSearch();
        }

    }

}

// ======================================================
// Load JavaScript
// ======================================================

function loadScript(src){

    return new Promise((resolve)=>{

        // ถ้าโหลดไปแล้ว ไม่โหลดซ้ำ
        if(document.querySelector(`script[src="${src}"]`)){
            resolve();
            return;
        }

        const script = document.createElement("script");

        script.src = src;

        script.onload = resolve;

        document.body.appendChild(script);

    });

}


// ======================================================
// Load Header / Footer
// ======================================================

loadComponent("header","header.html");
loadComponent("footer","footer.html");


// ======================================================
// Google Analytics
// ======================================================

const ga = document.createElement("script");

ga.async = true;

ga.src = "https://www.googletagmanager.com/gtag/js?id=G-4WECRVSVHD";

document.head.appendChild(ga);

window.dataLayer = window.dataLayer || [];

window.gtag = function(){

    dataLayer.push(arguments);

};

gtag("js", new Date());

gtag("config", "G-4WECRVSVHD");
