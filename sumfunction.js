function sum(a, b){
    let c = a + b;
    console.log("The addition of " + a + " and " + b + " is " + c)
    return c;
}

function passivesum(a, b){
    let c = a + b;
    console.log(c + " is the sum of " + a + " and " + b)
    return c;
}

let answer = sum(4, 6);
let answer2 = passivesum (4, 6)
