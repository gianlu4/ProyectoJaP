function login(){ 


    //Variables para traer los datos de login.html

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
    //google oauth
function onSignIn(googleUser) {
        
    let profile = googleUser.getBasicProfile();
        
    console.log("ID: " + profile.getId()); 
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    
    let id_token = googleUser.getAuthResponse().id_token;

        document.getElementById('accessGoogle').innerHTML = profile;
}

function signOut() {
        
    var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
          console.log('User signed out.');
    });
}

document.addEventListener('DOMContentLoaded', () =>{
    
    document.getElementById('inicio').addEventListener('click',()=>{
        login();
    })
})