///ATENÇÃO TEM QUE MUDAR O LINK DA TITIA NO CHANGE IMAGE DEIXANDO SO O CAMINHO DA PASTA
// SENAÕ NAO VAI FUNCIONAR MAIS

///declaração de variaveis
let cardQt = 0;

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
}

///aleatoriedade de cartas
let cardOrder = Math.floor(Math.random() * 3);

if (cardOrder == 1) {
  document.getElementById("cardtr1").src = "./images/strike.png";
}
///funções para mudar a imagem ao clicar

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
    document.getElementById("cardtr2").src = "./images/defend.png";
  } else {
    ///se ao clicar ela for diferente. então ela recebe o src padrão
    document.getElementById("cardtr2").src = "./images/cards.png";
  }
}

function changeImage3() {
  ///se o src da carta for diferente dela padrão
  if (
    document.getElementById("cardtr3").src ==
    "https://5c2qg3.csb.app/images/cards.png"
  ) {
    ///a imagem recebe outro src
    document.getElementById("cardtr3").src = "./images/strike.png";
  } else {
    ///se ao clicar ela for diferente. então ela recebe o src padrão
    document.getElementById("cardtr3").src = "./images/cards.png";
  }
}

function changeImage4() {
  ///se o src da carta for diferente dela padrão
  if (
    document.getElementById("cardtr4").src ==
    "https://5c2qg3.csb.app/images/cards.png"
  ) {
    ///a imagem recebe outro src
    document.getElementById("cardtr4").src = "./images/strike.png";
  } else {
    ///se ao clicar ela for diferente. então ela recebe o src padrão
    document.getElementById("cardtr4").src = "./images/cards.png";
  }
}

function changeImage5() {
  ///se o src da carta for diferente dela padrão
  if (
    document.getElementById("cardtr5").src ==
    "https://5c2qg3.csb.app/images/cards.png"
  ) {
    ///a imagem recebe outro src
    document.getElementById("cardtr5").src = "./images/strike.png";
  } else {
    ///se ao clicar ela for diferente. então ela recebe o src padrão
    document.getElementById("cardtr5").src = "./images/cards.png";
  }
}

function changeImage6() {
  ///se o src da carta for diferente dela padrão
  if (
    document.getElementById("cardtr6").src ==
    "https://5c2qg3.csb.app/images/cards.png"
  ) {
    ///a imagem recebe outro src
    document.getElementById("cardtr6").src = "./images/strike.png";
  } else {
    ///se ao clicar ela for diferente. então ela recebe o src padrão
    document.getElementById("cardtr6").src = "./images/cards.png";
  }
}

function changeImage7() {
  ///se o src da carta for diferente dela padrão
  if (
    document.getElementById("cardtr7").src ==
    "https://5c2qg3.csb.app/images/cards.png"
  ) {
    ///a imagem recebe outro src
    document.getElementById("cardtr7").src = "./images/strike.png";
  } else {
    ///se ao clicar ela for diferente. então ela recebe o src padrão
    document.getElementById("cardtr7").src = "./images/cards.png";
  }
}

function changeImage8() {
  ///se o src da carta for diferente dela padrão
  if (
    document.getElementById("cardtr8").src ==
    "https://5c2qg3.csb.app/images/cards.png"
  ) {
    ///a imagem recebe outro src
    document.getElementById("cardtr8").src = "./images/strike.png";
  } else {
    ///se ao clicar ela for diferente. então ela recebe o src padrão
    document.getElementById("cardtr8").src = "./images/cards.png";
  }
}

function changeImage9() {
  ///se o src da carta for diferente dela padrão
  if (
    document.getElementById("cardtr9").src ==
    "https://5c2qg3.csb.app/images/cards.png"
  ) {
    ///a imagem recebe outro src
    document.getElementById("cardtr9").src = "./images/strike.png";
  } else {
    ///se ao clicar ela for diferente. então ela recebe o src padrão
    document.getElementById("cardtr9").src = "./images/cards.png";
  }
}

