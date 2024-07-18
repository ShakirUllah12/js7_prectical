let inputString = prompt("Enter a string:");
let index = parseInt(prompt("Enter an index to retrieve character:"));

if (index >= 0 && index < inputString.length) {
    let character = inputString.charAt(index);
    console.log(`Character at index ${index} in "${inputString}" is "${character}".`);
} else {
    console.log(`Index ${index} is out of bounds for "${inputString}".`);
}
// Replace Substring:

let inputString = prompt("Enter a string:");
let substring = prompt("Enter a substring to search for:");
let replacement = prompt("Enter a replacement substring:");

let modifiedString = inputString.replace(new RegExp(substring, 'g'), replacement);
console.log(`Modified string: ${modifiedString}`);
// Round to Nearest Whole Number:

let number = parseFloat(prompt("Enter a number:"));
let roundedNumber = Math.round(number);
console.log(`Rounded number: ${roundedNumber}`);
// Ceiling of a Number:

let number = parseFloat(prompt("Enter a number:"));
let ceilNumber = Math.ceil(number);
console.log(`Ceiling of ${number} is ${ceilNumber}.`);
// Flooring of a Number:

let number = parseFloat(prompt("Enter a number:"));
let floorNumber = Math.floor(number);
console.log(`Flooring of ${number} is ${floorNumber}.`);