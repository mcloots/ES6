let incomes = [1254,1450,1782]
let total = 0;

//each element in incomes (iterables)
for(const income of incomes) {
    total += income;
}

console.log(total);

//string = iterable
let fullName = 'Michaël Cloots';
for(const char of fullName){
    console.log(char);
}

//challenge
let incomes2 = [1254,1450,1782]
let total2 = 0;

//what happens if we add number in for of loop?
//value in array doesn't change, for of loop is designed to iterate, not to set or update values of iterable
for(let income of incomes2) {
    income += 500;
}

console.log(incomes2);