// Scenario 1 - Buying Groceries
function buyGroceries(choice) {
    let totalBill = 0;
    if (choice === 'fruits') {
        console.log('Available fruits: Apple, Banana, Orange');
        const fruitChoice = 'Apple'; // Assume the user chooses Apple
        const fruitPrice = 2.5;
        totalBill += fruitPrice;
        console.log(`Added ${fruitChoice} to your cart. Price: $${fruitPrice}`);
    }
    else if (choice === 'vegetables') {
        console.log('Available vegetables: Carrot, Broccoli, Spinach');
        const vegChoice = 'Carrot'; // Assume the user chooses Carrot
        const vegPrice = 1.5;
        totalBill += vegPrice;
        console.log(`Added ${vegChoice} to your cart. Price: $${vegPrice}`);
    }
    else {
        console.log('Invalid choice. Please choose fruits or vegetables.');
    }
    return totalBill;
}
// Scenario 2 - Checking Discounts
function applyDiscount(totalBill) {
    let discountedTotal = totalBill;
    if (totalBill > 10) {
        const discountPercentage = 0.1; // 10% discount for bills above $10
        discountedTotal = totalBill - totalBill * discountPercentage;
        console.log(`You get a 10% discount! New total: $${discountedTotal}`);
    }
    return discountedTotal;
}
// Scenario 3 - Checkout Process
function checkoutProcess(paymentMethod) {
    const paymentOptions = ['Credit Card', 'Debit Card', 'Cash'];
    let isValidPayment = false;
    for (let i = 0; i < paymentOptions.length; i++) {
        console.log(`[${i + 1}] ${paymentOptions[i]}`);
    }
    while (!isValidPayment) {
        const selectedOption = 2; // Assume the user chooses Debit Card
        if (selectedOption >= 1 && selectedOption <= paymentOptions.length) {
            console.log(`You have chosen ${paymentOptions[selectedOption - 1]} for payment. Thank you!`);
            isValidPayment = true;
        }
        else {
            console.log('Invalid option. Please choose a valid payment method.');
        }
    }
}
// Main shopping simulation
const groceryChoice = 'fruits'; // Assume the user wants to buy fruits
const totalBill = buyGroceries(groceryChoice);
const discountedTotal = applyDiscount(totalBill);
checkoutProcess('Debit Card'); // Assume the user chooses Debit Card for payment
export {};
