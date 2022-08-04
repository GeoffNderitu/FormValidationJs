const jina = document.getElementById("name");
const pass = document.getElementById("password");
const form = document.getElementById("jaza");
const potea= document.getElementById("potea")

form.addEventListener('submit', (e) => {
 let julisha = []
 if(jina.value=== '' || jina.value== null){
    alert("Please fill in your name")
 }

 if (pass.value.length <=6 ){
    alert("Password must be longer than 6 characters")
 }

 if (pass.value.length >=20){
    alert("Password must be shorter than 20 characters")
 }

 if(julisha.length > 0){
    e.preventDefault()
    potea.innerText = julisha.join(",")
 }
})