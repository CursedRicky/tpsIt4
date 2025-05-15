function setUsername() {
    let inp = document.getElementById("nome").value
    localStorage.setItem("nome", inp)
    localStorage.setItem("carrello", "")
}