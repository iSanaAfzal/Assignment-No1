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
export {};
