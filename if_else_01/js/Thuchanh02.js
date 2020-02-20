
function showMessage() {

    let rightanswer = "ECMAScript";
    let answer = document.getElementById("answer").value ;

    if (answer === rightanswer) {
        alert("Right!")
    } else {
        alert("Didn't know? ECMAScript!")
    }

}