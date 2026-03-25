// criando variáveis com nome
var nome = "matheus";

// criando variável com a idade
var idade = 35;

// criando varíavel de cidade
var cidade = "são paulo";

console.log(
  "Meu nome é",
  nome,
  "eu moro em ",
  cidade,
  "e eu tenho",
  idade,
  "anos \n",
);

// atividade 2 //
console.log(
  "------------------------------------------------------------------------",
);
// variavel de conta
let x = 10;
let y = 7;
console.log("x =", x, "\ny =", y);
console.log("------------------");

let soma1 = x + y;
console.log("A soma de x + y =", soma1);

let subtracao1 = x - y;
console.log("A subtração de x - y =", subtracao1);

let multiplicacao1 = x * y;
console.log("A multiplicação de x * y", multiplicacao1);

let divisao1 = x / y;
console.log("A divisão de x / y", divisao1);

let porcentagem1 = x % y;
console.log("A porcentagem de x % y", porcentagem1);

// Atividade 3 //
console.log(
  "---------------------------------------------------------------------------",
);
// calcula a área de um retângulo
let base = 10;
let hRetangulo = 5;

let area = base * hRetangulo;

console.log("A base do retângulo é:", base);
console.log("A altura do retângulo é:", hRetangulo);
console.log("Então a área do retângulo é:", area);
console.log("---------------------------------------------------");

// Atividade 4 //
let comprimento = 9;
let largura = 5;
let hParalelepipedo = 2;

let volumeP = comprimento * largura * hParalelepipedo;
console.log("O comprimento é:", comprimento);
console.log("A largura é", largura);
console.log("A altura é:", hParalelepipedo);
console.log("O Volume do paralelepípedo é:", volumeP);
console.log("---------------------------------------------------");

// 5.Calcule 10% do desconto
let valor = 200;
let multiplicacao = 10;
let divisao = 100;

let desconto = (valor * multiplicacao) / divisao;

console.log("O valor do produto é R$:", valor, "reais");
console.log(
  "Com o desconto de 10% o produto saira por R$:",
  valor - desconto,
  "reais",
);
console.log("---------------------------------------------------");

// 6.Converta a temperatura de Celcius para  Fahrenheit.
let celcius = 20;

let fahrenheit = celcius * 1.8 + 32;

console.log(
  "A temperatura de",
  celcius,
  "graus celcius",
  "em fahrenheit é",
  fahrenheit,
);
console.log("---------------------------------------------------");

// 7.Calcule o IMC
let peso = 70;
let altura = 1.7;

let IMC = peso / (altura * altura);

console.log("O seu peso é:", peso);
console.log("A sua altura é:", altura);
console.log("Então o seu IMC é:", IMC);
console.log("-----------------------------------------------"); 

// 8.Calculando a média
let n1 = 8;
let n2 = 10;
let n3 = 6;

let media = (n1 + n2 + n3) / 4;

console.log("Nota da primeira prova:", n1);
console.log("Nota da segunda prova:", n2);
console.log("Nota da terceira prova:", n3);
console.log("A sua média é:", media);
console.log("---------------------------------------------------");

// 9.Calcule o valor de delta de uma equção de 2° grau
let ax2 = 1;
let b = -6;
let c = 5;

let delta = (b * b) - (4 * ax2 * c);

console.log("Valor de ax²:", ax2);
console.log("Valor de b:", b);
console.log("Valor de c:", c)
console.log("O valor de delta é:", delta)
console.log("---------------------------------------------------");

// 10.Dado o valor em hora converta pra minutos e segundos 
let horas = 2
let minutos = (horas * 60)
let segundos = (horas * 3600)

 console.log("Horas:", horas,);
 console.log("Minutos:", minutos);
console.log("Segundos:", segundos);
console.log("---------------------------------------------------"); 


