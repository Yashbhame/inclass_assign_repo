const numberArray = [13,26,13,33,42,28,44];
let evenArray = [];
for(let i = 0; i < numberArray.length; i++){
    if(numberArray[i] % 2 === 0){
        evenArray.push(numberArray[i]);
    }
}
console.log(evenArray);