
import inquirer from 'inquirer';
const fruits = [
    { name: 'Apple', price: 2 },
    { name: 'Banana', price: 1 },
    { name: 'Orange', price: 3 },
];
const vegetables = [
    { name: 'Tomato', price: 1 },
    { name: 'Carrot', price: 2 },
    { name: 'Potato', price: 0.5 },
];
const groceries = [
    { name: 'Milk', price: 3 },
    { name: 'Bread', price: 2 },
    { name: 'Eggs', price: 4 },
];
let cart = [];
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
            console.log('welocome to the fruits market');
            buyFruits();
        }
        else if (answers.department === 'Vegetables') {
            console.log('welocome to the Vegetables');
            buyVegetables();
        }
        else {
            buyGroceries();
            console.log('welocome to the buying Groceries');
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
            choices: vegetables.map((vegetables) => vegetables.name),
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
