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