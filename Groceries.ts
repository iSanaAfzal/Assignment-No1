
import inquirer from 'inquirer';

const fruits: { name: string; price: number }[] = [
  { name: 'Apple', price: 2 },
  { name: 'Banana', price: 1 },
  { name: 'Orange', price: 3 },
];

const vegetables: { name: string; price: number }[] = [
  { name: 'Tomato', price: 1 },
  { name: 'Carrot', price: 2 },
  { name: 'Potato', price: 0.5 },
];

const groceries: { name: string; price: number }[] = [
  { name: 'Milk', price: 3 },
  { name: 'Bread', price: 2 },
  { name: 'Eggs', price: 4 },
];

let cart: { name: string; price: number }[] = [];
let totalBill = 0;

function startShopping() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'department',
        message: 'What department would you like to visit?',
        choices: ['Fruits', 'Vegetables', 'Groceries'],
      },
    ])
    .then((answers) => {
      if (answers.department === 'Fruits') {
       
        buyFruits();
        
      } else if (answers.department === 'Vegetables') {
       
        buyVegetables();
      } else {
        buyGroceries();
       
      }
    });
}

function buyFruits() {
  inquirer
    .prompt([
      {
        type: 'checkbox',
        name: 'fruits',
        message: 'Select the fruits you want to buy:',
        choices: fruits.map((fruit) => fruit.name),
      },
    ])
    .then((answers) => {
      for (const fruit of fruits) {
        if (answers.fruits.includes(fruit.name)) {
          cart.push(fruit);
          totalBill += fruit.price;
        }
      }
      checkDiscounts();
    });
}

function buyVegetables() {
    inquirer
    .prompt([
      {
        type: 'checkbox',
        name: 'vegetables',
        message: 'Select the vegetables you want to buy:',
        choices: vegetables.map((vegetables) =>vegetables.name),
      },
    ])
    .then((answers) => {
      for (const vegetable of vegetables) {
        if (answers.vegetables.includes(vegetable.name)) {
          cart.push(vegetable);
          totalBill += vegetable.price;
        }
      }
      checkDiscounts();
    });
}

function buyGroceries() {
    inquirer
    .prompt([
      {
        type: 'checkbox',
        name: 'Groceries',
        message: 'Select the Groceries you want to buy:',
        choices: groceries.map((groceries) => groceries.name),
      },
    ])
    .then((answers) => {
      for (const grocery of groceries) {
        if (answers.groceries.includes(grocery.name)) {
          cart.push(grocery);
          totalBill += grocery.price;
        }
      }
      checkDiscounts();
    });
}

function checkDiscounts() {
  if (totalBill > 10) {
    totalBill *= 0.9; // 10% discount
  }
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'paymentMethod',
        message: 'How would you like to pay?',
        choices: ['Cash', 'Credit Card', 'Debit Card'],
      },
    ])
    .then((answers) => {
      console.log('Your total bill is:', totalBill.toFixed(2));
      console.log(`Payment method: ${answers.paymentMethod}`);
    });
}


startShopping();
/*Step 1: Choose a department

The program prompts the user to choose a department: Fruits, Vegetables, or Groceries.
Let's say the user chooses Fruits.
Step 2: Select fruits

The program displays a list of available fruits with their prices.
The user can select multiple fruits using checkboxes.
Let's say the user selects Apple and Orange.
Step 3: Add fruits to cart and update bill

The program adds the chosen fruits (Apple and Orange) to the cart array.
It also updates the totalBill by adding the prices of the chosen fruits.
Step 4: Check for discounts

The program checks if the totalBill is greater than a certain amount (e.g., 10).
If it is, the program applies a discount (e.g., 10%) to the totalBill.
In this case, let's assume the totalBill is below the threshold, so no discount is applied.
Step 5: Choose payment method

The program prompts the user to choose a payment method: Cash, Credit Card, or Debit Card.
Let's say the user chooses Cash.
Step 6: Display final bill and payment details

The program displays the final bill amount, which is the sum of the prices of all chosen items.
It also displays the chosen payment method.*/



     
