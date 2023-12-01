//Add Function
function add(number1: number, number2: number): number {
  return number1 + number2;
}
//EVEN OR ODD FUNCTION
function checkEvenOrOdd(number: number): string {
  if (number % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
//CALCULATE AREA
function calculateArea(width: number, height: number): number {
  return width * height;
}
//REVERSE STRING
function reverseString(string: string): string {
  return string.split("").reverse().join("");
}
//CONVERT CELSIUS TO FAHRENHEIT FUNCTION
function convertCelsiusToFahrenheit(celsius: number): number {
  return celsius * 9/5 + 32;
}
//MAIN CALLING FUNCTION
const result = add(5, 6);//ADD result
console.log(result);
const evenOrOdd = checkEvenOrOdd(7);//Even or odd result
console.log(evenOrOdd);
const area = calculateArea(12, 8);//Area result
console.log(area); 
const reversedString = reverseString('SANA');//Reverse result
console.log(reversedString);
const fahrenheit = convertCelsiusToFahrenheit(40);//Fahrenheit result
console.log(fahrenheit);
/*
Explanation of the Code:
This code defines five functions and then calls them from a main function. Here is a breakdown of each function:

1. Add Function:

This function takes two numbers as input and returns their sum.
It uses the + operator to add the two numbers and returns the result.
2. checkEvenOrOdd Function:

This function takes a number as input and returns whether it is even or odd.
It uses the modulo operator % to check if the remainder of dividing the number by 2 is 0.
If the remainder is 0, the number is even, and the function returns "even".
Otherwise, the number is odd, and the function returns "odd".
3. calculateArea Function:

This function takes the width and height of a rectangle as input and returns its area.
It uses the multiplication operator * to calculate the area (width x height).
The result is the area of the rectangle.
4. reverseString Function:

This function takes a string as input and returns its reversed version.
It uses the split method to split the string into an array of characters.
Then, it uses the reverse method to reverse the order of the characters in the array.
Finally, it uses the join method to join the characters back into a string.
The result is the reversed version of the original string.
5. convertCelsiusToFahrenheit Function:

This function takes a temperature in Celsius as input and returns its equivalent temperature in Fahrenheit.
It uses the formula F = C * 9/5 + 32 to convert Celsius to Fahrenheit.
F represents the temperature in Fahrenheit, and C represents the temperature in Celsius.
The result is the equivalent temperature in Fahrenheit.
Main Calling Function:

This function calls each of the defined functions and prints their results to the console.
It demonstrates how to use the defined functions in practice.
This code demonstrates various mathematical and string manipulation functions in a simple and organized manner. */