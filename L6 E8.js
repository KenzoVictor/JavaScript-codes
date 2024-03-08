let numbers = [1,2,3,4,5,6,7,8,9,10];

function orgArrayPar(myArray){

    for(let i = 0; i < myArray.length; i++){
        if(myArray[i] % 2 === 0){
            continue;
        } else {
            delete myArray[i]; 
        }
    }
    return myArray;
}
console.log(orgArrayPar(numbers));
