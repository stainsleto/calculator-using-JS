function printSymbol(e){
    let result = document.getElementById("result");
    let obj = e.target;
    result.value = result.value + obj.textContent;
}

// clicked object is 0 or not 

function printDigit(e){
    let result = document.getElementById("result");
    let obj = e.target;
    if (result.value == 0){
        result.value = obj.textContent;
    }
    else{
        result.value = result.value + obj.textContent;
    }
    
}



let result = document.getElementById("result");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");
let num4 = document.getElementById("num4");
let num5 = document.getElementById("num5");
let num6 = document.getElementById("num6");
let num7 = document.getElementById("num7");
let num8 = document.getElementById("num8");
let num9 = document.getElementById("num9");
let num0 = document.getElementById("num0");

//signs
let subtraction = document.getElementById("subtraction");
let addition = document.getElementById("addition");
let multiplication = document.getElementById("multiplication");
let division = document.getElementById("division");
let decimal = document.getElementById("decimal");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
//numbers
num1.addEventListener("click", printDigit);
num2.addEventListener("click", printDigit);
num3.addEventListener("click", printDigit);
num4.addEventListener("click", printDigit);
num5.addEventListener("click", printDigit);
num6.addEventListener("click", printDigit);
num7.addEventListener("click", printDigit);
num8.addEventListener("click", printDigit);
num9.addEventListener("click", printDigit);
num0.addEventListener("click", printDigit);
// signs
subtraction.addEventListener("click",printSymbol);
addition.addEventListener("click",printSymbol);
multiplication.addEventListener("click",printSymbol);
division.addEventListener("click",printSymbol);
decimal.addEventListener("click",printSymbol);

// evaluation for equal sign 

equal.addEventListener("click", () => result.value = eval(result.value));


// to clear eveyrthing 
clear.addEventListener("click", ()=> document.getElementById("result").value = 0);

