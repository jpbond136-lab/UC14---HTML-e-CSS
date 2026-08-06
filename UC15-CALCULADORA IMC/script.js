let nome = prompt('Qual é o seu nome?');
let pesoStr = prompt('Olá, $(nome)! Qual é o seu peso em kg?\n(use virgula ou ponto - ex:   75,5 ou 75.5)');
let altStr = prompt(`Qual é sua altura em metros?\n(ex: 1,75 ou 1.75)`);

let peso = number(pesoStr,replace(',', '.'));
let alt = number(altStr.replace(',', '.'));

console.log(`Nome:`, nome);
console.log(`peso:`, peso, typeof peso);
console.log(`Altura:`, alt, typeof alt);

let imc = peso / (alt * alt);
let imcFormatado = imc.toFixed(1);

if (imc < 18.5 ) {
    console.log('Abaixo do peso')
} else if  (imc < 25) {
    console.log?('peso normal')
} else if (imc < 30) {
    console.log('sobrepeso')
} else if (imc < 35) {
    console.log(obesidade grau I)
} else if (imc < 40) {
    console.log(obesidade grau II)
} else if {
    console.log(obesidade grau III)
    }