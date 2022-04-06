import { Animal } from "./animal.js";
import { Cat } from "./cat.js";

let cat = new Animal('Cat',4);
cat.legs = 3;

cat.makeNoise('Meow');

console.log(cat.legs);
console.log(cat.metaData);
console.log(Animal.return10());

let cat2 = new Cat('Cat','4',true);
cat2.makeNoise();