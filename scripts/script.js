var submitButton = document.getElementById("submit")
var usableSpecial = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`"]
var usableNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var usableLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var usableUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var generate = function () {
    var specialChar = document.getElementById("defaultCheck1").checked;
    var numericChar = document.getElementById("defaultCheck2").checked;
    var lowerChar = document.getElementById("defaultCheck3").checked;
    var upperChar = document.getElementById("defaultCheck4").checked;

    var newall = ""
    var finalPass = ""

    var i = 0
    var passLength = parseInt(document.getElementById("passlength").value);
    if (passLength < 8) {
        alert("Password must be more than 8 characters!"); passLength = 0
    } else if (passLength > 128) {
        alert("Password cannot be more than 128 characters!"); passLength = 0
    } if ( isNaN(passLength) == true){
        alert("You must enter a number!"); passLength = 0
    }
    while (i < passLength) {
        if (specialChar == true) {
            finalPass = finalPass + usableSpecial[Math.floor(Math.random() * usableSpecial.length)]; i++
        }
        if (numericChar == true) {
            finalPass = finalPass + String(usableNumbers[Math.floor(Math.random() * usableNumbers.length)]); i++
        }
        if (lowerChar == true) {
            finalPass = finalPass + usableLowerCase[Math.floor(Math.random() * usableLowerCase.length)]; i++
        }
        if (upperChar == true) {
            finalPass = finalPass + usableUpperCase[Math.floor(Math.random() * usableUpperCase.length)]; i++
        }
        if (specialChar == false && numericChar == false && lowerChar == false && upperChar == false){
            alert("You must select an option!");
            passLength = 0;
        }
        console.log(finalPass)
    }
    document.getElementById("pw").innerHTML = finalPass
    document.getElementById("pass").style.opacity = 1
    }
    
}

submitButton.addEventListener("click", generate)
