///ATENÇÃO TEM QUE MUDAR O LINK DA TITIA NO CHANGE IMAGE DEIXANDO SO O CAMINHO DA PASTA
// SENAÕ NAO VAI FUNCIONAR MAIS

///declaração de variaveis
let cardId;

function changeImage1() {
  ///se o src da carta for diferente dela padrão
  if (
    document.getElementById("cardtr1").src ==
    "https://5c2qg3.csb.app/images/cards.png"
  ) {
    ///a imagem recebe outro src
    document.getElementById("cardtr1").src = "./images/strike.png";
  } else {
    ///se ao clicar ela for diferente. então ela recebe o src padrão
    document.getElementById("cardtr1").src = "./images/cards.png";
  }
}

function changeImage2() {
  ///se o src da carta for diferente dela padrão
  if (
    document.getElementById("cardtr2").src ==
    "https://5c2qg3.csb.app/images/cards.png"
  ) {
    ///a imagem recebe outro src
    document.getElementById("cardtr2").src = "./images/strike.png";
  } else {
    ///se ao clicar ela for diferente. então ela recebe o src padrão
    document.getElementById("cardtr2").src = "./images/cards.png";
  }
}
