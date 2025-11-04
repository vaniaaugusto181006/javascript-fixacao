// 1. Crie um tipo literal para cor com: "vermelho", "azul", "verde"
type Cor = "vermelho" | "azul" | "verde";

// 2. Crie um tipo Carro com:
// - marca (string, readonly)
// - modelo (string)
// - cor (do tipo Cor acima)
// - ano? (opcional, number)
type Carro = {
    readonly marca: string;
    modelo: string;
    cor: Cor;
    ano?: number;
};

// 3. Crie uma função Generic que retorne o primeiro elemento de um array
function primeiro<T>(array: T[]): T {
    return array[0];
}

// 🌟 Exemplo prático

// Criando um carro
const meuCarro: Carro = {
    marca: "Toyota",
    modelo: "Corolla",
    cor: "azul",
    ano: 2022
};

// Usando a função 'primeiro' com arrays diferentes
const numeros = [10, 20, 30];
const nomes = ["Vania", "Carlos", "Ana"];

// Mostrando resultados no console
console.log("Meu carro:", meuCarro);
console.log("Primeiro número:", primeiro(numeros)); // 10
console.log("Primeiro nome:", primeiro(nomes));     // "Vania"