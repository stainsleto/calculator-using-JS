function printSymbol(e){
    let result = document.getElementById("result");
    let obj = e.target;
    result.textContent = result.textContent + obj.textContent;
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
num1.addEventListener("click", printSymbol);
num2.addEventListener("click", printSymbol);
num3.addEventListener("click", printSymbol);
num4.addEventListener("click", printSymbol);
num5.addEventListener("click", printSymbol);
num6.addEventListener("click", printSymbol);
num7.addEventListener("click", printSymbol);
num8.addEventListener("click", printSymbol);
num9.addEventListener("click", printSymbol);
num0.addEventListener("click", printSymbol);
// signs
subtraction.addEventListener("click",printSymbol);
addition.addEventListener("click",printSymbol);
multiplication.addEventListener("click",printSymbol);
division.addEventListener("click",printSymbol);
decimal.addEventListener("click",printSymbol);

// evaluation for equal sign 

equal.addEventListener("click", () => result.textContent = eval(result.textContent));


// to clear eveyrthing 
clear.addEventListener("click", ()=> document.getElementById("result").textContent = 0);

