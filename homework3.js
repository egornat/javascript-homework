// ### Task 1: Object Literals and Properties

// Topic: Object literals and properties

// Task:

// - Create an object person with three properties:
//     - name – a string (for example, "Alice")
//     - age – a number (for example, 30)
//     - city – a string (for example, "Prague")
// - Output the created object to the console.

let person = {
    name: "Alice",
    age: 30,
    city: "Prague"
};
console.log(person);

// ### Task 2: Square Bracket Notation

// Topic: Accessing properties using square brackets

// Task:

// - Create an object user with a property whose name contains a space, for example:
//     - "favorite color" – a string (for example, "blue")
// - Output the value of this property to the console using square brackets.

let user = {
"favorite color": "blue"
};
console.log(user["favorite color"]);

// ### Task 3: Property from a Variable

// Topic: Computed properties (property name stored in a variable)

// Task:

// 1. Create a variable key and assign it a string value, for example "age".
// 2. Create an empty object user.
// 3. Using square brackets and the variable key, add a property to the object with the name stored in key and assign it a value, for example, 25.
// 4. Output the object to the console.

let key = "age";
let user2 = {};
user2[key] = 25;
console.log(user2);

// ### ask 4: Restrictions on Property Names

// Topic: Restrictions and peculiarities in naming properties

// Task:

// - Create an object item with two properties:
//     - One property with a name that is not a valid identifier (for example, "1stPlace") with the value "Gold".
//     - A second property named price with a numeric value (for example, 100).
// - Output both properties, using square brackets to access the property with an invalid identifier.

const item = {
    "1stPlace": "Gold",
    price: 100         
};

console.log(item["1stPlace"]); 
console.log(item.price);       

// ### Task 5: Checking for Property Existence (the "in" Operator)

// Topic: The in operator

// Task:

// 1. Create an object car with two properties:
//     - model: "Toyota"
//     - year: 2020
// 2. Using the in operator, check if the property "color" exists in the car object.
// 3. Output the result of the check (true/false) to the console.

const car = {
    model: "Toyota",
    year: 2020
};
console.log("color" in car);
console.log("year" in car);

// ### Task 6: for..in Loop

// Topic: Iterating over object properties

// Task:

// - Create an object book with three properties:
//     - title: "JavaScript Basics"
//     - author: "John Doe"
//     - pages: 250
// - Using a for..in loop, output each property and its value to the console

const book = {
    title: "JavaScript Basics",
    author: "John Doe",
    pages: 250
};
for (let key in book) {
    console.log(key + ": " + book[key]);
}