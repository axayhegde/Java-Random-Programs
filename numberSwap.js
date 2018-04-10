var a = 5;
var b = 10;

// Without Temp variable
a = a+b;
b = a-b;
a = a - b;

console.log(a);
console.log(b);


// With XOR


a = 5;
b = 10;

console.log('A before --> ' + a);
a = a ^ b;
console.log('A after --> ' + a);
console.log('B before --> ' + b);
b = a ^ b;
console.log('B after --> ' + b);
console.log('A final before --> ' + a);
a = a ^ b;
console.log('A final after --> ' + a);
