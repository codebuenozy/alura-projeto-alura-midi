const listaDeTeclas = document.querySelectorAll(".tecla");
const listaDeSons = document.querySelectorAll(".som")

listaDeTeclas.forEach((indiceTecla, indiceSom) => {
    indiceTecla.addEventListener("click", function () {
        listaDeSons[indiceSom].play();
    });
});