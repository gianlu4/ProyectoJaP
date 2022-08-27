document.addEventListener("DOMContentLoaded", ()=>{


function mostrar(){
    document.getElementById('cierro').style.display = "none";
}
function ocultar(){
    document.getElementById('inicios').style.display = "none";  
}


let usuario = sessionStorage.getItem('user');

if(usuario === null){

    mostrar();
    let respuesta = confirm("Deseas iniciar sesión?");
    if(respuesta === true){
        location.href = 'login.html';
    }
    
}else{

    document.getElementById('usuario1').innerHTML = "Bienvenido, " + usuario + "!";
    ocultar();
}

document.getElementById('cierro').addEventListener('click', ()=>{
    alert("Has cerrado sesión")

    sessionStorage.clear();
    location.href= "index.html";
})

document.getElementById('inicios').addEventListener('click',()=>{
    location.href="login.html";
    

})




})
