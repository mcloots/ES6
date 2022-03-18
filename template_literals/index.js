// Issue in the past

let word1 = 'Michaël';
let word2 = 'Cloots';
let num1 = 10;
let num2 = 8;

//old way
const fullName = word1 + ' ' + word2;
console.log(fullName);

//new way
const fullName2 = `${num1 * num2} ${word1} ${word2}`;
console.log(fullName2);

//new line
let example = 'Hello \n' + 'world';
let example2 = `${word1} 
${word2}
`;
document.getElementById('example').innerText = example2;