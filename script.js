

// clicked object is 0 or not 

function printSymbol(e){
    let result = document.getElementById("result");
    let obj = e.target;
    if (result.value == 0){
        result.value = obj.textContent;
    }
    else{
        result.value = result.value + obj.textContent;
    }
    
}

//signs
let result = document.getElementById("result");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");

//sign and number execution using loop on click

let symbols = document.getElementsByClassName("symbol");

for (let i=0;i<symbols.length;i++){
    symbols[i].addEventListener("click",printSymbol);
}

// evaluation for equal sign 

equal.addEventListener("click", () => result.value = eval(result.value));


// to clear eveyrthing 
clear.addEventListener("click", ()=> document.getElementById("result").value = 0);

