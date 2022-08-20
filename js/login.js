function login(){ 

    let usuario = document.getElementById('username').value;

    let contrasenia = document.getElementById('password').value;
    
    

    if (usuario === "" && contrasenia === ""){

        document.getElementById('username').classList.add('error')
        document.getElementById('password').classList.add('error')

        alert('Debe ingresar Usuario & Contraseña')

    }else if (contrasenia === ""){
    
        document.getElementById('password').classList.add('error')

        alert('Debe ingresar Contraseña')

    }else if (usuario === ""){    

        document.getElementById('username').classList.add('error')

        alert('Debe ingresar Usuario')
 
    }else{
        sessionStorage.setItem('user',usuario);
        location.href='index.html';

    }
    }



document.addEventListener('DOMContentLoaded', () =>{
    
    document.getElementById('inicio').addEventListener('click',()=>{
        login();
    })


})