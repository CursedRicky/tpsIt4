// document.getElementByid("ID").innerHTML = VALUE;

let annoCorrente = 2024

function sPrint() {
    let nome = ""
    nome += document.getElementById("nome").value + " "
    nome += document.getElementById("cognome").value + " "
    nome += ", sei nato/a nel "
    nome += String(annoCorrente - parseInt(document.getElementById("eta").value))
    document.getElementById("sPrint").innerHTML = "Ciao " + nome
}
