// 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs
// to produce an index error. Make sure you correct the error before closing the program.
// solution=>
var fruite = ["Apple", "Banana", "Orange", "Graps"];
// Access an index that is out of bounds (causing an error is(undefine) 
console.log(fruite[4]);
// To correct the error, let's access an index within the bounds
console.log(fruite[2]);
