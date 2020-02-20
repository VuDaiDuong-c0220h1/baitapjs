let a = parseInt(prompt("a?",""));
let b = parseInt(prompt("b?",""));
result = ((a + b) < 4) ? "Below" : "Over";
alert(result);

let login = prompt("Xin mời nhập tên: ","")
let message = (login === "Employee") ?
    "Hello" : (login === "Director") ?
        "Greetings" : (login === "") ?
            "No login" :
            ";"
alert(message)