function showMessage() {
    let year = parseInt(document.getElementById("year").value);
    let isleapyear = false;
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                isleapyear = true;
            }
        } else {
            isleapyear = true;
        }
    }

    if (isleapyear) {
        document.getElementById("result").innerHTML = year + " is a leap year";
    } else {
        document.getElementById("result").innerHTML = year + " is NOT a leap year";
    }

}