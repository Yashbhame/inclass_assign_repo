const numberArray = [354,15,890,66,43,26,122,777];
let biggestNumber = numberArray[0];
for(let i = 0; i < numberArray.length; i++){
    if(biggestNumber < numberArray[i]){
        biggestNumber = numberArray[i];
    }
}
console.log(biggestNumber);