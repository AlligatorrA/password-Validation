const password = document.querySelector(".password")
const RePassword = document.querySelector(".Re-password")
const check = document.querySelector(".btn")
const output = document.querySelector(".output")

check.addEventListener("click", checkFunc)

function checkFunc(e) {
    e.preventDefault()
    let pass1 = password.value
    let pass2 = RePassword.value
    if (pass1 == "") {
        output.innerHTML = "Enter password"
        output.style.backgroundColor = `red`
    } else {
        if (pass1 === pass2) {
            output.innerHTML = "matched"
            output.style.backgroundColor = `green`
        } else {
            output.innerHTML = "Password Not-Matched"
            output.style.backgroundColor = `red`
            setTimeout(() => {
                output.innerHTML = ""
            }, 3000);

            RePassword.style.borderColor = `red`
        }
    }
}