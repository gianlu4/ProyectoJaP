let ProductosInfoData = []; 

let ProductosComments = [];


function MostrarInfoDeProductos(){

let estructuraHTML = "";
let estructuraProdRel = "";  
let infoProd = ProductosInfoData;

    
     estructuraHTML += `  <div  id="plantillaInfoProductos" class="container">
  <div class="text-center">
  <br>
    <p>Verás aquí toda la informacion del producto de la categoría <b>` + infoProd.category + `</b></p>
  </div>
  
  <div class="text-center">
  <div class ="box1">
    <h2 id = "prueba"> ` + infoProd.name + `</h2>
  </div> <br>
      <div class="text-center">
        <h4 id = "prueba">` + infoProd.description + `</h4>
      </div>  
  </div>
  <div class="">
    <p><b>Precio:` + " " + infoProd.currency + " " + ` <font color ="green"> ` + infoProd.cost + `</font>.</b></p>
    <br>
    <p><b>Cantidad de vendidos: <font color="red">`+ " " + infoProd.soldCount + `</font>.</b></p>
    <br>
    
</div>
<p><b>Imagenes ilustrativas </b></p>
<div class="row">
    <div class="col-md-3">
        <div class="ibox">
            <div class="ibox-content product-box">
                <div class="product-imitation">
                  <img src="` + infoProd.images[0] + `" alt="product image" class="img-infoprod">
                </div>
                <div>
              </div>
            </div>
        </div>
    </div>
    <div class="col-md-3">
      <div class="ibox">
          <div class="ibox-content product-box">
              <div class="product-imitation">
                <img src="` + infoProd.images[1] + `" alt="product image" class="img-infoprod">
              </div>
              <div>
            </div>
          </div>
      </div>
  </div>
  <div class="col-md-3">
    <div class="ibox">
        <div class="ibox-content product-box">
            <div class="product-imitation">
              <img src="` + infoProd.images[2] + `" alt="product image" class="img-infoprod">
            </div>
            <div>
          </div>
        </div>
    </div>
</div>
<div class="col-md-3">
  <div class="ibox">
      <div class="ibox-content product-box">
          <div class="product-imitation">
            <img src="` + infoProd.images[3] + `" alt="product image" class="img-infoprod">
          </div>
          <div>
        </div>
      </div>
  </div>
</div>
</div>
</div>
<br>
<br>
`   
document.getElementById("Prod-info-list").innerHTML = estructuraHTML;

estructuraProdRel += `
<br>
<hr>
<div id="container2"> 
<div class="text-center">
    <h3 id="prueba"> Productos relacionados</h3>
  </div>
<div class="row">
    <div class="col-md-2">
        <div class="ibox1">
          <div class="text-end">
         <p id = "merparrafo"><b>`+ infoProd.relatedProducts[0].name +`</b></p>
         
            <div class="ibox-content product-box1">
                <div>
                  <img src="` + infoProd.relatedProducts[0].image + `" alt="product image" class="img-infoprod">
                </div>
                <div>
              </div>
            </div>
          </div>
        </div>
    </div>
    <div class="col-md-2">
        <div class="ibox2">
        <div class="text-start">
        <p id = "doparrafo"><b>`+ infoProd.relatedProducts[1].name +`</b></p>
        </div>
            <div class="ibox-content product-box2">
                <div>
                  <img src="` + infoProd.relatedProducts[1].image + `" alt="product image" class="img-infoprod">
                </div>
                <div>
              </div>
            </div>
        </div>
    </div>
</div>    
</div>
`
        
        document.getElementById("Prod-relacionado").innerHTML = estructuraProdRel;
}






