let valorContador = 10;

function mostrarMensagem() {
    let tecnologia = document.getElementById("tecnologia").value;
    let mensagem = document.getElementById("mensagem");

    mensagem.textContent = "Vamos aprender " + tecnologia + " juntos! ";
}

function destacarMensagem() {
    let mensagem = document.getElementById("mensagem");

    mensagem.style.color = "greem";
    mensagem.style.fontSize = "25px";
}

function aumentar() {
    valorContador++;

    document.getElementById("contador").textContent = valorContador;
}

function diminuir() {
    valorContador--;

    document.getElementById("contador").textContent = valorContador;
}

document.getElementById("botaoMensagem").addEventListener("click", mostrarMensagem);

document.getElementById("botaoDestaque").addEventListener("click", destacarMensagem);

document.getElementById("botaoMais").addEventListener("click", aumentar);

document.getElementById("botaoMenos").addEventListener("click", diminuir);
