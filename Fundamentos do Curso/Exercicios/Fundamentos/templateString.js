const nome = "Rebeca"
const concat = 'Olá ' + nome + '!'
const template = `
   Olá
   ${nome}!`
console.log(concat, template);

// Expressão:
console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}!`);