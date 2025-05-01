let iter = 1

function refreshTable() {
    let carrello = localStorage.getItem("carrello")
    document.querySelector(".nome").innerHTML = "Carrello di " + localStorage.getItem("nome")

    let items = carrello.split(" | ")

    let prodotti = document.querySelector(".prodotti")

    for(let i = 0; i<items.length-1; i++) {
        // alert(items[i])

    // <div class="row card-cont">
    //         <div class="col-10">
    //         <div class="card-c">
    //             <div class="row">
    //             <div class="col-6">nome</div>
    //             <div class="col-6">prezzo</div>
    //             </div>
    //         </div>
    //         </div>
    //         <div class="col-2">
    //         <div class="card-c">
    //             -
    //         </div>
    //         </div>
    //     </div>

        let oggetti = items[i].substring('"')
        alert(oggetti)

        // prodotti.appendChild(card)
    }
}