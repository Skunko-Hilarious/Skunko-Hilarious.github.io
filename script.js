let num1 = 0;
let thisP = document.getElementById("aParagraph");
let changeP = thisP.textContent;
thisP.innerHTML = changeP+" "+num1;

document.getElementById("addButton").onclick = function(){
    console.log(thisP);
    num1 +=1;
    thisP.innerHTML = changeP+" "+num1;
}

document.getElementById("subtractButton").onclick = function(){
    console.log(thisP);
    if (num1 > 0){
        num1 -=1;
    }
    thisP.innerHTML = changeP+" "+num1;
}