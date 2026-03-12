const input = document.getElementById("terminalInput")
const output = document.getElementById("terminalOutput")

input.addEventListener("keydown",function(e){

if(e.key==="Enter"){

let cmd=input.value

output.innerHTML += "<div>> "+cmd+"</div>"

if(cmd==="help"){

output.innerHTML += "commands: about, github, contact"

}

if(cmd==="about"){

output.innerHTML += "Fii - Bot Developer"

}

if(cmd==="github"){

output.innerHTML += "github.com/FiiXhub"

}

input.value=""

}

})

function rate(star){

localStorage.setItem("rating",star)

document.getElementById("ratingResult").innerText="You rated "+star+" stars"

}