/*
// denna kod-rad ska vara med för att de noder vi skapar ska synas i webbläsaren.
const body = document.body

// body.append("Hello world", " -goodby")

// nu har vi skapat vår element

const div = document.createElement("div")
///const p = document.createElement("p")


// här ska vi lägga till vår elenmet på sidan för att vi ska kunna se den på skärmen

///body.append(div, p)

// efter att vi har skapat vår element och "add" till vår hemsida, kan vi lägga till innehåll
// Alt nummer 1:

div.innerText = "Hello world." + "\nMy name is David." + "\n I am 28 years old.";

// Alt nummer 1:

div.textContent = "Hello World 🌍";
p.textContent = "Hej mitt namn är David";

//querySelector
const element1 = document.querySelector(".myClass");
// Hämta det första elementet med klassen "myClass"

const link = document.querySelector("a[href='https://www.example.com']");
// Hämta det första ankarelementet med en specifik href

//querySelectorAll
const elements = document.querySelectorAll(".myClass");
// Hämta alla element med klassen "myClass"

const element2 = document.getElementById("myElement");
// Hämta elementet med id "myElement"

const element3 = document.getElementsByClassName("myClass");
// Hämta alla element med klassen "myClass"

const element4 = document.getElementsByTagName("p");
// Hämta alla <p>-element

*/

const p = document.getElementById("myText");
p.textContent = "Hello world";

