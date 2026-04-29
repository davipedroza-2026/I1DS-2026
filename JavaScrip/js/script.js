// Variavel para armazenar o Elemento <p> com id=contador
let contador = document.getElementById("contador");

const adicionar = () => {
  // Variavel para aramazenar o valor atual
  let valorAtual = parseInt(contador.innerHTML);
  // Aumenta o valor Atual em +1
  valorAtual++;
  // Atualizar o Valor do elmento <p> com id=contador
  contador.innerHTML = valorAtual;
};
const diminuir = () => {
  let valorAtual = parseInt(contador.innerHTML);
  valorAtual--;
  contador.innerHTML = valorAtual;
};
const zerar = () => {
  contador.innerHTML = 0;
};


/* EXERCICIO 02 */
const mudarCor = () => {
    // capturar a cor selecionada pelo úsuario
let cor = document.getElementById("colorPicker").value;
// buscar o elemento-alvo (quadrado)
let quadrado = document.getElementById("quadrado");
// Aplicar a cor ao elemento. (alterar o css do background-color)
quadrado.style.backgroundColor = cor;
}

/* EXERCICIO 03 */
let num1 = (document.getElementById("num1").value;
let num2 = (document.getElementById("num2").value;
let resultado = document.getElementById("resultado";

const somar = () =>{
let valor = parseFloat(num1.value) + parseFloat(num2.value);
resultado.innerText = valor;
};
const multiplicar =() =>{
    let valor = parseFloat(num1.value) * parseFloat(num2.value);
    resultado.innerText = valor;
};
const subtrai = () =>{
let valor = parseFloat(num1.value) - parseFloat(num2.value);
    resultado.innerText = valor;
};