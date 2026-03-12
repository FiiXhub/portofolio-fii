// SKILL CHART

const ctx = document.getElementById("skillChart");

new Chart(ctx,{
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



// RATING

function rate(star){

localStorage.setItem("rating",star)

document.getElementById("rating-result").innerText=
"Terima kasih memberi rating "+star+" ⭐"

}



// GITHUB STATS

fetch("https://api.github.com/users/USERNAME")

.then(res=>res.json())

.then(data=>{

document.getElementById("repo").innerText=data.public_repos
document.getElementById("followers").innerText=data.followers

})
