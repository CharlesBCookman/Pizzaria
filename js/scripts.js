let pizzaSize = function(size) {
  if(size === "Small"){
    return 7;
  } else if(sizeType === "Medium"){
    return 11;
  } else if(sizeType === "Large"){
    return 14;
  } else if(sizeType === "Xlarge"){
    return 17;
  } else {
    console.log("Select a pizza");
  }
}

let pizzaCheesesAndVeggies = function(size, cheeses, veggies) {
  let cost = 0;
  let toppingsNumber = 0;
  if(size === "Small"){
    toppingsNumber = cheeses.length + veggies.length
    if(toppingsNumber <= 2){
      return 0;
    } else {
      cost = (toppingsNumber - 2) * 1;
    }
  } else if(sizeType === "Medium"){
    toppingsNumber = cheeses.length + veggies.length
    if(toppingsNumber <= 2){
      return 0;
    } else {
      cost = (toppingsNumber - 2) * 1.5
      return cost;
    }
  } else if(sizeType === "Large"){
    toppingsNumber = cheeses.length + veggies.length
    if(toppingsNumber <= 2){
      return 0;
    } else {
      cost = (toppingsNumber - 2) * 2
      return cost;
    }
  } else if(sizeType === "Xlarge"){
    toppingsNumber = cheeses.length + veggies.length
    if(toppingsNumber <= 2){
      return 0;
    } else {
      cost = (toppingsNumber - 2) * 2.5
      return cost;
    }
  }
  console.log("check cheese and vaggies")
}

let pizzaMeats = function(size, meats){
  cost = 0;
  if(size === "Small"){
    cost = meats.length * 1.5
    return cost;
  } else if(sizeType === "Medium"){
    cost = meats.length * 2
    return cost;
  } else if(sizeType === "Large"){
    cost = meats.length * 2.75
    return cost;
  } else if(sizeType === "Xlarge"){
    cost = meats.length * 3.5
    return cost;
  }
  return cost;
}

let pizzaSeasonings = function(seasonings){
  cost = 0;
  if(seasonings.length > 1){
    cost = seasonings.length * (0.5);
    return cost;
  }
  return cost;
}

let setPizzaCost = function(pizzasArray){
  pizzasArray.forEach(element => {
    let size = element.size;
    let cheeses = element.cheeses;
    let veggies = element.veggies;
    let meats = element.meats;
    let seasonings = element.seasonings;
    pizzaCost = pizzaSize(size) + pizzaCheesesAndVeggies(size, cheeses, veggies) + pizzaMeats(size, meats) + pizzaSeasonings(seasonings)
    element.pizzaCost = pizzaCost;
  });
}

function MakePizza(size, sauce, cheeses, veggies, meats, seasonings, pizzaCost, pizzaID){
  this.size = size;
  this.sauce = sauce;
  this.cheeses = cheeses;
  this.veggies = veggies;
  this.meats = meats;
  this.seasonings = seasonings;
  this.pizzaCost = pizzaCost;
  this.pizzaID = pizzaID;
}

window.onload = function(){
  let totalOrder = [];
  let size = "";
  let sauce = "";
  let cheeses = [];
  let veggies = [];
  let meats = [];
  let seasonings = [];
  const selectSize = document.querySelector("#sizes");
  let sizesRadios = document.getElementsByName("pizza-size");
  showSize = document.querySelector("#selected-size");
  selectSize.onclick = function(){
    sizesRadios.forEach(element => {
      if(element.checked){
        size = element.value
        showSize.innerText = size;
      }
    });
  }
let sauceRadios = getElementsByName("sauces");
let cheesesArray = getElementsByName
let getPizzaToppings = function(){
  sauceRadios.forEach(element => {
    if(element.checked){
      sauce = element.value
    }
  });
}
  const addToOrder = document.querySelector("#add-to-order");
  addToOrder.onclick = function(){

  }
}