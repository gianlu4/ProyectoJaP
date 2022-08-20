document.addEventListener("DOMContentLoaded", ()=>{


let usuario = sessionStorage.getItem('user');

if(usuario === null){

    let respuesta = confirm("Deseas iniciar sesión?");
    if(respuesta === true){
        location.href = 'login.html';
    }
    
}else{

    document.getElementById('usuario1').innerHTML = usuario;

}

document.getElementById('cierro').addEventListener('click', ()=>{
    alert("Has cerrado sesión")

    sessionStorage.clear();
    location.href= "index.html";
})



})
