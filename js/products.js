const ORDER_ASC_BY_NAME = "AZ";
const ORDER_DESC_BY_NAME = "ZA";
const ORDER_BY_PROD_COUNT = "Cant.";
let currentSortCriteria = undefined;
let minCount = undefined;
let maxCount = undefined;

let categoriesArray = [];
let currentCategoriesArray = [];
let arrayCatName = [];

function showCategoriesList(array){
    let htmlContentToAppend = "";
   
    for(let i = 0; i < currentCategoriesArray.length; i++){ 
        let products = currentCategoriesArray[i];

        if (((minCount == undefined) || (minCount != undefined && parseInt(products.soldCount) && parseInt(products.cost) >= minCount)) &&
            ((maxCount == undefined) || (maxCount != undefined && parseInt(products.soldCount) && parseInt(products.cost) <= maxCount))){

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
}


function sortCategories(criteria, array){
    let result = [];
    if (criteria === ORDER_ASC_BY_NAME) //= "AZ";
    {
        result = array.sort(function(a, b) {
            if ( a.name < b.name ){ return -1; }
            if ( a.name > b.name ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_DESC_BY_NAME){ //= "ZA";
        result = array.sort(function(a, b) {
            if ( a.name > b.name ){ return -1; }
            if ( a.name < b.name ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_BY_PROD_COUNT){ //= "Cant.";
        result = array.sort(function(a, b) {
            let aCount = parseInt(a.soldCount); //le cambie el atributo que buscaba en categorias "productCount" y le cambie al .products soldCount, para que pueda filtrar por articulos
            let bCount = parseInt(b.soldCount); //le cambie el atributo que buscaba en categorias "productCount" y le cambie al .products soldCount, para que pueda filtrar por articulos

            if ( aCount > bCount ){ return -1; }
            if ( aCount < bCount ){ return 1; }
            return 0;
        });
    }

    return result;
}

function sortAndShowCategories(sortCriteria, categoriesArray){    
    currentSortCriteria = sortCriteria; //undefinded = AZ/ZA/CANT
   
    if(categoriesArray != undefined){
        currentCategoriesArray = categoriesArray;
    }

    currentCategoriesArray = sortCategories(currentSortCriteria, currentCategoriesArray);
                            //(currentSortCriteria = AZ , currentCategoriesArray)
    //Muestro las categorías ordenadas
    showCategoriesList();
}




    

document.addEventListener("DOMContentLoaded", function(){
    getJSONData(Product_URL_modified).then(function(resultObj){
        if (resultObj.status === "ok") 
        {   
            arrayCatName = resultObj.data.catName;
            document.getElementById('selector').innerHTML = arrayCatName;
           
            categoriesArray = resultObj.data;
            currentCategoriesArray = resultObj.data.products;
            showCategoriesList(); // muestra los datos de la variable
           
        }
    });

    document.getElementById("sortAsc").addEventListener("click", function(){
        sortAndShowCategories(ORDER_ASC_BY_NAME);
    });

    document.getElementById("sortDesc").addEventListener("click", function(){
        sortAndShowCategories(ORDER_DESC_BY_NAME);
    });

    document.getElementById("sortByCount").addEventListener("click", function(){
        sortAndShowCategories(ORDER_BY_PROD_COUNT);
    });

    document.getElementById("clearRangeFilter").addEventListener("click", function(){
        document.getElementById("rangeFilterCountMin").value = "";
        document.getElementById("rangeFilterCountMax").value = "";

        minCount = undefined;
        maxCount = undefined;

        showCategoriesList();
    });

    document.getElementById("rangeFilterCount").addEventListener("click", function(){
        //Obtengo el mínimo y máximo de los intervalos para filtrar por cantidad
        //de productos por categoría.
        minCount = document.getElementById("rangeFilterCountMin").value;
        maxCount = document.getElementById("rangeFilterCountMax").value;

        if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0){
            minCount = parseInt(minCount);
        }
        else{
            minCount = undefined;
        }

        if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0){
            maxCount = parseInt(maxCount);
        }
        else{
            maxCount = undefined;
        }

        showCategoriesList();
    });

});

