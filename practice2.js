class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(`Hi, this is ${this.name}`);
  }
}

let p1 = new Person("Sagar", 26);
let p2 = new Person("Samip", 32);
