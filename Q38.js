// 38. Cities: Write a function called describe_city() that accepts the name of
// a city and its country. The function should print a simple sentence, such as
// Karachi is in Pakistan. Give the parameter for the country a default value.
// Call your function for three different cities, at least one of which is not in the
// default country.
// solution=>
function discribeCity(city, countery) {
    if (countery === void 0) { countery = "unknown"; }
    console.log("".concat(city, " is in ").concat(countery, "."));
}
// call the function for three different cities:
discribeCity("Karachi", "Pakistan"); // City in the default country:
discribeCity("Tokyo", "Japan"); // City not in the default country:
discribeCity("New York"); // City in the default country, country not specified:
