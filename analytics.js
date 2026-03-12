let count = localStorage.getItem("visits")

if(!count){

count = 1

}else{

count = parseInt(count)+1

}

localStorage.setItem("visits",count)

document.getElementById("visitorCount").innerText = count