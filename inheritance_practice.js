
// Superclass

class Person {

  constructor(name, quirkyFact) {
    this.name = name;
    this.quirkyFact = quirkyFact;

  }

  bio() {

    return `My name is ${this.name} and here is my quirky fact ${this.quirkyFact}`;

  }
}

// subclass

class Student extends Person {

  enroll(cohort) {
    this.cohort = cohort;
  }

}

class Mentor extends Person {


  goOnShift() {
    this.onShift = true;

  }

  goOffShift() {
    this.onShift = false;

  }

  //super makes reference to the bio that was in the original super class
  bio() {

    return `I'm a mentor at Lighthouse Labs. ${super.bio()}`
  };

}

Person1 = new Student ('Bob','funny');

Person2 = new Mentor ('Bob', 'funny');

Person1.enroll("fall");

// console.log(Person1);

Person2.goOffShift()

console.log(Person2)

const bob = new Mentor('Bob Ross', 'I like Mountains way too much');

console.log(bob.bio());


