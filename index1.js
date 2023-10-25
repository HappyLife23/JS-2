/*
A variabel is a container for storing data
A varibel behaves as if it was the value that it contains 


Två steps:
1. Declaration: var, let, const
2. Assignment: = assignment operator



let age = 21;
let firstName = "David";
let student = true;

age = age + 1;


console.log("You are", age, "age years old.")
console.log("Hello " + firstName)
console.log("Enrolled:", student)

document.getElementById("p1").innerHTML = "Hello " + firstName
document.getElementById("p2").innerHTML = "You are " + age + " years old"
document.getElementById("p3").innerHTML = "Enrolled: " + student

*/
/****** 
 DOM-manipulation
********/
// övning 1
const p = document.getElementById("myText");

p.textContent = "Hello World"

// övning 2


/***** 
 function
 * ******/

function greeting(){
    console.log("Hello World 🌍")
    
}
greeting();

// övning 2 

function number() {
    console.log(3 *5)
}
number();

// övning 3

function convertToUpperCase(inputString) {
    return inputString.toUpperCase();
}

// Anropa funktionen med en sträng som argument

let originalString = "Hej världen!";
let uperCaseString = convertToUpperCase(originalString);

console.log(uperCaseString)

//--------kör övningen igen 

function convert(input) {
    return input.toUpperCase();

}
let originaltext = "david";
let changed = convert(originaltext);

console.log(changed)

//-------En gång till-------------

function changing(userInput) {
    return userInput.toUpperCase;
}

let mainText = "are you even trying??"
let haveChanged = changing(mainText);

console.log(have)