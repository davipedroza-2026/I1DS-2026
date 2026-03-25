console.log("--------------------------------------------------------");
let numero = -5;
if (numero > 0) {
  console.log("O número é positivo.");
}

if (numero < 0) {
  console.log("O número é negativo.");
}
if (numero == 0) {
  console.log("O número é zero.");
}
console.log("--------------------------------------------------------");

let numero2 = 5
if (numero2 % 2 == 0) {
  console.log("Este número é par!")
} else {
  console.log("Este número é impar!")
}

console.log("---------------------------------------------------------");

let numero3 = 15

if (numero3 % 2 == 1) {
  console.log("Este número é múltiplo de 3")
} else {
  console.log("Este número não é múltiplo de 3!")
}

console.log("---------------------------------------------------------");

let notas = 4;
if (notas >= 7) {
  console.log("O aluno foi aprovado!");
}

if (notas >= 5 || notas > 7) {
  console.log("O aluno está de recuperação!");
}
if (notas < 5) {
  console.log("O aluno está reprovado!");
}

console.log("----------------------------------------------------------");

function podeVotar(idade) {
  let frase;
  if (idade < 16) {
    frase = "Não pode Votar";
  } else if (idade >= 18 && idade <= 65) {
    frase = "Seu voto é obrigatório!";
  
  }
  return frase;
}
let idade = 23;
console.log("Idade:", idade, "-", podeVotar(idade));

console.log("----------------------------------------------------------");

let frase
function dentro10e50(numero4) {
    if (numero4 > 10 && numero4 < 50) {
      frase = "Este número esta entre 10 e 50";
    } else {
      frase = "numero invalido!!";
    }
  return frase;
}

let numero4 = 40;
console.log("numero4:", numero4, "-", dentro10e50(numero4));

console.log("------------------------------------------------------------");

const login = "admin";
const senha = "12345";

let loginUser = "admin";
let senhaUser = "12345";

if (loginUser == login && senhaUser == senha) {
  console.log("Login Realizado com Sucesso!");
} else {
  console.log("Acesso Negado!");
}

console.log("------------------------------------------------------------");

