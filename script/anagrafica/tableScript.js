let iter = 1

function refreshTable() {
    for (let i = 0; i<localStorage.getItem("counter"); i++) {
        const user = localStorage.getItem("user"+iter)
        const tableRow = document.createElement("tr")
        const tableHead = document.createElement("th")
        tableHead.innerHTML = iter
        tableRow.appendChild(tableHead)
        iter++
        const element = user.split(",")
        for (let y = 0; y<element.length; y++) {
            const tableD = document.createElement("td")
            tableD.innerHTML = element[y]
            tableRow.appendChild(tableD)
        }
        document.getElementById("tabella").appendChild(tableRow)
    }
}

function cancellaCronologia() {
    localStorage.clear()
    location.reload(true)
}