function mostrarComentarios() {

let estructuraHTMLcomentarios = "";

for(let i = 0; i < ProductosComments.length; i++){
    

    estructuraHTMLcomentarios+=`
       <li class="list-group-item"><b>
          <span> ${ProductosComments[i].user}</span></b>
          <span> - ${ProductosComments[i].dateTime} -</span>
            <span>
              <span class= "fa fa-star ${ProductosComments[i].score >= 1 ? "checked" : ""}"></span>
              <span class= "fa fa-star ${ProductosComments[i].score >= 2 ? "checked" : ""}"></span>
              <span class= "fa fa-star ${ProductosComments[i].score >= 3 ? "checked" : ""}"></span>
              <span class= "fa fa-star ${ProductosComments[i].score >= 4 ? "checked" : ""}"></span>
              <span class= "fa fa-star ${ProductosComments[i].score >= 5 ? "checked" : ""}"></span>
            </span>
          <br>
          <span> ${ProductosComments[i].description}</span>

       </li>`
   }
   document.getElementById('Prod-comments-list').innerHTML = estructuraHTMLcomentarios;

}


//desafiate
let Puntaje = document.getElementById('Puntaje').value;

function estrellita(Puntaje){
  let estrella = "";
  
  for(let i = 1; i <= 5; i ++){
    
    if(i <= puntos){
      
      estrella += `<i class="fas fa-star checked"></i>`;
      
    }else{

      estrella += `<i class="far fa-star nada"></i>`;

  }}
}


function fechatiempo(){

let fechaHora = new Date();
let anio = fechaHora.getFullYear();
let mes = fechaHora.getMonth();
let dia = fechaHora.getDay();
let minutos = fechaHora.getMinutes();
let segundos = fechaHora.getSeconds();
let horas = fechaHora.getHours();

if (dia < 10) { dia = "0" + dia;}
if (minutos < 10) { minutos = "0" + minutos;}
if (segundos < 10) { segundos = "0" + segundos;}
if (mes < 10) { mes = "0" + mes;}
if (horas < 10) { horas = "0" + horas;}

let tiempoActual = anio + "-" + mes + "-" + dia + " " + horas + ":" + minutos + ":" + segundos;

}

let array = [];


function mostrar(array){
  let elementos="";
  for (let item of array) {
      elementos+= `<li class="list-group-item"> ` + array.item + fechatiempo() +   `</li> `
      
  }
  document.getElementById('Prod-comments-list').innerHTML = elementos;
  
}


function agregarComentario () {
    
let elemento = document.getElementById('comentario').value;
let Puntaje = document.getElementById('Puntaje').value;

  
  if(elemento != "" && Puntaje != "") {

  array.push(elemento);
  localStorage.setItem('IdCommen', JSON.stringify(array))
  mostrar(array);

  } else {
      Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Debes ingresar un ítem',
        })
   }

  document.getElementById('comentario').value="";
}



  
document.addEventListener('DOMContentLoaded', ()=> {

  array=JSON.parse(localStorage.getItem('IdCommen'));
  if (array!=null){
    mostrar(array);
  } else {
      array=[];
  }
  let usuario = document.getElementById('usuario1').innerText;
   
  console.log(usuario);


  document.getElementById('botonsito').addEventListener('click',()=>{
  
   

    if(usuario == ""){
      Swal.fire({
        title: 'Debes iniciar sesión para comentar',
        text: "Deseas iniciar?",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#17a2b8',
        cancelButtonColor: 'grey',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Iniciar sesión'
      
      }).then((result) => {
        if (result.isConfirmed) {   
        location.href= "login.html";
        }
      })}   
    else{
      agregarComentario();
    }
   })
})
//hasta aca el desafiate


document.addEventListener("DOMContentLoaded", function(){
    getJSONData(ProductINFO_URL_modified).then(function(resultObj){
        if (resultObj.status === "ok") 
        {   
            ProductosInfoData = resultObj.data;
            
            MostrarInfoDeProductos();
           
        }
    });
});

document.addEventListener("DOMContentLoaded", function(){
  getJSONData(ProductCommentsInfo).then(function(resultObj){
      if (resultObj.status === "ok") 
      {   
        ProductosComments = resultObj.data;
          
          mostrarComentarios();
         
      }
  });
});