
const previousarray = [12 ,34 ,67 ,55 ,49 ,1]
/*1
let newarray = []

for(let i = previousarray.length; i >= 0; i--)
{
    newarray.push(previousarray[i]);
}
console.log(newarray);

*/











//2
function reversedarray(arr){
    return arr.reverse();
}

const newarray = reversedarray(previousarray);
console.log(newarray);