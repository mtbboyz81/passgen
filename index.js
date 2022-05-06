// Pull and name DOM variables //
let ansTL = document.getElementById("ans-tl")
let ansBL = document.getElementById("ans-bl")
let ansTR = document.getElementById("ans-tr")
let ansBR = document.getElementById("ans-br")

// Create the array of all characters on the keyboard //
let characters = [];

for (let i=32; i<127; i++)
  characters.push( String.fromCharCode(i) )

// Generate button function //
function generate() {
    let pLength = document.getElementById("input-n").value
    let passBR = ""
    for (let i = 0; i < pLength; i++ )
        passBR += characters[Math.floor((Math.random(i) * 95))]
    ansBR.innerText = passBR
    console.log(passBR)

    let passTR = ""
    for (let i = 0; i < pLength; i++ )
        passTR += characters[Math.floor((Math.random(i) * 95))]
    ansTR.innerText = passTR
    console.log(passTR)

    let passTL = ""
    for (let i = 0; i < pLength; i++ )
        passTL += characters[Math.floor((Math.random(i) * 95))]
    ansTL.innerText = passTL
    console.log(passTL)

    let passBL = ""
    for (let i = 0; i < pLength; i++ )
        passBL += characters[Math.floor((Math.random(i) * 95))]
    ansBL.innerText = passBL
    console.log(passBL)

}
