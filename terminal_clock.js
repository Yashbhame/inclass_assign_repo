//function clock(){
  //  let hours   = now.getHours().toString().padstart(2, '0');

function pad(num){
    return num.toString().padStart(2, '0');
}

function clock(){
    const now = new Date();
    let hours = pad(now.getHours());
    let minutes = pad(now.getMinutes());
    let seconds = pad(now.getSeconds());
    const time = `${hours} : ${minutes} : ${seconds}`;

    console.clear();
    console.log(`${time}`);
}

setInterval(clock ,1000);
   
    
