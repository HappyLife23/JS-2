/*
A variabel is a container for storing data
A varibel behaves as if it was the value that it contains 


Två steps:
1. Declaration: var, let, const
2. Assignment: = assignment operator

*/

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