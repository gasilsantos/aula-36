//variavel de escopo global
let nome = "cassiano"
let idade = 32 
console.log(nome);
console.log(idade);

function escrevaNome(){
    //variavel de escopo de bloco
    let nome = "peres";
    let idade = 33
    console.log(nome);
}

escrevaNome();