function changeImage10() {
  ///se o src da carta for diferente dela padrão
  if (
    document.getElementById("cardtr10").src ==
    "https://5c2qg3.csb.app/images/cards.png"
  ) {
    ///a imagem recebe outro src
    document.getElementById("cardtr10").src = "./images/strike.png";
  } else {
    ///se ao clicar ela for diferente. então ela recebe o src padrão
    document.getElementById("cardtr10").src = "./images/cards.png";
  }
}

function changeImage11() {
  ///se o src da carta for diferente dela padrão
  if (
    document.getElementById("cardtr11").src ==
    "https://5c2qg3.csb.app/images/cards.png"
  ) {
    ///a imagem recebe outro src
    document.getElementById("cardtr11").src = "./images/strike.png";
  } else {
    ///se ao clicar ela for diferente. então ela recebe o src padrão
    document.getElementById("cardtr11").src = "./images/cards.png";
  }
}

function changeImage12() {
  ///se o src da carta for diferente dela padrão
  if (
    document.getElementById("cardtr12").src ==
    "https://5c2qg3.csb.app/images/cards.png"
  ) {
    ///a imagem recebe outro src
    document.getElementById("cardtr12").src = "./images/strike.png";
  } else {
    ///se ao clicar ela for diferente. então ela recebe o src padrão
    document.getElementById("cardtr12").src = "./images/cards.png";
  }
}

function changeImage13() {
  ///se o src da carta for diferente dela padrão
  if (
    document.getElementById("cardtr13").src ==
    "https://5c2qg3.csb.app/images/cards.png"
  ) {
    ///a imagem recebe outro src
    document.getElementById("cardtr13").src = "./images/strike.png";
  } else {
    ///se ao clicar ela for diferente. então ela recebe o src padrão
    document.getElementById("cardtr13").src = "./images/cards.png";
  }
}

function changeImage14() {
  ///se o src da carta for diferente dela padrão
  if (
    document.getElementById("cardtr14").src ==
    "https://5c2qg3.csb.app/images/cards.png"
  ) {
    ///a imagem recebe outro src
    document.getElementById("cardtr14").src = "./images/strike.png";
  } else {
    ///se ao clicar ela for diferente. então ela recebe o src padrão
    document.getElementById("cardtr14").src = "./images/cards.png";
  }
}

