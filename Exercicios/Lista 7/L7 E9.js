let arrayA = [ 9, 1 , 5, 7, 2];
let temp1;
let temp2;

console.log(arrayA);

for(let k = 5; k >= 0; k--){
    for(let l = 4; l >= 0; l--){
        if(arrayA[k] > arrayA[l]){
            temp2 = arrayA[k];
            arrayA[k] = arrayA[l];
            arrayA[l] = temp2;
            }
        } 
    }
 console.log(arrayA);