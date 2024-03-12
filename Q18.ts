let visitingPlaces:string[] = ["Pakistan", "India", "UAE", "Canada", "Chaina"];
console.log("original order", visitingPlaces);
console.log(" Alphabetical order",[...visitingPlaces].sort());

console.log("original order",visitingPlaces);
console.log("reverse alphabetical order",[...visitingPlaces].sort().reverse());
console.log("original order",visitingPlaces);

visitingPlaces.reverse();
console.log("reversed order",visitingPlaces);


visitingPlaces.reverse();
console.log("orginal order",visitingPlaces);
console.log("sorted in alphabeical order",visitingPlaces.sort());
console.log("sorted in reversed alphabeical order",visitingPlaces.reverse());