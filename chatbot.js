const chatinput=document.getElementById("chatinput")
const chatlog=document.getElementById("chatlog")

chatinput.addEventListener("keydown",async e=>{

if(e.key==="Enter"){

let msg=chatinput.value

chatlog.innerHTML+="<div>You: "+msg+"</div>"

let res=await fetch("https://api.affiliateplus.xyz/api/chatbot?message="+msg)

let data=await res.json()

chatlog.innerHTML+="<div>AI: "+data.message+"</div>"

chatinput.value=""

}

})