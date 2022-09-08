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
  <div class="col-auto p-5">
    <h4><b>Precio:` + " " + ` <font color ="green"> ` + infoProd.currency + `</font>` + " " + infoProd.cost + `.</b></h4>
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
    let prodComm = ProductosComments[i];

    estructuraHTMLcomentarios+=`<li class="list-group-item"><b>` + prodComm.user + `</b> - ` 
    + prodComm.dateTime + " " + "- " +prodComm.score + `<br>`+ prodComm.description +`</li>`
   }
   document.getElementById('Prod-comments-list').innerHTML = estructuraHTMLcomentarios;

}



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
          console.log(ProductosComments)
          mostrarComentarios();
         
      }
  });
});