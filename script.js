let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "@rasinformática");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de filmes com Qi alto?");
  campoAventura = createCheckbox("Gosta de filme sobre sistemas?");
}

function draw() {
  background("#8BC34A");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(6, 10, 15));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Rafael, Fabiula, Maria Helena, Isabel";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Github-professor-rafael";          
        } else{
         return "Programando com html e css";
        }
      } else {
        if (gostaDeFantasia) {
          return "Tele hackers";
        } else {
          return "Nenhum sistema é 100% seguro";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "@rasinformática";
    } else {
      return "Todo Hacker tem um início";
    }
  }
}
