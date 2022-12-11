const saida = document.querySelector("#pOut")
const numA = prompt("Informe um numero!");
const numB = prompt("Informeum numero para ser somado com o anterior")

const soma = numA * numB;

var result = () => { 'soma'; return this };
result() === window;

saida.innerHTML += `<h1>${soma}</h1>`;