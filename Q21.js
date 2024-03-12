// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// Create an array of car objects
var cars = [
    {
        make: "Toyota",
        model: "Camry",
        year: 2022,
        color: "Silver",
        fuelType: "Gasoline"
    },
    {
        make: "Tesla",
        model: "Model 3",
        year: 2023,
        color: "Red",
        fuelType: "Electric"
    },
    {
        make: "Honda",
        model: "Civic",
        year: 2021,
        color: "Blue",
        fuelType: "Gasoline"
    }
];
// Print information about each car
console.log("Information about different cars:");
for (var _i = 0, cars_1 = cars; _i < cars_1.length; _i++) {
    var car = cars_1[_i];
    console.log("Make: ".concat(car.make));
    console.log("Model: ".concat(car.model));
    console.log("Year: ".concat(car.year));
    console.log("Color: ".concat(car.color));
    console.log("Fuel Type: ".concat(car.fuelType));
    console.log("-----------------------------------");
}
