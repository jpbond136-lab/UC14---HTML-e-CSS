console.log("Olá, Larissa! Seja bem-vinda")
console.log("Olá, Levi! Seja bem-vindo")
console.log("Olá, Julia! Seja bem-vinda")

function darBoasVindas(nome) {
    console.log(`Olá,$(nome)! Seja Bem-Vindo!`);
}

darBoasVindas("Levi");
darBoasVindas("Julia");
darBoasVindas("Larissa");

function apresentar(nome, idade) {
    console.log(`Meu nome é $(nome) e tenho ${idade} anos.`);
}

function Estudar(nome) {
        console.log(`${nome} está estudando programação.`);
}

Estudar("João");

function somar(a, b) {
    return a+b;
}

somar (5, 3)

let resultado = somar(5, 3);

console.log(resultado);

def calcular_viagem(passagem, hospedagem, alimentacao, passeios, orcamento=2000.00):

    Parâmetros:
        passagem   (float): valor da passagem
        hospedagem (float): valor da hospedagem
        alimentacao (float): valor da alimentação
        passeios   (float): valor dos passeios
        orcamento  (float): limite do orçamento (padrão: R$2.000,00)

    Retorna:
        tuple: (total, dentro_do_orcamento, diferenca)
    
    dentro = total <= orcamento
    diferenca = orcamento - total
    return total, dentro, diferenca



if __name__ == "__main__":
    print("=== CALCULADORA DE VIAGEM ===\n")

    
    passagem   = float(input("Valor da passagem: R$ "))
    hospedagem = float(input("Valor da hospedagem: R$ "))
    alimentacao = float(input("Valor da alimentação: R$ "))
    passeios   = float(input("Valor dos passeios: R$ "))

    total, dentro, diferenca = calcular_viagem(passagem, hospedagem, alimentacao, passeios)

    print(f"\nCusto total da viagem: R$ {total:.2f}")

    if dentro:
        print(f" Dentro do orçamento! Ainda sobram R$ {diferenca:.2f}.")
    else:
        print(f" Acima do orçamento em R$ {abs(diferenca):.2f}.")

