function toggleMenu() {
    const nav = document.querySelector("nav");
    nav.classList.toggle("active");
}


function showMessage() {

    const toast = document.getElementById("toast");

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}


// Menü linkine basınca mobil menüyü kapat
document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        document.querySelector("nav").classList.remove("active");

    });

});


// Sayfa açılış animasyonu
document.addEventListener("DOMContentLoaded", () => {

    document.body.classList.add("loaded");

});
