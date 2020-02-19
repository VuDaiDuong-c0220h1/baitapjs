function showMessage(){
    let phys
    let chem
    let bio

    phys = parseInt(document.getElementById("vatly").value);
    chem = parseInt(document.getElementById("hoahoc").value);
    bio = parseInt(document.getElementById("sinhhoc").value);

    let sum = phys + chem + bio;
    let result = sum / 3;

    document.getElementById("result").innerHTML = "Tổng điểm của bạn là: " + sum + "." + " Điểm trung bình của bạn là: " + result;
}

function showMessage02() {
    let Celsius = parseInt(document.getElementById("Celsius").value);
    let Fahrenheit
    Fahrenheit = ((Celsius/5)*9)+32
    document.getElementById("result02").innerHTML = "Nhiệt độ là: " + Fahrenheit + " độ F."
}

function showMessage03() {
    let radius = parseInt(document.getElementById("radius").value)
    let perimeter = (radius*2)*3.14
    let area = (radius*radius)*3.14

    document.getElementById("result03").innerHTML = "Chu vi hình tròn là: " + perimeter + ". " +"Diện tích hình tròn là: " + area + "."
}