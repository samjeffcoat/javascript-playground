var orderCode = 'GSX-1169';
console.log(orderCode.substr(4));
let newCode = orderCode.replace(/GSX-/i, '');

console.log(newCode);
console.log(window.location.pathname.split('/'));

var greeting = 'hello';
console.log(greeting.toUpperCase());

var part1 = 'JavaScript';
var part2 = 'is';
var part3 = 'cool';
const message = part1 + ' ' + part2 + ' ' + part3;
console.log(message.toUpperCase());
