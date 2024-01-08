class Person {
  constructor(name, age) {
    console.log("Parent Person Class Constructor");
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(`Hi, I am ${this.name}`);
  }
}
class Teacher extends Person {
  constructor(name, age, subject) {
    console.log("Teacher Class Constructor");
    super(name, age);
    this.subject = subject;
  }
}
class Student extends Person {
  constructor(name, age, marks) {
    console.log("Student Class Constructor");
    super(name, age);
    this.marks = marks;
  }
}
