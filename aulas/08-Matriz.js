// Criando uma matriz 
var matriz = [
    [9, 0, 1],
    [7, 1, 2],
    [6, 2, 8],
    [1, 3, 9],
];
console.table(matriz);

// obtendo elementos com base e seus idices









/***********************************************************
                        EXERCÍCIO

************************************************************\
/*
1. crie uma matriz 3x3 
2. imprima os valores da diogonais principal
3. altere os valores do item matriz [1][2] para 20 e 
    matriz [2][0] para 30
*/ 

var matriz2 = [ 
[9, 0, 1],
[7, 1, 2],
[6, 2, 8],
];

console.log(matriz[0][0]);
console.log(matriz[1][1]);
console.log(matriz[2][2]);
console.log(matriz[0][2]);
console.log(matriz[1][1]);
console.log(matriz[2][0]); 

matriz1[1][2] = 20;
matriz2[2][0] = 30;


console.table(matriz);

for (let linha = 0; linha < matriz.length; linha++) {
    for (let coluna  = 0; coluna< matriz[0].length;  coluna++) 
    console.log("matriz[", linha, ",", coluna, "] =", matriz[linha][coluna]);
}