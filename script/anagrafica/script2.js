const users = []

let iter = 1
let table = document.getElementById("tabella")

function pushUsers(nome, cognome, indirizzo, citta, email) {
    const user = []
    user.push(nome)
    user.push(cognome)
    user.push(indirizzo)
    user.push(citta)
    user.push(email)

    users.push(user)
}

function createUser() {
    pushUsers(document.getElementById("nome").value, document.getElementById("cognome").value, document.getElementById("indirizzo").value, document.getElementById("citta").value, document.getElementById("email").value)
    localStorage.setItem("user"+iter, users[users.length-1])
    const user = users[users.length-1]
    localStorage.setItem("counter", iter)
    iter++
}

