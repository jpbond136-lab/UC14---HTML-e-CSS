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