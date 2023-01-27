let pizzaSize = function(size) {
  if(size === "Small"){
    return 8;
  } else if(sizeType === "Medium"){
    return 12;
  } else if(sizeType === "Large"){
    return 15;
  } else if(sizeType === "Xlarge"){
    return 18;
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
}

let pizzaSeasonings = function(seasonings){
  cost = 0;
  if(seasonings.length > 1){
    cost = seasonings.length * (0.5);
  }
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