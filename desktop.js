function openWindow(id){

document.querySelectorAll(".window").forEach(w=>{

w.style.display="none"

})

document.getElementById(id).style.display="block"

}


const input=document.getElementById("terminalInput")
const output=document.getElementById("terminalOutput")

input.addEventListener("keydown",e=>{

if(e.key==="Enter"){

let cmd=input.value

output.innerHTML+="<div>> "+cmd+"</div>"

if(cmd==="help"){

output.innerHTML+="commands: about github contact"

}

if(cmd==="github"){

output.innerHTML+="github.com/FiiXhub"

}

input.value=""

}

})