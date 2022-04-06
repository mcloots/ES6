import { Animal } from "./animal.js";

//Extend from base class
export class Cat extends Animal {
    constructor(type, legs, tail) {
        //constructor van base class
        super(type, legs);
        this.tail = tail;
    }

    //Deze functie overschrijft (overrides) de makeNoise functie van de base: zelfde naam en parameters
    makeNoise(sound = "Meow") {
        console.log(sound);
    }
}