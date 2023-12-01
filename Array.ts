const fruits = ["apple", "banana", "orange"];

// Add new elements to the end of the array using push
fruits.push("grape", "mango");
console.log(fruits); // Output: ["apple", "banana", "orange", "grape", "mango"]

// Remove the last element from the array using pop
fruits.pop();
console.log(fruits); // Output: ["apple", "banana", "orange", "grape"]

// Remove the first element from the array using shift
fruits.shift();
console.log(fruits); // Output: ["banana", "orange", "grape"]

// Add new elements to the beginning of the array using unshift
fruits.unshift("kiwi", "pineapple");
console.log(fruits); // Output: ["kiwi", "pineapple", "banana", "orange", "grape"]
const numbers = [1, 2, 3, 4, 5, 6];

// Create a subarray by removing elements from the original array using splice
const removedSubarray = numbers.splice(2, 3); // Remove elements from index 2 (inclusive) to index 5 (exclusive)
console.log("Original array:", numbers); // Output: [1, 2]
console.log("Removed subarray:", removedSubarray); // Output: [3, 4, 5]

// Create a subarray without modifying the original array using slice
const copiedSubarray = numbers.slice(1, 4); // Copy elements from index 1 (inclusive) to index 4 (exclusive)
console.log("Original array:", numbers); // Output: [1, 2]
console.log("Copied subarray:", copiedSubarray); // Output: [2, 3]
/*Explanation:

const numbers = [1, 2, 3, 4, 5, 6];: This line defines an array named numbers containing six integer elements.
.splice removes elements from the original array and returns them as a new subarray. Here, it removes elements from index 2 (inclusive) to index 5 (exclusive), creating removedSubarray with elements 3, 4, and 5.
.slice creates a copy of a subarray without modifying the original array. Here, it copies elements from index 1 (inclusive) to index 4 (exclusive), creating copiedSubarray with elements 2 and 3.
Key Concepts:

.push: Adds elements to the end of an array.
.pop: Removes the last element from an array.
.shift: Removes the first element from an array.
.unshift: Adds elements to the beginning of an array.
.splice: Removes elements from an array and returns a subarray of the removed elements.
.slice: Creates a copy of a subarray without modifying the original array.
const: Declares a constant variable.
This code demonstrates basic array manipulation techniques in JavaScript. Remember, JavaScript arrays are dynamic and can be modified after creation. */