let mensagem;
if (nota >= 6) {
    mensagem = 'Aprovado';
} else {
    mensagem = 'Reprovado';
}

const mensagem = nota >= 6 ? 'Aprovado' : 'Reprovado';

// Exemplo 1 de transformação 

let descrição;
if (temperatura > 30) {
  descricao = 'Quente';
} else {
  descrição = 'Agradável';
}

const descrição = temperatura >= 30 ? 'Quente' : 'Agradável';

// Exemplo 2 de transformação

let tipo;
if (número % 2 === 0) {
  tipo = 'par';
} else {
  tipo = 'ímpar';
}

const tipo = número % 2 === 0 ? 'par' : 'ímpar';

// Exemplo 3 de transformação

let saudacao;
if (hora < 12) {
  saudação = 'Bom dia';
} else {
  saudação = 'Boa tarde/noite';
}

const saudacao = hora < 12 ? 'Bom dia' : 'Boa tarde/noite';