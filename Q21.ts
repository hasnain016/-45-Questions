// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// solution=>

// Define a TypeScript interface for a car
interface Car {
    make: string;
    model: string;
    year: number;
    color: string;
    fuelType: string;
}

// Create an array of car objects
let cars: Car[] = [
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
for (let car of cars) {
    console.log(`Make: ${car.make}`);
    console.log(`Model: ${car.model}`);
    console.log(`Year: ${car.year}`);
    console.log(`Color: ${car.color}`);
    console.log(`Fuel Type: ${car.fuelType}`);
    console.log("-----------------------------------");
}
 