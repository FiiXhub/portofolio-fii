// visitor counter

fetch("https://api.countapi.xyz/hit/fii-portfolio/visits")

.then(res => res.json())

.then(data => {

document.getElementById("visitor-count").innerText = data.value

})



// rating system

function rate(star){

localStorage.setItem("rating",star)

document.getElementById("rating-result").innerText =
"Terima kasih memberi rating " + star + " ⭐"

}
