fetch("https://ipapi.co/json")

.then(res=>res.json())

.then(data=>{

document.getElementById("country").innerText =
"Visitor Country: "+data.country_name

})

let visits=localStorage.getItem("visits")

if(!visits){

visits=1

}else{

visits=parseInt(visits)+1

}

localStorage.setItem("visits",visits)

document.getElementById("visits").innerText=visits