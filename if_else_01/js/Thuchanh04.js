let browser = prompt("Nhập trình duyệt của bạn","")
switch (browser) {
    case "Edge":
        alert("You've got the Edge!");
        break;
    case "Chrome":
    case "Firefox":
    case "Safari":
    case "Opera":
        alert("Okay we support these browsers too");
        break;
    default:
        alert("We hope that this page looks ok!");
}

let a = prompt("a?","");
switch (a) {
    case "0":
        alert("0");
        break;
    case "1":
        alert("1");
        break;
    case "2":
    case "3":
        alert("2, 3");
        break;
}

let number = parseInt(prompt("Nhập vào 1 số:",""))
switch (number) {
    case number > 0:
        alert("1")
        break;
    case number < 0:
        alert("-1")
        break;
    default:
        alert("0")
}