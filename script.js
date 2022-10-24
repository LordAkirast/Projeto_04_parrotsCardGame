///ATENÇÃO TEM QUE MUDAR O LINK DA TITIA NO CHANGE IMAGE DEIXANDO SO O CAMINHO DA PASTA
// SENAÕ NAO VAI FUNCIONAR MAIS

///declaração de variaveis
let cardQt = 0;
let z = 0; //para o randomizador
let round = 0;
let imagemCarta = [
  "cleave.png",
  "strike.png",
  "defend.png",
  "flamebarrier.png",
  "hemo.png",
  "ironwave.png",
  "rampage.png",
  "twinstrike.png"
];

let imagemCartaPt1 = [];
let imagemCartaPt2 = [];
let ordemCarta = [];
let choosed = [];
let y = Math.floor(Math.random() * 8 + 0);

let src = "";
let elemento = document.querySelector("article");

let elemento2 = document.querySelector("section");

function comparador() {
  return Math.random() - 0.5;
}

function randomizar() {
  let half = cardQt / 2; //divide por 2 para duplicar as cartas
  let c = 8; ///o c recebe 8 para quando retirar um da lista de cartas selecionadas, ele diminua tambem e o array n receba um valor q n existe
  while (z < half) {
    ordemCarta.push(imagemCarta[y]);
    console.log("antes: " + imagemCarta);
    console.log("deve retirar: " + imagemCarta[y]);
    if (y === 0) {
      y = y + 1;
      imagemCartaPt1 = imagemCarta.slice(y);
      imagemCartaPt2 = imagemCartaPt1;
      imagemCarta = imagemCartaPt1;
      console.log("Y = 0 depois: " + imagemCarta);
    } else {
      imagemCartaPt1 = imagemCarta.slice(0, y);
      imagemCartaPt2 = imagemCarta.slice(y + 1);
      imagemCarta = imagemCartaPt1.concat(imagemCartaPt2);
      console.log("depois: " + imagemCarta);
    }
    c = c - 1;
    y = Math.floor(Math.random() * c + 0);
    z = z + 1;
  }
  ordemCarta = ordemCarta.concat(ordemCarta);
  ordemCarta.sort(comparador);
  console.log(ordemCarta);

  for (let p in ordemCarta) {
    src = ordemCarta[p];
  }
}

function selectCards() {
  randomizar();
  for (let i = 0; i < cardQt; i++) {
    if (i % 2 === 0) {
      src = ordemCarta[i];
      src = src.replace(".png", "");
      elemento.innerHTML +=
        '<img  id="teste" onclick="turn(this)" class="' +
        src +
        '"' +
        'src="./images/cards.png" />';
    } else {
      src = ordemCarta[i];
      src = src.replace(".png", "");
      elemento2.innerHTML +=
        '<img id="teste" onclick="turn(this)" class="' +
        src +
        '"' +
        'src="./images/cards.png" />';
    }
  }
}

let win = 0;
function turn(cartinha) {
  round = round + 1;
  choosed.push(cartinha.classList.value);
  cartinha.classList.toggle("-bye");
  cartinha.removeAttribute("onclick");
  if (choosed[0] !== choosed[1] && choosed.length > 3) {
    alert("você perdeu em " + round + " rodadas! recomeçar? 1 - Sim | 2 - Não");
    let reload = prompt();
    if (reload === "1") {
      window.location.reload();
    } else {
      alert("LOSER");
      window.location.replace("https://slaytheweb.cards/");
    }
  }
  if (choosed.length === Number(cardQt)) {
    document.querySelector("#titulo").innerHTML = "CLICK ME";
    alert("Você ganhou em " + round + "rodadas! Recomeçar? 1 - Sim | 2 Não");
    let reload = prompt();
    if (reload === "1") {
      window.location.reload();
    } else {
      alert("LOSER");
    }
  }
}

function spire() {
  window.location.replace("https://slaytheweb.cards/");
}

////verifica a qtd de cartas, se menor que 4 ou maior
//q 14 fica em loopíng se impar também.
while (cardQt < 4 || cardQt > 14) {
  cardQt = prompt(
    "Deseja jogar com quantas cartas? Número de 4 a 14. Sem ser número impar."
  );
  if (cardQt < 4 || cardQt > 14) {
    alert("Escolha um número par entre 4 e 14.");
    cardQt = 0;
  }
  if (cardQt % 2 !== 0) {
    alert("Entre com um valor que seja par.");
    cardQt = 0;
  }
  selectCards();
}
///printa o que tá dentro do article
