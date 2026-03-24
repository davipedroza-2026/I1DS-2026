// Dado um vetor, calcule e exiba a quantidade de pares e  
// ímpares 

// dado um vetor [array], calcule e exiba a quantidade de pares e 
let numeros = [5, 6, 8, 14, 0, 6, 9, 7, 2]; 
let par = 0;
let impares = 0; 

console.log(numeros.length)


for (let i = 0; i < numeros.length; i++) {
    if ( numeros[i] % 2 == 0) par++;
    else impares++;  
}
console.log("Quantidade de pares", par);
console.log("Quantidade de ímpares", impares); 

// Dado o valor, multiplique todos os seus elementos por 3
console.table(numeros)

for (let i = 0; 1 < numeros.length;  i++) {
    numeros[i] *= 3; // numeros[i] = numeros[i] * 3    
}

console.table(numeros); 
