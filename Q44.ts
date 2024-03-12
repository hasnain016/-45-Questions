// 44. Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.


// solution =>

function makeSandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("  - No items selected. Please add some items to your sandwich.");
    } else {
        console.log("  - Your sandwich contains:");
        items.forEach(item => console.log(`    - ${item}`));
    }
    console.log();
}

// Call the function three times with a different number of arguments each time
makeSandwich("Ham", "Cheese", "Lettuce", "Tomato");
makeSandwich("Turkey", "Swiss Cheese", "Mayonnaise");
makeSandwich("Peanut Butter", "Jelly");
