var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var visitingPlaces = ["Pakistan", "India", "UAE", "Canada", "Chaina"];
console.log("original order", visitingPlaces);
console.log(" Alphabetical order", __spreadArray([], visitingPlaces, true).sort());
console.log("original order", visitingPlaces);
console.log("reverse alphabetical order", __spreadArray([], visitingPlaces, true).sort().reverse());
console.log("original order", visitingPlaces);
visitingPlaces.reverse();
console.log("reversed order", visitingPlaces);
visitingPlaces.reverse();
console.log("orginal order", visitingPlaces);
console.log("sorted in alphabeical order", visitingPlaces.sort());
console.log("sorted in reversed alphabeical order", visitingPlaces.reverse());
