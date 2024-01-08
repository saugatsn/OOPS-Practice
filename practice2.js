function personMaker(name, age) {
  this.name = name;
  this.age = age;
  console.log(this);
}
personMaker.prototype.talk = function () {
  console.log(`Hello, I am ${this.name}`);
};
let p1 = new personMaker("adam", 23);
let p2 = new personMaker("eve", 23);
