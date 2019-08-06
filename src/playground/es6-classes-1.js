class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        // template string:
        return `Hi I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`;
    }

}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if(this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }

        return description;
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation() {
        return !!this.homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();

        if(this.hasHomeLocation()) {
            greeting += ` I am visiting from ${this.homeLocation}.`
        }

        return greeting;
    }
}

const me = new Student('Anais Hebert', 2, 'Computer Science');
console.log(me.getDescription());

const other = new Student();
console.log(other.getDescription());

const travel1 = new Traveller('Bob Bobby', 2, 'Calgary');
console.log(travel1.getGreeting());

const travel2 = new Traveller();
console.log(travel2.getGreeting());