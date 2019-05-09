var login = document.getElementById("login")
var password = document.getElementById("password")
var loginButton = document.getElementById("loginButton")

loginButton.addEventListener("click", log)

function log () {
    var id = this.attributes.id.value
    if (login.value == "thazarius@gmail.com" && password.value == "kakashi88") {
        alert("Poprawne");
    } else {
        alert("Login lub hasło niepoprawne")
    }
    color(id)
}

function color(id) {
    var button = document.getElementById(id)
    button.className = "redColor"
}
