function add(number1, number2) {
    return number1 + number2;
}
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "even";
    }
    else {
        return "odd";
    }
}
function calculateArea(width, height) {
    return width * height;
}
function reverseString(string) {
    return string.split("").reverse().join("");
}
function convertCelsiusToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}
const result = add(5, 6);
console.log(result);
const evenOrOdd = checkEvenOrOdd(7);
console.log(evenOrOdd);
const area = calculateArea(12, 8);
console.log(area);
const reversedString = reverseString('SANA');
console.log(reversedString);
const fahrenheit = convertCelsiusToFahrenheit(40);
console.log(fahrenheit);
export {};