///mostra as cartas selecionadas pelo jogador
///4 = 1,3 strike
if (cardQt == 4) {
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
      document.getElementById("cardtr2").src = "./images/defend.png";
    } else {
      ///se ao clicar ela for diferente. então ela recebe o src padrão
      document.getElementById("cardtr2").src = "./images/cards.png";
    }
  }

  function changeImage3() {
    ///se o src da carta for diferente dela padrão
    if (
      document.getElementById("cardtr3").src ==
      "https://5c2qg3.csb.app/images/cards.png"
    ) {
      ///a imagem recebe outro src
      document.getElementById("cardtr3").src = "./images/strike.png";
    } else {
      ///se ao clicar ela for diferente. então ela recebe o src padrão
      document.getElementById("cardtr3").src = "./images/cards.png";
    }
  }

  function changeImage4() {
    ///se o src da carta for diferente dela padrão
    if (
      document.getElementById("cardtr4").src ==
      "https://5c2qg3.csb.app/images/cards.png"
    ) {
      ///a imagem recebe outro src
      document.getElementById("cardtr4").src = "./images/defend.png";
    } else {
      ///se ao clicar ela for diferente. então ela recebe o src padrão
      document.getElementById("cardtr4").src = "./images/cards.png";
    }
  }
  document.getElementById("cardtr5").style.display = "none";
  document.getElementById("cardtr6").style.display = "none";
  document.getElementById("cardtr7").style.display = "none";
  document.getElementById("rowTwo").style.display = "none";
} else if (cardQt == 6) {
  function changeImage1() {
    ///se o src da carta for diferente dela padrão
    if (
      document.getElementById("cardtr1").src ==
      "https://5c2qg3.csb.app/images/cards.png"
    ) {
      ///a imagem recebe outro src
      document.getElementById("cardtr1").src = "./images/defend.png";
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

  function changeImage3() {
    ///se o src da carta for diferente dela padrão
    if (
      document.getElementById("cardtr3").src ==
      "https://5c2qg3.csb.app/images/cards.png"
    ) {
      ///a imagem recebe outro src
      document.getElementById("cardtr3").src = "./images/strike.png";
    } else {
      ///se ao clicar ela for diferente. então ela recebe o src padrão
      document.getElementById("cardtr3").src = "./images/cards.png";
    }
  }

  function changeImage4() {
    ///se o src da carta for diferente dela padrão
    if (
      document.getElementById("cardtr4").src ==
      "https://5c2qg3.csb.app/images/cards.png"
    ) {
      ///a imagem recebe outro src
      document.getElementById("cardtr4").src = "./images/cleave.png";
    } else {
      ///se ao clicar ela for diferente. então ela recebe o src padrão
      document.getElementById("cardtr4").src = "./images/cards.png";
    }
  }

  function changeImage5() {
    ///se o src da carta for diferente dela padrão
    if (
      document.getElementById("cardtr5").src ==
      "https://5c2qg3.csb.app/images/cards.png"
    ) {
      ///a imagem recebe outro src
      document.getElementById("cardtr5").src = "./images/defend.png";
    } else {
      ///se ao clicar ela for diferente. então ela recebe o src padrão
      document.getElementById("cardtr5").src = "./images/cards.png";
    }
  }

  function changeImage6() {
    ///se o src da carta for diferente dela padrão
    if (
      document.getElementById("cardtr6").src ==
      "https://5c2qg3.csb.app/images/cards.png"
    ) {
      ///a imagem recebe outro src
      document.getElementById("cardtr6").src = "./images/cleave.png";
    } else {
      ///se ao clicar ela for diferente. então ela recebe o src padrão
      document.getElementById("cardtr6").src = "./images/cards.png";
    }
  }
  document.getElementById("cardtr7").style.display = "none";
  document.getElementById("rowTwo").style.display = "none";
} else if (cardQt == 8) {
  function changeImage1() {
    ///se o src da carta for diferente dela padrão
    if (
      document.getElementById("cardtr1").src ==
      "https://5c2qg3.csb.app/images/cards.png"
    ) {
      ///a imagem recebe outro src
      document.getElementById("cardtr1").src = "./images/defend.png";
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

  function changeImage3() {
    ///se o src da carta for diferente dela padrão
    if (
      document.getElementById("cardtr3").src ==
      "https://5c2qg3.csb.app/images/cards.png"
    ) {
      ///a imagem recebe outro src
      document.getElementById("cardtr3").src = "./images/ironwave.png";
    } else {
      ///se ao clicar ela for diferente. então ela recebe o src padrão
      document.getElementById("cardtr3").src = "./images/cards.png";
    }
  }

  function changeImage4() {
    ///se o src da carta for diferente dela padrão
    if (
      document.getElementById("cardtr4").src ==
      "https://5c2qg3.csb.app/images/cards.png"
    ) {
      ///a imagem recebe outro src
      document.getElementById("cardtr4").src = "./images/defend.png";
    } else {
      ///se ao clicar ela for diferente. então ela recebe o src padrão
      document.getElementById("cardtr4").src = "./images/cards.png";
    }
  }

  function changeImage5() {
    ///se o src da carta for diferente dela padrão
    if (
      document.getElementById("cardtr5").src ==
      "https://5c2qg3.csb.app/images/cards.png"
    ) {
      ///a imagem recebe outro src
      document.getElementById("cardtr5").src = "./images/strike.png";
    } else {
      ///se ao clicar ela for diferente. então ela recebe o src padrão
      document.getElementById("cardtr5").src = "./images/cards.png";
    }
  }

  function changeImage6() {
    ///se o src da carta for diferente dela padrão
    if (
      document.getElementById("cardtr6").src ==
      "https://5c2qg3.csb.app/images/cards.png"
    ) {
      ///a imagem recebe outro src
      document.getElementById("cardtr6").src = "./images/cleave.png";
    } else {
      ///se ao clicar ela for diferente. então ela recebe o src padrão
      document.getElementById("cardtr6").src = "./images/cards.png";
    }
  }

  function changeImage7() {
    ///se o src da carta for diferente dela padrão
    if (
      document.getElementById("cardtr7").src ==
      "https://5c2qg3.csb.app/images/cards.png"
    ) {
      ///a imagem recebe outro src
      document.getElementById("cardtr7").src = "./images/ironwave.png";
    } else {
      ///se ao clicar ela for diferente. então ela recebe o src padrão
      document.getElementById("cardtr7").src = "./images/cards.png";
    }
  }

  function changeImage8() {
    ///se o src da carta for diferente dela padrão
    if (
      document.getElementById("cardtr8").src ==
      "https://5c2qg3.csb.app/images/cards.png"
    ) {
      ///a imagem recebe outro src
      document.getElementById("cardtr8").src = "./images/cleave.png";
    } else {
      ///se ao clicar ela for diferente. então ela recebe o src padrão
      document.getElementById("cardtr8").src = "./images/cards.png";
    }
  }
  document.getElementById("cardtr9").style.display = "none";
  document.getElementById("cardtr10").style.display = "none";
  document.getElementById("cardtr11").style.display = "none";
  document.getElementById("cardtr12").style.display = "none";
  document.getElementById("cardtr13").style.display = "none";
  document.getElementById("cardtr14").style.display = "none";
} else if (cardQt == 10) {
  //c7,10| d8,2 |i6,4 |s1,3

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
      document.getElementById("cardtr2").src = "./images/defend.png";
    } else {
      ///se ao clicar ela for diferente. então ela recebe o src padrão
      document.getElementById("cardtr2").src = "./images/cards.png";
    }
  }

  function changeImage3() {
    ///se o src da carta for diferente dela padrão
    if (
      document.getElementById("cardtr3").src ==
      "https://5c2qg3.csb.app/images/cards.png"
    ) {
      ///a imagem recebe outro src
      document.getElementById("cardtr3").src = "./images/strike.png";
    } else {
      ///se ao clicar ela for diferente. então ela recebe o src padrão
      document.getElementById("cardtr3").src = "./images/cards.png";
    }
  }

  function changeImage4() {
    ///se o src da carta for diferente dela padrão
    if (
      document.getElementById("cardtr4").src ==
      "https://5c2qg3.csb.app/images/cards.png"
    ) {
      ///a imagem recebe outro src
      document.getElementById("cardtr4").src = "./images/ironwave.png";
    } else {
      ///se ao clicar ela for diferente. então ela recebe o src padrão
      document.getElementById("cardtr4").src = "./images/cards.png";
    }
  }

  function changeImage5() {
    ///se o src da carta for diferente dela padrão
    if (
      document.getElementById("cardtr5").src ==
      "https://5c2qg3.csb.app/images/cards.png"
    ) {
      ///a imagem recebe outro src
      document.getElementById("cardtr5").src = "./images/twinstrike.png";
    } else {
      ///se ao clicar ela for diferente. então ela recebe o src padrão
      document.getElementById("cardtr5").src = "./images/cards.png";
    }
  }

  function changeImage6() {
    ///se o src da carta for diferente dela padrão
    if (
      document.getElementById("cardtr6").src ==
      "https://5c2qg3.csb.app/images/cards.png"
    ) {
      ///a imagem recebe outro src
      document.getElementById("cardtr6").src = "./images/twinstrike.png";
    } else {
      ///se ao clicar ela for diferente. então ela recebe o src padrão
      document.getElementById("cardtr6").src = "./images/cards.png";
    }
  }

  function changeImage7() {
    ///se o src da carta for diferente dela padrão
    if (
      document.getElementById("cardtr7").src ==
      "https://5c2qg3.csb.app/images/cards.png"
    ) {
      ///a imagem recebe outro src
      document.getElementById("cardtr7").src = "./images/cleave.png";
    } else {
      ///se ao clicar ela for diferente. então ela recebe o src padrão
      document.getElementById("cardtr7").src = "./images/cards.png";
    }
  }

  function changeImage8() {
    ///se o src da carta for diferente dela padrão
    if (
      document.getElementById("cardtr8").src ==
      "https://5c2qg3.csb.app/images/cards.png"
    ) {
      ///a imagem recebe outro src
      document.getElementById("cardtr8").src = "./images/defend.png";
    } else {
      ///se ao clicar ela for diferente. então ela recebe o src padrão
      document.getElementById("cardtr8").src = "./images/cards.png";
    }
  }

  function changeImage9() {
    ///se o src da carta for diferente dela padrão
    if (
      document.getElementById("cardtr9").src ==
      "https://5c2qg3.csb.app/images/cards.png"
    ) {
      ///a imagem recebe outro src
      document.getElementById("cardtr9").src = "./images/ironwave.png";
    } else {
      ///se ao clicar ela for diferente. então ela recebe o src padrão
      document.getElementById("cardtr9").src = "./images/cards.png";
    }
  }

  function changeImage10() {
    ///se o src da carta for diferente dela padrão
    if (
      document.getElementById("cardtr10").src ==
      "https://5c2qg3.csb.app/images/cards.png"
    ) {
      ///a imagem recebe outro src
      document.getElementById("cardtr10").src = "./images/cleave.png";
    } else {
      ///se ao clicar ela for diferente. então ela recebe o src padrão
      document.getElementById("cardtr10").src = "./images/cards.png";
    }
  }

  document.getElementById("cardtr11").style.display = "none";
  document.getElementById("cardtr12").style.display = "none";
  document.getElementById("cardtr13").style.display = "none";
  document.getElementById("cardtr14").style.display = "none";
} else if (cardQt == 12) {
  function changeImage1() {
    ///se o src da carta for diferente dela padrão
    if (
      document.getElementById("cardtr1").src ==
      "https://5c2qg3.csb.app/images/cards.png"
    ) {
      ///a imagem recebe outro src
      document.getElementById("cardtr1").src = "./images/cleave.png";
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
      document.getElementById("cardtr2").src = "./images/defend.png";
    } else {
      ///se ao clicar ela for diferente. então ela recebe o src padrão
      document.getElementById("cardtr2").src = "./images/cards.png";
    }
  }

  function changeImage3() {
    ///se o src da carta for diferente dela padrão
    if (
      document.getElementById("cardtr3").src ==
      "https://5c2qg3.csb.app/images/cards.png"
    ) {
      ///a imagem recebe outro src
      document.getElementById("cardtr3").src = "./images/ironwave.png";
    } else {
      ///se ao clicar ela for diferente. então ela recebe o src padrão
      document.getElementById("cardtr3").src = "./images/cards.png";
    }
  }

  function changeImage4() {
    ///se o src da carta for diferente dela padrão
    if (
      document.getElementById("cardtr4").src ==
      "https://5c2qg3.csb.app/images/cards.png"
    ) {
      ///a imagem recebe outro src
      document.getElementById("cardtr4").src = "./images/twinstrike.png";
    } else {
      ///se ao clicar ela for diferente. então ela recebe o src padrão
      document.getElementById("cardtr4").src = "./images/cards.png";
    }
  }

  function changeImage5() {
    ///se o src da carta for diferente dela padrão
    if (
      document.getElementById("cardtr5").src ==
      "https://5c2qg3.csb.app/images/cards.png"
    ) {
      ///a imagem recebe outro src
      document.getElementById("cardtr5").src = "./images/flamebarrier.png";
    } else {
      ///se ao clicar ela for diferente. então ela recebe o src padrão
      document.getElementById("cardtr5").src = "./images/cards.png";
    }
  }

  function changeImage6() {
    ///se o src da carta for diferente dela padrão
    if (
      document.getElementById("cardtr6").src ==
      "https://5c2qg3.csb.app/images/cards.png"
    ) {
      ///a imagem recebe outro src
      document.getElementById("cardtr6").src = "./images/twinstrike.png";
    } else {
      ///se ao clicar ela for diferente. então ela recebe o src padrão
      document.getElementById("cardtr6").src = "./images/cards.png";
    }
  }

  function changeImage7() {
    ///se o src da carta for diferente dela padrão
    if (
      document.getElementById("cardtr7").src ==
      "https://5c2qg3.csb.app/images/cards.png"
    ) {
      ///a imagem recebe outro src
      document.getElementById("cardtr7").src = "./images/cleave.png";
    } else {
      ///se ao clicar ela for diferente. então ela recebe o src padrão
      document.getElementById("cardtr7").src = "./images/cards.png";
    }
  }

  function changeImage8() {
    ///se o src da carta for diferente dela padrão
    if (
      document.getElementById("cardtr8").src ==
      "https://5c2qg3.csb.app/images/cards.png"
    ) {
      ///a imagem recebe outro src
      document.getElementById("cardtr8").src = "./images/defend.png";
    } else {
      ///se ao clicar ela for diferente. então ela recebe o src padrão
      document.getElementById("cardtr8").src = "./images/cards.png";
    }
  }

  function changeImage9() {
    ///se o src da carta for diferente dela padrão
    if (
      document.getElementById("cardtr9").src ==
      "https://5c2qg3.csb.app/images/cards.png"
    ) {
      ///a imagem recebe outro src
      document.getElementById("cardtr9").src = "./images/ironwave.png";
    } else {
      ///se ao clicar ela for diferente. então ela recebe o src padrão
      document.getElementById("cardtr9").src = "./images/cards.png";
    }
  }

  function changeImage10() {
    ///se o src da carta for diferente dela padrão
    if (
      document.getElementById("cardtr10").src ==
      "https://5c2qg3.csb.app/images/cards.png"
    ) {
      ///a imagem recebe outro src
      document.getElementById("cardtr10").src = "./images/strike.png";
    } else {
      ///se ao clicar ela for diferente. então ela recebe o src padrão
      document.getElementById("cardtr10").src = "./images/cards.png";
    }
  }
  function changeImage11() {
    ///se o src da carta for diferente dela padrão
    if (
      document.getElementById("cardtr11").src ==
      "https://5c2qg3.csb.app/images/cards.png"
    ) {
      ///a imagem recebe outro src
      document.getElementById("cardtr11").src = "./images/strike.png";
    } else {
      ///se ao clicar ela for diferente. então ela recebe o src padrão
      document.getElementById("cardtr11").src = "./images/cards.png";
    }
  }

  function changeImage12() {
    ///se o src da carta for diferente dela padrão
    if (
      document.getElementById("cardtr12").src ==
      "https://5c2qg3.csb.app/images/cards.png"
    ) {
      ///a imagem recebe outro src
      document.getElementById("cardtr12").src = "./images/flamebarrier.png";
    } else {
      ///se ao clicar ela for diferente. então ela recebe o src padrão
      document.getElementById("cardtr12").src = "./images/cards.png";
    }
  }

  document.getElementById("cardtr13").style.display = "none";
  document.getElementById("cardtr14").style.display = "none";
} else if (cardQt == 14) {
  function changeImage1() {
    ///se o src da carta for diferente dela padrão
    if (
      document.getElementById("cardtr1").src ==
      "https://5c2qg3.csb.app/images/cards.png"
    ) {
      ///a imagem recebe outro src
      document.getElementById("cardtr1").src = "./images/cleave.png";
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

  function changeImage3() {
    ///se o src da carta for diferente dela padrão
    if (
      document.getElementById("cardtr3").src ==
      "https://5c2qg3.csb.app/images/cards.png"
    ) {
      ///a imagem recebe outro src
      document.getElementById("cardtr3").src = "./images/flamebarrier.png";
    } else {
      ///se ao clicar ela for diferente. então ela recebe o src padrão
      document.getElementById("cardtr3").src = "./images/cards.png";
    }
  }

  function changeImage4() {
    ///se o src da carta for diferente dela padrão
    if (
      document.getElementById("cardtr4").src ==
      "https://5c2qg3.csb.app/images/cards.png"
    ) {
      ///a imagem recebe outro src
      document.getElementById("cardtr4").src = "./images/strike.png";
    } else {
      ///se ao clicar ela for diferente. então ela recebe o src padrão
      document.getElementById("cardtr4").src = "./images/cards.png";
    }
  }

  function changeImage5() {
    ///se o src da carta for diferente dela padrão
    if (
      document.getElementById("cardtr5").src ==
      "https://5c2qg3.csb.app/images/cards.png"
    ) {
      ///a imagem recebe outro src
      document.getElementById("cardtr5").src = "./images/cleave.png";
    } else {
      ///se ao clicar ela for diferente. então ela recebe o src padrão
      document.getElementById("cardtr5").src = "./images/cards.png";
    }
  }

  function changeImage6() {
    ///se o src da carta for diferente dela padrão
    if (
      document.getElementById("cardtr6").src ==
      "https://5c2qg3.csb.app/images/cards.png"
    ) {
      ///a imagem recebe outro src
      document.getElementById("cardtr6").src = "./images/hemo.png";
    } else {
      ///se ao clicar ela for diferente. então ela recebe o src padrão
      document.getElementById("cardtr6").src = "./images/cards.png";
    }
  }

  function changeImage7() {
    ///se o src da carta for diferente dela padrão
    if (
      document.getElementById("cardtr7").src ==
      "https://5c2qg3.csb.app/images/cards.png"
    ) {
      ///a imagem recebe outro src
      document.getElementById("cardtr7").src = "./images/flamebarrier.png";
    } else {
      ///se ao clicar ela for diferente. então ela recebe o src padrão
      document.getElementById("cardtr7").src = "./images/cards.png";
    }
  }

  function changeImage8() {
    ///se o src da carta for diferente dela padrão
    if (
      document.getElementById("cardtr8").src ==
      "https://5c2qg3.csb.app/images/cards.png"
    ) {
      ///a imagem recebe outro src
      document.getElementById("cardtr8").src = "./images/defend.png";
    } else {
      ///se ao clicar ela for diferente. então ela recebe o src padrão
      document.getElementById("cardtr8").src = "./images/cards.png";
    }
  }

  function changeImage9() {
    ///se o src da carta for diferente dela padrão
    if (
      document.getElementById("cardtr9").src ==
      "https://5c2qg3.csb.app/images/cards.png"
    ) {
      ///a imagem recebe outro src
      document.getElementById("cardtr9").src = "./images/ironwave.png";
    } else {
      ///se ao clicar ela for diferente. então ela recebe o src padrão
      document.getElementById("cardtr9").src = "./images/cards.png";
    }
  }

  function changeImage10() {
    ///se o src da carta for diferente dela padrão
    if (
      document.getElementById("cardtr10").src ==
      "https://5c2qg3.csb.app/images/cards.png"
    ) {
      ///a imagem recebe outro src
      document.getElementById("cardtr10").src = "./images/hemo.png";
    } else {
      ///se ao clicar ela for diferente. então ela recebe o src padrão
      document.getElementById("cardtr10").src = "./images/cards.png";
    }
  }
  function changeImage11() {
    ///se o src da carta for diferente dela padrão
    if (
      document.getElementById("cardtr11").src ==
      "https://5c2qg3.csb.app/images/cards.png"
    ) {
      ///a imagem recebe outro src
      document.getElementById("cardtr11").src = "./images/ironwave.png";
    } else {
      ///se ao clicar ela for diferente. então ela recebe o src padrão
      document.getElementById("cardtr11").src = "./images/cards.png";
    }
  }

  function changeImage12() {
    ///se o src da carta for diferente dela padrão
    if (
      document.getElementById("cardtr12").src ==
      "https://5c2qg3.csb.app/images/cards.png"
    ) {
      ///a imagem recebe outro src
      document.getElementById("cardtr12").src = "./images/defend.png";
    } else {
      ///se ao clicar ela for diferente. então ela recebe o src padrão
      document.getElementById("cardtr12").src = "./images/cards.png";
    }
  }
  function changeImage13() {
    ///se o src da carta for diferente dela padrão
    if (
      document.getElementById("cardtr13").src ==
      "https://5c2qg3.csb.app/images/cards.png"
    ) {
      ///a imagem recebe outro src
      document.getElementById("cardtr13").src = "./images/twinstrike.png";
    } else {
      ///se ao clicar ela for diferente. então ela recebe o src padrão
      document.getElementById("cardtr13").src = "./images/cards.png";
    }
  }

  function changeImage14() {
    ///se o src da carta for diferente dela padrão
    if (
      document.getElementById("cardtr14").src ==
      "https://5c2qg3.csb.app/images/cards.png"
    ) {
      ///a imagem recebe outro src
      document.getElementById("cardtr14").src = "./images/twinstrike.png";
    } else {
      ///se ao clicar ela for diferente. então ela recebe o src padrão
      document.getElementById("cardtr14").src = "./images/cards.png";
    }
  }
}
