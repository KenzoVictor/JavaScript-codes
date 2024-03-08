let numeros = [1, 4, 5, 7, 9];

function somaDeNumeros(arrayDeNumeros){
    let somaTotal = 0;
    let arrayLenght = arrayDeNumeros.length;
    for(let i = 0; i < arrayLenght; i++){
        somaTotal = somaTotal + arrayDeNumeros[i];
    }
    return somaTotal;
}
console.log(somaDeNumeros(numeros));