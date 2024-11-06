function calculate(num1, num2) {
    let sum = num1 + num2; 
    console.log(sum); 
    document.getElementById("output").innerText = `Resultaat van calculate(${num1}, ${num2}): ${sum}`;
}
function multiplyByFive(num) {
    let product = num * 5; 
    console.log(product); 
    document.getElementById("output").innerText = `Resultaat van multiplyByFive(${num}): ${product}`;
}

function calculateMinutes(seconds) {
    let minutes = seconds / 60; 
    console.log(minutes); 
    document.getElementById("output").innerText = `Resultaat van calculateMinutes(${seconds}): ${minutes} minuten`;
}