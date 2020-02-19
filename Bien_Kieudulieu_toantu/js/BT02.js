function showMessage04() {
    let a = document.getElementById("amount").value;
    let b = document.getElementById("select01").value;
    let c = document.getElementById("select02").value;
    let d = null;

    if (b === "vnd" && c === "usd") {
        d = a/23000;
    } else if (b === "usd" && c === "vnd") {
        d = a*23000
    } else {
        d = a
    }
    document.getElementById("result01").innerHTML = "Số tiền là: " + d
}





