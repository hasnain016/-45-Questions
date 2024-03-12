// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

// solution=>

let fruit1 = "apple";
let  color1 = "Black";
let age1 = 25;
let temperature1= 32;
let isRaining1 = true;
let number1 = [1,2,3,4,5,6,7,8,9];
let weekdays1 = ["monday","tuesday","wednesday","thursday","friday","saturday"];

// Tests for equality and inequality with strings
console.log("Tests for equality and inequality with strings");
console.log("Is fruit === 'apple' ? I predicd True");
console.log(fruit==='apple');

console.log("Is color !== 'blue' ? I predict True.");
console.log(color!=='blue');

// Tests using the lower case function
console.log("Tests using the lower case function");
console.log("is 'HELLO' lowercase 'hello'? I predict True.");
console.log('HELLO'.toLowerCase()==='hello');

console.log("Is'HELLO' lowercase 'HELLO'? I predict falase ");
console.log('HELLO'.toLowerCase()!=='hello');

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Numarical tests:");
console.log("Is age === 25 ? I predict true");
console.log(age === 25);

console.log("Is Temprature > 25 ? I predcit True");
console.log(temperature > 25);

console.log("is age < 25 ? I predict False");
console.log(age < 25);

console.log("Is temprature >= 32 ? I predict True");
console.log(temperature >= 32);

console.log("Is age < 20 ? I predict false");
console.log(age < 20);

// Tests using "and" and "or" operators
console.log("Tests using 'and' and 'or' operators");
console.log(" Is age > 20 && temprature < 39 ? I predict True");
console.log(age === 20 && temperature < 39 );

console.log(" Is age > 20 || temprature < 39 ? I predict True ");
console.log(age === 20 || temperature < 39);

console.log("Is age > 30 and temprature is less then 30 ? I predict false");
console.log(age > 30 && temperature < 30);

// Test whether an item is in an array
console.log("Tests whether an item is in an array:");
console.log(" Is  6 a number array ? I predict True ");
console.log(number[5]=== 6);

console.log("Is sunday a weekdays arry ? I predict false");
console.log(weekdays[1]==='sunday');

// Test whether an item is not in an array
console.log("Tests whether an item is in an array:");
console.log(" Is  6 not a number array ? I predict True  ");
console.log(number[5]=== 6);

console.log("Is friday not a weekdays arry ? I predict false");
console.log(weekdays[5]==='sunday')