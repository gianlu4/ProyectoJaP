let ProductosInfoData = []; 

let ProductosComments = [];


function MostrarInfoDeProductos(){

let estructuraHTML = "";
   
let infoProd = ProductosInfoData;

//let prodComm = ProductosComments;
    
     estructuraHTML += `  <div  id="plantillaInfoProductos" class="container">
  <div class="text-center">
    <h4> ` + infoProd.category + `</h4>
  </div>
  <div class="text-center">
    <h1> ` + infoProd.name + ` </h1>
      <div class="text-center">
        <h4>` + infoProd.description + `</h4>
      </div>  
  </div>
  <div class="col-auto p-5">
    <p><b>Precio</b>` + infoProd.currency + " " + infoProd.cost + `</p>
    <br>
    <p><b>Cantidad de vendidos</b>` + infoProd.soldCount + `</p>
    <br>
    <p><b>Imagenes</b></p>
</div>

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
<div id="container2"> 
<div class="text-center">
    <h3> Productos relacionados</h3>
  </div>
<div class="row">
    <div class="col-md-2">
        <div class="ibox1">
          <div class="text-center">
         <p><b>`+ infoProd.relatedProducts[0].name +`</b></p>
         </div>
            <div class="ibox-content product-box1">
                <div>
                  <img src="` + infoProd.relatedProducts[0].image + `" alt="product image" class="img-infoprod">
                </div>
                <div>
              </div>
            </div>
        </div>
    </div>
    <div class="col-md-2">
        <div class="ibox2">
        <div class="text-center">
        <p><b>`+ infoProd.relatedProducts[1].name +`</b></p>
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
        
        document.getElementById("Prod-info-list").innerHTML = estructuraHTML;
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
          
          MostrarInfoDeProductos();
         
      }
  });
});