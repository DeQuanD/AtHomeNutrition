var listItems = document.getElementById("list");
var input = document.getElementById("input");
var apiKey = "68dc663027be4c41aa983edad19d1700";
var apiKey = "78864f41cea947c889abb37111d67773";
var input2 = $('#NutritionalFacts');
var groceryItem1 = document.getElementById("fooditem1");
var groceryItem2 = document.getElementById("fooditem2");
var groceryItem3 = document.getElementById("fooditem3");
var groceryItem4 = document.getElementById("fooditem4");
var groceryItem5 = document.getElementById("fooditem5");
var groceryItem6 = document.getElementById("fooditem6");



function getFirstItem() {

    var requestString = "https://api.spoonacular.com/food/products/search?query=tomatoe&number=20&apiKey=68dc663027be4c41aa983edad19d1700";

    fetch(requestString)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var foodItem1 = document.createElement("h3");
        foodItem1.textContent = data.products[15].title;
        groceryItem1.append(foodItem1);  
    })
}

function getSecondItem() {

    var requestString = "https://api.spoonacular.com/food/products/search?query=apples&number=20&apiKey=68dc663027be4c41aa983edad19d1700";

    fetch(requestString)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var foodItem1 = document.createElement("h3");
        foodItem1.textContent = data.products[3].title;
        groceryItem2.append(foodItem1);  
    })
}

function getThirdItem() {

    var requestString = "https://api.spoonacular.com/food/products/search?query=trailmix&number=20&apiKey=68dc663027be4c41aa983edad19d1700";

    fetch(requestString)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var foodItem1 = document.createElement("h3");
        foodItem1.textContent = data.products[3].title;
        groceryItem3.append(foodItem1);  
    })
}

function getFourthItem() {

    var requestString = "https://api.spoonacular.com/food/products/search?query=salsa&number=20&apiKey=68dc663027be4c41aa983edad19d1700";

    fetch(requestString)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var foodItem1 = document.createElement("h3");
        foodItem1.textContent = data.products[8].title;
        groceryItem4.append(foodItem1);  
    })
}

function getFifthItem() {

    var requestString = "https://api.spoonacular.com/food/products/search?query=eggs&number=40&apiKey=68dc663027be4c41aa983edad19d1700";

    fetch(requestString)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var foodItem1 = document.createElement("h3");
        foodItem1.textContent = data.products[7].title;
        groceryItem5.append(foodItem1);  
    })
}

function getSixthItem() {

    var requestString = "https://api.spoonacular.com/food/products/search?query=soup&number=40&apiKey=68dc663027be4c41aa983edad19d1700";

    fetch(requestString)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        for (var i = 0 ; i < data.products.length; i++) {
            console.log(data.products[i].title)
        }
        var foodItem1 = document.createElement("h3");
        foodItem1.textContent = data.products[37].title;
        groceryItem6.append(foodItem1);  
    })
}

