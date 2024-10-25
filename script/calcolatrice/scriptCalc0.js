let value1;
let value2;

let operator;

function getValues() {
    value1 = parseFloat(document.getElementById("value1").value)
    value2 = parseFloat(document.getElementById("value2").value)
}

function add() {
    operator = "+"
}

function sott() {
    operator = "-"
}

function molt() {
    operator = "*"
}

function divi() {
    operator = "/"
}

function calcolo() {
    getValues()
    if (operator == "+") {
        document.getElementById("result").innerHTML = String(value1 + " + " + value2 + " = " + parseFloat(value1+value2))
    } else if (operator == "-") {
        document.getElementById("result").innerHTML = String(value1 + " - " + value2 + " = " + parseFloat(value1-value2))
    } else if (operator == "*") {
        document.getElementById("result").innerHTML = String(value1 + " * " + value2 + " = " + parseFloat(value1*value2))
    } else if (operator == "/") {
        document.getElementById("result").innerHTML = String(value1 + " / " + value2 + " = " + parseFloat(value1/value2))
    } else {
        alert("Operatore non valido")
    }
      
}
