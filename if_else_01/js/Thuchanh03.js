function showMessage() {
    let account = document.getElementById("account").value;
    let password = document.getElementById("password").value;
    let blank = "";
    if (account === "Admin") {
        if (password === "TheMaster") {
            alert("Welcome!")
        } else if (password === blank) {
            alert("Canceled.")
        } else {
            alert("Wrong Pass")
        }
    } else if (account === blank) {
        alert("Canceled")
    } else {
        alert("I don't know you")
    }

}