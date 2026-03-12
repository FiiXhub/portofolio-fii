// visitor counter

let visitors = localStorage.getItem("visitors")

if(!visitors){
visitors = 1
}else{
visitors = Number(visitors) + 1
}

localStorage.setItem("visitors",visitors)

document.getElementById("visitor-count").innerText = visitors



// rating system

function rate(star){

localStorage.setItem("rating",star)

document.getElementById("rating-result").innerText =
"Terima kasih memberi rating " + star + " ⭐"

}
