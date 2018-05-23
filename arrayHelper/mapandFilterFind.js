//Map
const arr = [{name:'James',age:18}, {name:'Alice',age:20}]

var James = arr.map((x) => x.name);

console.log(James);


//Filter

const arr1 = [{name:'James',age:18}, {name:'Alice',age:20}, {name:'Arvind',age:24}, {name:'Amanda',age:32}]

var filteredNames = arr1.filter((x) => x.age > 25);
console.log(filteredNames);

//Find

const arr2 = [{name:'James',age:18}, {name:'Alice',age:20}, {name:'Arvind',age:24}, {name:'Amanda',age:32}]

var foundElement = arr2.find((x) => x.name == "Arvind");
console.log(foundElement);
