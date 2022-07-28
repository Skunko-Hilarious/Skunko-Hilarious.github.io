//initialization
let num1 = 0;
let thisP = document.getElementById("aParagraph");
let changeP = thisP.textContent;
thisP.innerHTML = changeP+" "+num1;

//Addition Button
document.getElementById("addButton").onclick = function(){
    num1 +=1;
    thisP.innerHTML = changeP+" "+num1;
}

//Subtraction Button
document.getElementById("subtractButton").onclick = function(){
    if (num1 > 0){
        num1 -=1;
    }
    thisP.innerHTML = changeP+" "+num1;
}

//Reset/set 0 button
document.getElementById("resetButton").onclick = function(){
    num1 = 0;
    thisP.innerHTML = changeP+" "+num1;
}

//Add 10
document.getElementById("plusTen").onclick = function(){
    num1 += 10;
    thisP.innerHTML = changeP+" "+num1;
}

//Subtract 10
document.getElementById("minusTen").onclick = function(){
    if (num1 > 9){
        num1 -= 10;
    }
    thisP.innerHTML = changeP+" "+num1;
}