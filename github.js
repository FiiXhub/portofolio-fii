fetch("https://api.github.com/users/FiiXhub/repos")

.then(res=>res.json())

.then(data=>{

let div=document.getElementById("repos")

data.forEach(repo=>{

div.innerHTML+=`

<div class="repo">

<h3>${repo.name}</h3>

<p>${repo.description || ""}</p>

<a href="${repo.html_url}" target="_blank">View</a>

</div>

`

})

})