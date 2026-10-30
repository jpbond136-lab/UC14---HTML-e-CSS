function calcular() {
    let nome = document.getElementById("nome").value;
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    let n3 = Number(document.getElementById("n3").value);

    if (!nome || [n1,n2,n3].some(n => n < 0 || n > 10) ||
        ["n1","n2","n3"].some(id => document.getElementById(id).value === "")) {
        resultado.innerHTML = "Preencha os dados corretamente!";
        return;
    }

    let media = (n1+n2+n3)/3;
    let situacao = media >= 7 ? "Aprovado" : media >= 5 ? "Recuperação" : "Reprovado";

    resultado.innerHTML = nome + "<br>Média: " + media.toFixed(1) + "<br>" + situacao;
}

function limpar() {
    document.querySelectorAll("input").forEach(campo => campo.value = "");
    resultado.innerHTML = "";
}