let nome = prompt("Nome completo:");
let cargo = prompt("Cargo ou função:");
let empresa = prompt("Empresa ou escola:");
let email = prompt("E-mail:");

console.log("CARTÃO DE VISITA");
console.log("Nome: " + nome.toUpperCase());
console.log("Cargo: " + cargo);
console.log("Empresa: " + empresa);
console.log("E-mail: " + email);

alert("Cartão de visita gerado!");

let produto = prompt("Nome do produto:");
let preco = parseFloat(prompt("Preço original:"));
let desconto = parseFloat(prompt("Desconto (%):"));

let valorDesconto = preco * desconto / 100;
let precoFinal = preco - valorDesconto;

console.log("Produto: " + produto);
console.log("Preço: R$ " + preco.toFixed(2));
console.log("Desconto: R$ " + valorDesconto.toFixed(2));
console.log("Preço final: R$ " + precoFinal.toFixed(2));

alert(
"Produto: " + produto +
"\nPreço: R$ " + preco.toFixed(2) +
"\nDesconto: R$ " + valorDesconto.toFixed(2) +
"\nPreço final: R$ " + precoFinal.toFixed(2)
);

let senha = prompt("Digite a senha:");

let classificacao;

if (senha.length >= 8 && /[A-Z]/.test(senha) && /[a-z]/.test(senha)) {
    classificacao = "Forte";
} else if (senha.length >= 6) {
    classificacao = "Média";
} else {
    classificacao = "Fraca";
}

console.log("Tamanho: " + senha.length);
console.log("Classificação: " + classificacao);

alert("Classificação: " + classificacao);