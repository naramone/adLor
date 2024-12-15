function getName(person) {
  return person.name;
}

var person = { name: 'John' };

var result = getName.call(person);
console.log(result); // 'John'

var anotherPerson = { name: 'Jane' };
result = getName.call(anotherPerson);
console.log(result); // 'Jane'
