let display = document.getElementById("display");
let operacaoAtual = "";

function adicionarNumero(numero) {
  if (display.innerText === "0") {
    display.innerText = numero;
  } else {
    display.innerText += numero;
  }
  operacaoAtual += numero;
}

function adicionarOperacao(operador) {
  display.innerText += " " + operador + " ";
  operacaoAtual += operador;
}

function limparDisplay() {
  display.innerText = "0";
  operacaoAtual = "";
}

function calcular() {
  try {
    let resultado = eval(operacaoAtual);
    display.innerText = resultado;
    operacaoAtual = resultado.toString();
  } catch (error) {
    display.innerText = "Erro";
    operacaoAtual = "";
  }
}

