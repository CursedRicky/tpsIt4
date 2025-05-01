function creaPagina() {
    window.location.href = "#"
    let prodotto = JSON.parse(localStorage.getItem("prodotto"))
    document.querySelector(".nome").innerHTML = prodotto.nome
    document.querySelector(".imgg").src = prodotto.immagine
    document.querySelector(".prezzo").innerHTML = prodotto.prezzo+ " $"
    document.querySelector(".descr").innerHTML = prodotto.descrizione
}

function aggiungiProdotto() {
    let carrello = localStorage.getItem("carrello")
    let element = JSON.parse(localStorage.getItem("prodotto"))
    carrello += "["+ JSON.stringify(element.nome) + "," + JSON.stringify(element.prezzo) + "]" + " | "
    localStorage.setItem("carrello", carrello)
    window.location.href = "./carrello.html"
}