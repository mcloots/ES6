//Set = unique collection = iterable

const exampleSet = new Set([1,1,1,2,2,2,2,3]);

exampleSet.add(5);
//Delete returns a boolean
exampleSet.delete(1);

console.log(exampleSet.has(5));

//exampleSet.clear();

//Printen en size geeft enkel de unieke waarden terug, de dubbels worden eruit gehaald
console.log(exampleSet);
console.log(exampleSet.size);