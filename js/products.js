

let categoriesArray = [];

function showCategoriesList(array){
    let htmlContentToAppend = "";
    
    let Prueba1 = array.products;
    let prueba2 = array.catName;
    
    document.getElementById('selector').innerHTML = prueba2;
    
    for(let i = 0; i < Prueba1.length; i++){ 
        let products = Prueba1[i];
        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + products.image + `" alt="product image" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4>`+ products.name + " - " + products.currency + " " + products.cost +`</h4> 
                        
                        <p> `+ products.description +`</p> 
                        </div>
                        <small class="text-muted">` + products.soldCount + ` artículos</small> 
                    </div>

                </div>
            </div>
        </div>
        `
        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend; 
    }
}
    

document.addEventListener("DOMContentLoaded", function(){
    getJSONData(Product_URL_modified).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            categoriesArray = resultObj.data;
            showCategoriesList(categoriesArray); // carga los datos a la variable
           
        }
    });
});

