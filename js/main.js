const pom = document.querySelector(".tecla_pom");
const clap = document.querySelector(".tecla_clap");
const tim = document.querySelector(".tecla_tim");

const puff = document.querySelector(".tecla_puff");
const splash = document.querySelector(".tecla_splash");
const toim = document.querySelector(".tecla_toim");

const psh = document.querySelector(".tecla_psh");
const tic = document.querySelector(".tecla_tic");
const tom = document.querySelector(".tecla_tom");

pom.addEventListener("click", function () {
    document.querySelector("#som_tecla_pom").play()
});

clap.addEventListener("click", function () {
    document.querySelector("#som_tecla_clap").play()
});

tim.addEventListener("click", function () {
    document.querySelector("#som_tecla_tim").play()
});

puff.addEventListener("click", function () {
    document.querySelector("#som_tecla_puff").play()
});

splash.addEventListener("click", function () {
    document.querySelector("#som_tecla_splash").play()
});

toim.addEventListener("click", function () {
    document.querySelector("#som_tecla_toim").play()
});

psh.addEventListener("click", function () {
    document.querySelector("#som_tecla_psh").play()
});

tic.addEventListener("click", function () {
    document.querySelector("#som_tecla_tic").play()
});

tom.addEventListener("click", function () {
    document.querySelector("#som_tecla_tom").play()
});



