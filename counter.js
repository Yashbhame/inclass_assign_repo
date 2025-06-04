let l = 30;

let counter = setInterval(() => {
    if(l >= 0){
        console.log(l);
        l--
    }
    else{
        console.log("timer done")
        clearInterval(counter)
    }
    
}, 1000)