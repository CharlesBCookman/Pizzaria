function MakePizza(size, sauce, cheeses, veggies, meats, seasonings, pizzaID){
  this.size = size;
  this.sauce = sauce;
  this.cheeses = cheeses;
  this.veggies = veggies;
  this.meats = meats;
  this.seasonings = seasonings;
  this.pizzaCost = 0;
  this.pizzaID = pizzaID;

  MakePizza.prototype.costCalculator = () => {
    if(size === "Small"){
      this.pizzaCost += (7 + cheeses.length + veggies.length + (meats.length * 1.5) ;
    } else if(size === "Medium"){
      return 11;
    } else if(size === "Large"){
      return 14;
    } else if(size === "Xlarge"){
      return 17;
    } 
  }
}

function pizzaSize(size) {
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

function pizzaCheesesAndVeggies(size, cheeses, veggies) {
  console.log(size);
  console.log(cheeses);
  console.log(veggies);
  let cost = 0;
  let toppingsNumber = 0;
  if(size === "Small"){
    toppingsNumber = cheeses.length + veggies.length
    if(toppingsNumber < 3){
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

function pizzaMeats(size, meats){
  let cost = 0;
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

function pizzaSeasonings(seasonings){
  let cost = 0;
  if(seasonings.length > 1){
    cost = seasonings.length * (0.5);
    return cost;
  }
  return cost;
}

let cheesesArray = () => {
  let array = [];
  let elements = document.querySelectorAll('input[name="cheeses"]:checked');
  console.log(elements);
  if(elements !== null){
    return array;
  }
  elements.forEach((element) => {
    array.push(element.value);
  })
  return array;
}

let veggiesArray = () => {
  let array = [];
  let elements = document.querySelectorAll('input[name="veggies-fruits"]:checked');
  console.log(elements);
  if(elements !== null){
    return array;
  }
  elements.forEach((element) => {
    array.push(element.value);
  })
  return array;
}

let meatsArray = () => {
  let array = [];
  let elements = document.querySelectorAll('input[name="meats"]:checked');
  if(elements !== null){
    return array;
  }
  elements.forEach((element) => {
    array.push(element.value);
  })
  console.log(array);
  return array;
}

let seasoningsArray = () => {
  let array = [];
  elements = document.querySelectorAll('input[name="seasonings"]:checked');
  if(elements !== null){
  }
  elements.forEach((element) => {
    array.push(element.value);
  })
  console.log(array);
  return array;
}



window.addEventListener("load", function(){
  console.log("page loading");
  let totalOrder = [];
  let size = document.querySelector('input[name="pizza-size"]:checked');
  let pizzaCost = 0;
  let pizzaID = 0;
  showSize = document.querySelector("#selected-size");
  showSize.innerText = size.value;
  const selectSize = document.querySelector("#sizes");
  selectSize.onclick = function(){
    let size = document.querySelector('input[name="pizza-size"]:checked');
    showSize.innerText = size.value;
  };
  const addToOrder = document.querySelector("#add-to-order");
  let total = document.querySelector("#order-total")
  console.log(pizzaCost);
  addToOrder.addEventListener("click", function(event) { 
    let cheeses = cheesesArray();
    let veggies = veggiesArray();
    let meats = meatsArray();
    let seasonings = seasoningsArray();
    let sauce = document.querySelector('input[name="sauces"]:checked'); 
    console.log("button press")
    console.log(pizzaCost);
    let size = document.querySelector('input[name="pizza-size"]:checked');
    event.preventDefault();
    pizzaID = pizzaID++;
    totalOrder.push(new MakePizza(size.value, sauce.value, cheeses.value, veggies.value, meats.value, seasonings.value, pizzaCost, pizzaID));
    pizzaCost = setPizzaCost(totalOrder);
    total.innerText = ("$ " + parseInt(pizzaCost));
    console.log(totalOrder);
  });
});

// function setPizzaCost(nodeArray){
//   let pizzaCost = 0
//   let size = "";
//   let cheeses = [];
//   let veggies = [];
//   let meats = [];
//   let seasonings = [];
//   nodeArray.forEach(element => {
//     let size = element.size;
//     let cheeses = element.cheeses;
//     let veggies = element.veggies;
//     let meats = element.meats;
//     let seasonings = element.seasonings;
//   });
//     pizzaCost += (pizzaSize(size) + pizzaCheesesAndVeggies(size, cheeses, veggies) + pizzaMeats(size, meats) + pizzaSeasonings(seasonings));
//     element.pizzaCost = pizzaCost;

//   return pizzaCost;
// }