function mudarTexto() {
    Document.getElementByid("titulo").textContent = "Você clicou no botão";

}

function mudarcor() {

 Document.getElementByid("mensagem").style.color = "blue";
}

function mostrarnome() {
    let nome = Document.getElementByid("nome").value;
Document.getElementByid("resultado").textContent = "olá, " + nome + "!";
}

let contador = 0;

function aumentar() {
    contador++;

    Document.getElementByid("numero").textContent = contador;
}

function diminuir () {
    contador--;

    Document.getElementByid("numero").textContent = contador;
}

