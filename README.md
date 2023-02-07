# _Cookman's Pizzaria_

#### By _**Charles Cookman**_

#### _Practice website for ordering pizza._

## Technologies Used

* _Coding languages: HTML, CSS, and Javascript_
* _Git and GitHub_
* _Visual Studio Code_


## Description

_This page is a practice project for placing an order using an object and using that to calculate the cost of a pizza order._

## Setup/Installation Requirements

* _To view the github repository visit: https://github.com/CharlesBCookman/Pizzaria_
* __
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Known Bugs

* _Any known issues_
* _should go here_

## License

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

Copyright (c) _date_ _author name(s)_

MakePizza()

Describe: This constructor will make a pizza object that has the key value for pizza Size/type, Sauce, Veggies/Fruits, Meats, Seasonings and cost(yet to be calculated).

TEST: Make an object that takes values of of a pizza and stores into an object.

Code: new MakePizza("Medium", "Marinara", "Mozzarella", "Olive", "Pepperoni", "Oregano", 0)

Expected Result: MakePizza{sizeType: 'Medium', sauce: 'Marinara', cheese: 'Mozzarella', veggies: 'Olive', meats: 'Pepperoni', seasonings: 'Marinara' pizzaCost: 0}

------------------------------------------------

pizzaSize()

Describe: Used to make the value of the pizza size that will be used to calculate the cost of ingredients. 7 for small, 11 for medium, 14 for large, and 17 for extra large. 

TEST: Set pizza size and set initial cost of pizza.

Code: sizeAndType("Small")

Expected Result: 7

TEST: Set pizza size and set initial cost of pizza.

Code: sizeAndType("Medium")

Expected Result: 11

----------------------------------------------

pizzaCheesesAndVeggies()

Describe: Used to determine cost of just the pizza cheeses and veggies based upon pizza size. Cost is determined by number of veggies and cheese minus 2 as the first two come with the initial cost of the pizza. 1 per each additional item for small. 1.5 per additional for medium. 2 per additional for large. 2.5 for each additional for extra large.

TEST: Test small pizza with 2 cheeses cost.

Code: pizzaCheesesAndVeggies("Small", ["Mozzarella", "Cheddar"], [])

Expected Result: 0

TEST: Medium pizza with 2 cheeses and 2 veggies cost.

Code: pizzaCheeses("Medium", ["Mozzarella", "Cheddar"], ["Onion, "Olive"])

Expected Result: 3

------------------------------------------------

pizzaMeats()

Describe: Used to calculate cost of meat toppings on pizza based on pizza size. 1.5 for small, 2 for medium, 2.75 for large, and 3.50 for xlarge.

TEST: Check meat cost for large 2 meat pizza

Code: pizzaMeats("Large", ["Pepperoni", "Ham"])

Expected Result: 5.50

-------------------------------------

pizzaSeasonings()

Describe: Used to calculate cost of added seasonings 1st is free, 0.50 for each after that.

TEST: Check cost of 1 seasoing

Code: pizzaSeasonings(["Paprika"])

Expected Result: 0

TEST: Check cost of 3 seasonings

Code: pizzaSeasonings(["Paprika", "Italian Herbs", "Oregano"])

Expected Result: 1

-------------------------------------------------

setCost()

Describe: This function will take the toppings cost place them as the cost key value for the pizza object.

Test: Calculates cost of each pizza size and toppings and set cost into key value and then returns the cost.

Code:

addToOrder()

Describe: This function will collect pizza objects and put them into an array.

Test: 

Code:

Expected Result:

cost