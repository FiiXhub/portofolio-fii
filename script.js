// SKILL CHART

new Chart(document.getElementById("skillChart"),{

type:"bar",

data:{
labels:[
"JavaScript",
"Discord API",
"AI API",
"Web Development",
"WhatsApp Dev",
"Discord Dev"
],

datasets:[{
label:"Skill Level",
data:[90,85,80,75,85,90]
}]

}

})



// VISITOR COUNTER

fetch("https://api.countapi.xyz/hit/fii-portfolio/visits")

.then(res=>res.json())

.then(data=>{
document.getElementById("visitor-count").innerText=data.value
})



// GITHUB STATS

fetch("https://api.github.com/users/FiiXhub")

.then(res=>res.json())

.then(data=>{

document.getElementById("repo").innerText=data.public_repos
document.getElementById("followers").innerText=data.followers

})



// TERMINAL

const input=document.getElementById("terminal-input")
const output=document.getElementById("terminal-output")

input.addEventListener("keydown",function(e){

if(e.key==="Enter"){

let cmd=input.value

let result=""

if(cmd==="help") result="about, skills, contact"

else if(cmd==="about") result="Saya developer bot dan AI automation"

else if(cmd==="skills") result="JavaScript, Discord API, AI API"

else result="command tidak ditemukan"

output.innerHTML+="<div>> "+cmd+"</div>"
output.innerHTML+="<div>"+result+"</div>"

input.value=""

}

})



// AI CHATBOT (simple)

function sendChat(){

let input=document.getElementById("chat-input")

let chat=document.getElementById("chat-box")

let user=input.value

chat.innerHTML+="<p><b>Kamu:</b> "+user+"</p>"

chat.innerHTML+="<p><b>Bot:</b> Halo saya AI portfolio.</p>"

input.value=""

}
