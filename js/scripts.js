class MakePizza{
    constructor(pizzaID, showAndCollect) {
  this.size = showAndCollect.setSize();
  this.sauce = showAndCollect.setSauce();
  this.cheeses = showAndCollect.nodeListValues(document.querySelectorAll('input[name="cheeses"]:checked'), showAndCollect.cheesesDisplay);
  this.nonmeats = showAndCollect.nodeListValues(document.querySelectorAll('input[name="nonmeats"]:checked'), showAndCollect.nonmeatsDisplay);
  this.meats = showAndCollect.nodeListValues(document.querySelectorAll('input[name="meats"]:checked'), showAndCollect.meatsDisplay);
  this.seasonings = showAndCollect.nodeListValues(document.querySelectorAll('input[name="seasonings"]:checked'), showAndCollect.seasoningsDisplay);
  this.pizzaID = pizzaID;
  this.name = document.querySelector('#pizza-name').innerText;
  this.pizzaCost = 0;
  }

  setPizzaCost() {
  if(this.size === "Small"){
      this.pizzaCost = ( 7 + (this.cheeses.length - 1 + this.nonmeats.length) + (this.meats.length * 1.5 ));
  } else if(this.size === "Medium"){
      this.pizzaCost = (11 + (this.cheeses.length - 1)  * 1.5 + (this.nonmeats.length * 1.5) + (this.meats.length * 2));
  } else if(this.size === "Large"){
      this.pizzaCost = (14 + (this.cheeses.length - 1) * 2 + (this.nonmeats.length * 2) + (this.meats.length * 2.75));
  } else if(this.size === "Xlarge"){
      this.pizzaCost = (17 + (this.cheeses.length - 1) * 2.5 + (this.nonmeats.length * 2.5) + (this.meats.length * 3.5));
    }
  } 
  
}


class ShowAndCollect{
  constructor() {
    this.sizeDisplay = document.querySelector('#selected-size');
    this.sauceDisplay = document.querySelector('#selected-sauce');
    this.cheesesDisplay = document.querySelector('#selected-cheeses');
    this.nonmeatsDisplay = document.querySelector('#selected-nonmeats');
    this.meatsDisplay = document.querySelector('#selected-meats');
    this.seasoningsDisplay = document.querySelector('#selected-seasonings');
  }

  setSize() {
    let size = document.querySelector('input[name="pizza-size"]:checked');
    this.sizeDisplay.innerText = size.value;
    return size.value;
  }

  setSauce() {
    let sauce = document.querySelector('input[name="sauces"]:checked');
    this.sauceDisplay.innerText = sauce.value;
    return sauce.value;
  }

  nodeListValues(nodeList, displayElement) {
    let array = [];
    nodeList.forEach((element) =>{
      array.push(element.value);
    });
    displayElement.innerText = (array.length + " selected.")
    return array
  }

  setTotalCost(totalOrder) {
    let cost = 0;
    totalOrder.forEach((element) => {
      cost += element.totalCost;
    });
    return cost;
  }
}

window.addEventListener("load", function(){
  console.log("javascript is working");
  const selectSize = document.querySelector("#sizes");
  const selectSauce = document.querySelector("#sauces");
  const selectCheeses = document.querySelector("#cheeses");
  const selectNonmeats = document.querySelector('#nonmeats');
  const selectMeats = document.querySelector('#meats');
  const selectSeasonings = document.querySelector('#seasonings');
  const addToOrder = document.querySelector('#add-to-order');
  let totalOrder = [];
  let pizzaID = 0;
  let showAndCollect = new ShowAndCollect();
  showAndCollect.setSize();
  selectSize.onclick = function(){
    showAndCollect.setSize();
  };
  selectSauce.onclick = function(){
    showAndCollect.setSauce();
  }
  selectCheeses.onclick = function(){
    showAndCollect.nodeListValues(document.querySelectorAll('input[name="cheeses"]:checked'), showAndCollect.cheesesDisplay);
  }
  selectNonmeats.onclick = function(){
    showAndCollect.nodeListValues(document.querySelectorAll('input[name="nonmeats"]:checked'), showAndCollect.nonmeatsDisplay);
  }
  selectMeats.onclick = function(){
    showAndCollect.nodeListValues(document.querySelectorAll('input[name="meats"]:checked'), showAndCollect.meatsDisplay);
  }
  selectSeasonings.onclick = function(){
    showAndCollect.nodeListValues(document.querySelectorAll('input[name="seasonings"]:checked'), showAndCollect.seasoningsDisplay);
  }
  addToOrder.onclick = (event) => {
    event.preventDefault()
    pizzaID = pizzaID ++;
    let pizza = new MakePizza(pizzaID, showAndCollect);
    pizza.setPizzaCost();
    console.log(pizza.pizzaCost);
    totalOrder.push(pizza);
    document.querySelector('#order-total').innerText = "$" + pizza.pizzaCost ;
  }
})