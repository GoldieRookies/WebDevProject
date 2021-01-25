class Person {
  species: "Human",
  constructor(name) {
    this.Name = name;
  }
}
var person = {
  species: "Hello",
  function(name) {
    this.Name = name;
  }
}
person p1 = new person("Hello");
console.log(p1.Name);
Person p2 = new Person("Hello");
console.log(p2.Name);
//my attempt at explaining myself for doing this
