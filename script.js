//Pet Store Class

class Pet 
{
    constructor(name, type, weight, price)
    {
        this.name = name;
        this.type = type
        this.weight = weight;
        this.price = price;
    }

    getInfo()
    {
        return "Hi!, My name is " + this.name + ", I'm a " + this.type + ". I weigh " + this.weight + " pounds and cost $" + this.price + "."
    }
}

//Inheritance Concept

class Dog extends Pet
{
    bark()
    {
        return "No other pet can do this except me: I bark bark bark!"
    }
}

class Cat extends Pet
{
    miaouh()
    {
        return "No other pet can do this except me: I miaouh miaouh miaouh!"
    }
}

//Polymorphism - Function Overriding Concept

class Parrot extends Pet
{
    constructor(name, type, weight, price, food)
    {
        super(name, type, weight, price);
        this.food = food;
    }

    mimic()
    {
        return "No other pet can do this except me: I mimic mimic mimic!"
    }

    getInfo()
    {
        return "Hi!, My name is " + this.name + ", I'm a " + this.type + ", My favorite food is "
        + this.food + ". I weigh " + this.weight + " pounds and cost $" + this.price + "."
    }
}

const doggy = new Dog("Scooby-Doo", "Dog", 60, 600); 
const pussycat = new Cat("Tommy", "Cat", 30, 300); 
const parrotty = new Parrot("Wisey", "Parrot", 10, 100, "Peanut"); 

console.log("-----------------------------------------------------------------------------")
console.log(doggy.getInfo());
console.log(doggy.bark());
console.log("-----------------------------------------------------------------------------")
console.log(pussycat.getInfo());
console.log(pussycat.miaouh());
console.log("-----------------------------------------------------------------------------")
console.log(parrotty.getInfo());
console.log(parrotty.mimic());
console.log("-----------------------------------------------------------------------------")
