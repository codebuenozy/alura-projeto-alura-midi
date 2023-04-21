// Seleciona todos os elementos com a classe "tecla"
const listaDeTeclas = document.querySelectorAll(".tecla");

// Seleciona todos os elementos com a classe "som"
const listaDeSons = document.querySelectorAll(".som")

// Adiciona o evento de clique a cada elemento com a classe "tecla"
listaDeTeclas.forEach((indiceTecla, indiceSom) => {
    indiceTecla.addEventListener("click", function () {
        listaDeSons[indiceSom].play();
    });
});

// Adiciona o evento de teclado ao documento
document.addEventListener("keydown", function(event) {
    // Obtém o código da tecla pressionada
    const tecla = event.code;
    // Verifica se a tecla pressionada corresponde a uma das teclas desejadas
    switch (tecla) {
      case "KeyQ":
        listaDeSons[0].play();
        listaDeTeclas[0].classList.add("ativa");
        break;
      case "KeyW":
        listaDeSons[1].play();
        listaDeTeclas[1].classList.add("ativa");
        break;
      case "KeyE":
        listaDeSons[2].play();
        listaDeTeclas[2].classList.add("ativa");
        break;
      case "KeyA":
        listaDeSons[3].play();
        listaDeTeclas[3].classList.add("ativa");
        break;
      case "KeyS":
        listaDeSons[4].play();
        listaDeTeclas[4].classList.add("ativa");
        break;
      case "KeyD":
        listaDeSons[5].play();
        listaDeTeclas[5].classList.add("ativa");
        break;
      case "KeyZ":
        listaDeSons[6].play();
        listaDeTeclas[6].classList.add("ativa");
        break;
      case "KeyX":
        listaDeSons[7].play();
        listaDeTeclas[7].classList.add("ativa");
        break;
      case "KeyC":
        listaDeSons[8].play();
        listaDeTeclas[8].classList.add("ativa");
        break;
    }
  });

  // Adiciona o evento de teclado ao documento
  document.addEventListener("keyup", function(event) {
    // Obtém o código da tecla solta
    const tecla = event.code;
    // Verifica se a tecla solta corresponde a uma das teclas desejadas
    switch (tecla) {
        case "KeyQ":
            listaDeTeclas[0].classList.remove("ativa");
            break;
        case "KeyW":
            listaDeTeclas[1].classList.remove("ativa");
            break;
        case "KeyE":
            listaDeTeclas[2].classList.remove("ativa");
            break;
        case "KeyA":
            listaDeTeclas[3].classList.remove("ativa");
            break;
        case "KeyS":
            listaDeTeclas[4].classList.remove("ativa");
            break;
        case "KeyD":
            listaDeTeclas[5].classList.remove("ativa");
            break;
        case "KeyZ":
            listaDeTeclas[6].classList.remove("ativa");
            break;
        case "KeyX":
            listaDeTeclas[7].classList.remove("ativa");
            break;
        case "KeyC":
            listaDeTeclas[8].classList.remove("ativa");
            break;
    }
});
