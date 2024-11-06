function add() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    if (num1 > 0 && num2 > 0) {
        let result = num1 + num2;
        document.getElementById("result").innerText = "Antwoord: " + result
    } else {
        document.getElementById("result").innerText = "het getal moet hoger zijn dan 0"
    }
}


function minus() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    if (num1 > 0 && num2 > 0) {
        let result = num1 + num2;
        document.getElementById("result").innerText = "Antwoord: " - result
    } else {
        document.getElementById("result").innerText = "het getal moet hoger zijn dan 0"
    }
}

function multiply() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    if (num1 > 0 && num2 > 0) {
        let result = num1 + num2;
        document.getElementById("result").innerText = "Antwoord: " * result
    } else {
        document.getElementById("result").innerText = "het getal moet hoger zijn dan 0"
    }
}

function divide() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    if (num1 > 0 && num2 > 0) {
        let result = num1 + num2;
        document.getElementById("result").innerText = "Antwoord: " / result
    } else {
        document.getElementById("result").innerText = "het getal moet hoger zijn dan 0"
    }
}

