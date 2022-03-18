let example1 = [1,2,3,4,5,6];
let example2 = [...example1];

//unwrapping the values of example1 into example2
//not by reference! new array instantiated (check by pushing new item to example2 and console log example1)
console.log(example1);

let spread1 = {
    firstName: 'Michaël'
};

let spread2 = {
    ...spread1
};

console.log(spread2);

//More practical examples