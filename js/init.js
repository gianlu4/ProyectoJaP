const CATEGORIES_URL = "https://japceibal.github.io/emercado-api/cats/cat.json";
const PUBLISH_PRODUCT_URL = "https://japceibal.github.io/emercado-api/sell/publish.json";
const PRODUCTS_URL = "https://japceibal.github.io/emercado-api/cats_products/";
const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/";
const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/";
const CART_INFO_URL = "https://japceibal.github.io/emercado-api/user_cart/";
const CART_BUY_URL = "https://japceibal.github.io/emercado-api/cart/buy.json";
const LIST_URL = "https://japceibal.github.io/emercado-api/cats_products/101.json";
const EXT_TYPE = ".json";
let Product_URL_modified = PRODUCTS_URL + localStorage.getItem("catID") + EXT_TYPE;



let showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

let hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

let getJSONData = function(Product_URL_modified){
    let result = {};
    showSpinner();
    return fetch(Product_URL_modified)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
} 

document.addEventListener("DOMContentLoaded", ()=>{

  function askCloseSession (){     // pregunta si quiere cerrar sesion
    Swal.fire({
      title: '¿Quieres cerrar la sesión de eMercado?',
      text: "Puedes volver a iniciar sesión en cualquier momento.",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#17a2b8',
      cancelButtonColor: 'grey',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Cerrar sesión'
    }).then((result) => {
      if (result.isConfirmed) {   //si hay respuesta positiva, borra el session y redirije al index
      sessionStorage.clear();
      location.href= "index.html";
      }
    })}    


  function mostrar(){             //mostrar boton de inicio de sesion y ocultar boton de cerrar sesion
      document.getElementById('cierro').style.display = "none";
  }
  function ocultar(){             //ocultar boton de inicio de sesion y mostrar boton de cerrar sesion
      document.getElementById('inicios').style.display = "none";  
  }
  
  let usuario = sessionStorage.getItem('user');
  
  if(usuario === null){
  
      mostrar();
      
  }else{
  
      ocultar();
      document.getElementById('usuario1').innerHTML = "Bienvenido, " + usuario + "!";
      
  }
  
  document.getElementById('cierro').addEventListener('click', ()=>{
    
    askCloseSession ();
  })
  
  document.getElementById('inicios').addEventListener('click',()=>{
      
    location.href="login.html";     
  })
  })

