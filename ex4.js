let numero1 = 10;

let numero2 = 20;


//variavel de const de escopo global
const resultado = 0;


function soma(n1,n2){

    //variavel const de escopo
    const resultado = n1 + n2;
    console.log(resultado)

    console.log("resultado dentro da função:" ,resultado)
}

soma(numero1,numero2)

console.log("resultado fora da função:" ,resultado)