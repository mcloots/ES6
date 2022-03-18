//Understand variable hoisting
//Hoisting is JavaScript's default behavior of moving declarations to the top.
//https://www.w3schools.com/js/js_hoisting.asp
//JavaScript in strict mode does not allow variables to be used if they are not declared. : use strict

// if(false) {
//     var example = 5;
// }

//Returns undefined (variable is hoisted outside the if statement)
//console.log(example);

//let = blocked scope
// if(false) {
//     let example2 = 5;
// }

//Error! example2 is not defined
//console.log(example2);

//Variables defined with let and const are hoisted to the top of the block, but not initialized.
//When to use let? With variables that should be reassignable

// const example3 = 5;
// example3 = 10; // Not possible!
// console.log(example3);

//const array kan je wel dingen toevoegen/verwijderen, maar array zelf niet meer wijzigen
const example4 = [];
example4.push(67);
console.log(example4);

//zelfde voor properties