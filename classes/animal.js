export class Animal {
    constructor(type, legs) {
        this.type = type;
        this.legs = legs;
    }

    makeNoise(sound = 'Loud Noise') {
        console.log(sound);
    }

    //static: create a function in our class where we don't have to create an instance for to use it
    static return10() {
        return 10;
    }

    //Get method: property that only returns a value
    get metaData() {
        return `Type: ${this.type}, Legs: ${this.legs}`;
    }
}