const findMax = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  console.log(max);
};

findMax([12, 3, 43, 543, 65]);
findMax([32, 535, 5321, 54, 5]);
// 543
// 5321


class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHi() {
    console.log(`Hi,I'm ${this.name}, and I'm ${this.age} years old.`);
  }
}
const person = new Person('John', 30);
person.sayHi();
// Hi, I'm John, and I'm 30 years old.