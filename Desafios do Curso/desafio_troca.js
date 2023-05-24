{
//Trocar os valores das variaveis
let a = 7;
let b = 94;

console.log(a);
console.log(b);

// depois da troca... A= 94 e B= 7
// Troca de valores DevMendes21:

let valorDeB = 94;
let valorDeA = 7;

console.log("Valor de A: " + valorDeB);
console.log("Valor de B: " + valorDeA);
}

// Resposta da Aula:

let a = 7;
let b = 94;

/* Como fazer:  Criar outra variavel temporaria para o valor
não duplicar: */

let temp = a;
a = b;
b = temp;

console.log(a);
console.log(b);

// jeito facil pelo .js //

 console.log([a, b] = [b, a]);