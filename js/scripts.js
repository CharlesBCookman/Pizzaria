let pizzaSize = function(size) {
  if(size === "Small"){
    return 7;
  } else if(size === "Medium"){
    return 11;
  } else if(size === "Large"){
    return 14;
  } else if(size === "Xlarge"){
    return 17;
  } 
}

let pizzaCheesesAndVeggies = function(size, cheeses, veggies) {
  console.log(size);
  console.log(cheeses);
  console.log(veggies);
  let cost = 0;
  let toppingsNumber = 0;
  if(size === "Small"){
    toppingsNumber = cheeses.length + veggies.length
    if(toppingsNumber <= 2){
      return 0;
    } else {
      cost = (toppingsNumber - 2) * 1;
    }
  } else if(size === "Medium"){
    toppingsNumber = cheeses.length + veggies.length
    if(toppingsNumber <= 2){
      return 0;
    } else {
      cost = (toppingsNumber - 2) * 1.5
      return cost;
    }
  } else if(size === "Large"){
    toppingsNumber = cheeses.length + veggies.length
    if(toppingsNumber <= 2){
      return 0;
    } else {
      cost = (toppingsNumber - 2) * 2
      return cost;
    }
  } else if(size === "Xlarge"){
    toppingsNumber = cheeses.length + veggies.length
    if(toppingsNumber <= 2){
      return 0;
    } else {
      cost = (toppingsNumber - 2) * 2.5
      return cost;
    }
  }
  console.log("check cheese and veggies");
}

let pizzaMeats = function(size, meats){
  cost = 0;
  if(size === "Small"){
    cost = meats.length * 1.5
    return cost;
  } else if(size === "Medium"){
    cost = meats.length * 2
    return cost;
  } else if(size === "Large"){
    cost = meats.length * 2.75
    return cost;
  } else if(size === "Xlarge"){
    cost = meats.length * 3.5
    return cost;
  } else
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
    pizzaCost = pizzaSize(size) + pizzaCheesesAndVeggies(size, cheeses, veggies) + pizzaMeats(size, meats) + pizzaSeasonings(seasonings);
    element.pizzaCost = pizzaCost;
    return pizzaCost;
  });
}

let cheesesArray = function(){
  let array = [];
  elements = document.querySelectorAll('input[name="cheeses"]:checked');
  elements.forEach((element) => {
    element.push(element);
  })
  return array;
}

let veggiesArray = function(){
  let array = [];
  elements = document.querySelectorAll('input[name="veggies-fruits"]:checked');
  elements.forEach((element) => {
    element.push(element);
  })
  return array;
}

let meatsArray = function(){
  let array = [];
  elements = document.querySelectorAll('input[name="meats"]:checked');
  elements.forEach((element) => {
    element.push(element);
  })
  return array;
}

seasoningsArray = function(){
  let array = [];
  elements = document.querySelectorAll('input[name="seasonings"]:checked');
  elements.forEach((element) => {
    element.push(element);
  })
  return array;
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
  let size = document.querySelector('input[name="pizza-size"]:checked');
  let sauce = document.querySelector('input[name="sauces"]:checked');
  let cheeses = cheesesArray();
  let veggies = veggiesArray();
  let meats = meatsArray();
  let seasonings = seasoningsArray();
  let pizzaCost = 0;
  let pizzaID = 0;
  const selectSize = document.querySelector("#sizes");
  showSize = document.querySelector("#selected-size");
  selectSize.onclick = function(){
        showSize.innerText = size.value;
  }
  const addToOrder = document.querySelector("#add-to-order");
  let total = document.querySelector("#order-total")
  console.log(pizzaCost);
  addToOrder.onclick = function(){
    pizzaID = pizzaID++;
    totalOrder.push(new MakePizza(size.value, sauce.value, cheeses.value, veggies.value, meats.value, seasonings.value, pizzaCost, pizzaID));
    pizzaCost = setPizzaCost(totalOrder);
    total.innerText = ("$ " + parseInt(pizzaCost));
    console.log(totalOrder);
  }
}