function getTomatoData(){

  input2.html("")
    var foodDataApi = "https://api.nal.usda.gov/fdc/v1/foods?fdcIds=1103276&api_key=XFPwxrCBhyPpLKYcOMBeL1x6bvAgVxL9GeTMaxfM"
        fetch(foodDataApi)
      .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          for (var i = 0; i < 10; i++){
            console.log("Tomato Nutrients: " + data[0].foodNutrients[i].nutrient.name + ': ' + data[0].foodNutrients[i].amount + data[0].foodNutrients[i].nutrient.unitName)
            
            if(data[0].foodNutrients[i].amount !== undefined){
            var nutrientItem1 = document.createElement("h3");
            nutrientItem1.textContent = data[0].foodNutrients[i].nutrient.name + ': ' + data[0].foodNutrients[i].amount + data[0].foodNutrients[i].nutrient.unitName
            input2.append(nutrientItem1)


          
          }
          }
        });
  }

  function getAppleData(){
    input2.html("")
    var foodDataApi = "https://api.nal.usda.gov/fdc/v1/foods?fdcIds=1102644&api_key=XFPwxrCBhyPpLKYcOMBeL1x6bvAgVxL9GeTMaxfM"
        fetch(foodDataApi)
      .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);

          for (var i = 0; i < 10; i++){
            console.log("Apple Nutrients: " + data[0].foodNutrients[i].nutrient.name + ': ' + data[0].foodNutrients[i].amount + data[0].foodNutrients[i].nutrient.unitName)

            if(data[0].foodNutrients[i].amount !== undefined){
              var nutrientItem1 = document.createElement("h3");
              nutrientItem1.textContent = data[0].foodNutrients[i].nutrient.name + ': ' + data[0].foodNutrients[i].amount + data[0].foodNutrients[i].nutrient.unitName
              input2.append(nutrientItem1)
            
            }
          }
        });
  }

  function getJumboEggData(){
    input2.html("")
    var foodDataApi = "https://api.nal.usda.gov/fdc/v1/foods?fdcIds=1663010&api_key=XFPwxrCBhyPpLKYcOMBeL1x6bvAgVxL9GeTMaxfM"
        fetch(foodDataApi)
      .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          for (var i = 0; i < 10; i++){
            console.log("Jumbo Brown Egg Nutrients: " + data[0].foodNutrients[i].nutrient.name + ': ' + data[0].foodNutrients[i].amount + data[0].foodNutrients[i].nutrient.unitName)

            if(data[0].foodNutrients[i].amount !== undefined){
              var nutrientItem1 = document.createElement("h3");
              nutrientItem1.textContent = data[0].foodNutrients[i].nutrient.name + ': ' + data[0].foodNutrients[i].amount + data[0].foodNutrients[i].nutrient.unitName
              input2.append(nutrientItem1)
            
            }
          }
        });
  }
  function getCraisinData(){
    input2.html("")
    var foodDataApi = "https://api.nal.usda.gov/fdc/v1/foods?fdcIds=1919941&api_key=XFPwxrCBhyPpLKYcOMBeL1x6bvAgVxL9GeTMaxfM"
        fetch(foodDataApi)
      .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          for (var i = 0; i < 10; i++){
            console.log("Craisin Trailmix Nutrients: " + data[0].foodNutrients[i].nutrient.name + ': ' + data[0].foodNutrients[i].amount + data[0].foodNutrients[i].nutrient.unitName)

            if(data[0].foodNutrients[i].amount !== undefined){
              var nutrientItem1 = document.createElement("h3");
              nutrientItem1.textContent = data[0].foodNutrients[i].nutrient.name + ': ' + data[0].foodNutrients[i].amount + data[0].foodNutrients[i].nutrient.unitName
              input2.append(nutrientItem1)
            
            }
          }
        });
  }
  function getChiliData(){
    input2.html("")
    var foodDataApi = "https://api.nal.usda.gov/fdc/v1/foods?fdcIds=1913808&api_key=XFPwxrCBhyPpLKYcOMBeL1x6bvAgVxL9GeTMaxfM"
        fetch(foodDataApi)
      .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          for (var i = 0; i < 10; i++){
            console.log('Chili Mix Nutrients: ' + data[0].foodNutrients[i].nutrient.name + ': ' + data[0].foodNutrients[i].amount + data[0].foodNutrients[i].nutrient.unitName)

            if(data[0].foodNutrients[i].amount !== undefined){
              var nutrientItem1 = document.createElement("h3");
              nutrientItem1.textContent = data[0].foodNutrients[i].nutrient.name + ': ' + data[0].foodNutrients[i].amount + data[0].foodNutrients[i].nutrient.unitName
              input2.append(nutrientItem1)
            
            }
          }
        });
  }
  function getSalsaData(){
    input2.html("")
    var foodDataApi = "https://api.nal.usda.gov/fdc/v1/foods?fdcIds=1855206&api_key=XFPwxrCBhyPpLKYcOMBeL1x6bvAgVxL9GeTMaxfM"
        fetch(foodDataApi)
      .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          for (var i = 0; i < 10; i++){
            console.log("Amy's Salsa Nutrients: " + data[0].foodNutrients[i].nutrient.name + ': ' + data[0].foodNutrients[i].amount + data[0].foodNutrients[i].nutrient.unitName)

            if(data[0].foodNutrients[i].amount !== undefined){
              var nutrientItem1 = document.createElement("h3");
              nutrientItem1.textContent = data[0].foodNutrients[i].nutrient.name + ': ' + data[0].foodNutrients[i].amount + data[0].foodNutrients[i].nutrient.unitName
              input2.append(nutrientItem1)
            
            }
          }
        });
  }

groceryItem1.addEventListener("click" , function(){

getTomatoData();

})

groceryItem2.addEventListener("click" , function(){

  getAppleData();

})

groceryItem3.addEventListener("click" , function(){

  getJumboEggData();

})

groceryItem4.addEventListener("click" , function(){

  getCraisinData();

})

groceryItem5.addEventListener("click" , function(){

  getChiliData();

})

groceryItem6.addEventListener("click" , function(){

  getSalsaData();

})
  
getFirstItem();
getSecondItem();
getThirdItem();
getFourthItem();
getFifthItem();
getSixthItem();


