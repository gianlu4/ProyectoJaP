function login(){ 

    let usuario = document.getElementById('username').value;

    let contraseña = document.getElementById('password').value;
    
    
    if (usuario === "" || contraseña === "" ){

        alert('Debe ingresar Usuario y Contraseña')
    }else{
        location.href='index.html';
    }

}

document.addEventListener('DOMContentLoaded', () =>{
    
    document.getElementById('inicio').addEventListener('click',()=>{
        login();
    })


})