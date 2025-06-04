/*1
const { stdin, stdout } = require("process");
const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question("Enter your firstname ",function(firstname){
    rl.question("Enter your lastname ",function(lastname){
        console.log(`hello ${firstname} ${lastname}!`)
        rl.close();
    })
})
*/






/*2
let firstName = "Yash";
let lastName = "Bhame";
console.log("Hello there " + firstName + " " + lastName)
*/







//3
let firstNAME = prompt("Enter your firstname")
let lastNAME = prompt("Enter your lastname")

let greetings = `Hello ,${firstNAME} ${lastNAME} !`;
alert(greetings);