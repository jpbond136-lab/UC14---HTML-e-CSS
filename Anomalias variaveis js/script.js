let nomeCliente = "João Paulo";
let valorCompra = 7899.99;
let clienteVip = false;

let desconto = 0;

if (clienteVip) {
    desconto = 20;
} else if (valorCompra >= 500) {
    desconto = 15;
} else if (valorCompra >= 200) {
    desconto = 10;
}

let valorDesconto = valorCompra * desconto / 100;
let valorFinal = valorCompra - valorDesconto;

console.log("Nome:", nomeCliente);
console.log("Valor da compra: R$", valorCompra);
console.log("Desconto:", desconto + "%");
console.log("Valor do desconto: R$", valorDesconto);
console.log("Valor final: R$", valorFinal);

if (valorFinal > 1000) {
    console.log("Você ganhou frete grátis!");
} else {
    console.log("O frete será cobrado normalmente.");
}