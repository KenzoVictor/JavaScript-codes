function multiploDe3E5(int){
    if(int % 3 === 0 && int % 5 ===0){
        return console.log(`O Número ${int} é multiplo de 3 e 5 simultaneamente.`);
    } else {
        return console.log(`O Número ${int} não é multiplo de 3 e 5 simultaneamente.`);
    }
}
multiploDe3E5(15);