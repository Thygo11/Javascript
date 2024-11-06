function add() {
  let num1 = Number(document.getElementById("num1").value);
let num2 = Number(document.getElementById("num2").value);
 let result = num1 + num2;
 document.getElementById("result").innerText = "Antwoord: " + result
}
function minus() {
let num1 = Number(document.getElementById("num1").value);
let num2 = Number(document.getElementById("num2").value);
let result = num1 - num2;
 document.getElementById("result").innerText = "Antwoord: " + result
}
function multiply() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let result = num1 * num2;
     document.getElementById("result").innerText = "Antwoord: " + result
}
function divide() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    if (num2 === 0) {
        document.getElementById("result").innerText = "Antwoord: Kan niet delen door 0";
    } else {
        let result = num1 / num2;
        document.getElementById("result").innerText = "Antwoord: " + result;
    }
}