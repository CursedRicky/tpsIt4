let iter = 1

function refreshTable() {
    let carrello = localStorage.getItem("carrello")
    document.querySelector(".nome").innerHTML = "Carrello di " + localStorage.getItem("nome")

    let totale = 0
    let items = carrello.split(" | ")

    let prodotti = document.querySelector(".prodotti")

    for(let i = 0; i<items.length-1; i++) {
        
        

        items[i] = items[i].substring(1, items[i].length-1)
        let oggetto = items[i].split(",")
        
        let nome = oggetto[0].replaceAll('"', "")
        if (nome[0] != "u") {
            let prezzo = oggetto[1]


            let prodName = document.createElement("h1")
            prodName.classList.add("col-6")
            prodName.innerHTML = nome
    
            let prodPrice = document.createElement("h1")
            prodPrice.classList.add("col-6")
            prodPrice.innerHTML = prezzo + "$"
            totale+=parseInt(prezzo)
    
            let prod = document.createElement("div")
            prod.classList.add("row")
    
            prod.appendChild(prodName)
            prod.appendChild(prodPrice)
    
    
            prodotti.appendChild(prod)
        }
       
    }

    document.querySelector(".prezzo").innerHTML = totale + "$"
    
}

function paga() {
    window.print()
  }