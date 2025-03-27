let products = document.querySelector('.products')
let productNumber = 0

let row = document.createElement("div")

function createProductsCards(condition = true) {
    products.innerHTML = ""
    fetch("./products.json")
        .then(result => result.json()) // Converti la risposta in formato json
        .then(values => values.forEach(element => {
                if(productNumber%3==0) {
                    row = document.createElement("div")
                    row.classList.add("row")
                } 
                productNumber++
            
                const card = document.createElement('div')
                card.classList.add("card")
                card.classList.add("col-3")
                card.classList.add("mx-auto")
                card.classList.add("shadow-lg")
                card.classList.add("my-5")
                card.style.width = "35rem"
                card.style.height = "40rem"
            
                const img = document.createElement('img')
                img.src = element.immagine
                img.classList.add("card-img-top")
                img.style.paddingTop = "1rem"
                img.style.borderRadius = "10px"
            
                const cardBody = document.createElement('div')
                cardBody.classList.add("card-body")
            
                const cardTitle = document.createElement('h1')
                cardTitle.classList.add("card-title")
                cardTitle.innerHTML = element.nome
            
                const p = document.createElement("p")
                p.classList.add("card-text")
                p.innerHTML = element.prezzo + "$"
                p.style.scale = 1.8
            
                cardBody.appendChild(cardTitle)
                cardBody.appendChild(p)
            
                card.appendChild(img)
                card.append(cardBody)
            
                row.append(card)
                products.append(row)
            

}))
}