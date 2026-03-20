import promptSync from "prompt-sync";
const prompt = promptSync();
const nome: string = prompt("Digite seu nome: ");
const idade: string = prompt("Digite sua idade: ");
const idadeFutura: number = parseInt(idade) + 10;
console.log(`${nome}, em 10 anos sua idade será ${idadeFutura} anos`);