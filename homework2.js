// ### Task 1: MathOperations Class
// **Description:**
// Create a class `MathOperations` with the following methods:
// - **add(x, y):** returns the sum of two numbers.
// - **subtract(x, y):** returns the difference of two numbers.
// - **multiply(x, y):** returns the product of two numbers.
// - **divide(x, y):** returns the result of division (consider division by zero).
class MathOperations {
    add(x, y) {
        return x + y;
    }
    subtract(x, y) {
        return x - y;
    }
    multiply(x, y) {
        return x * y;
    }
    divide(x, y) {
        if (y === 0) {
            return "Error: do not divide by zero";
        }
        return x / y;
    }
}
const calculator = new MathOperations();
console.log(calculator.add(10, 5)); 
console.log(calculator.subtract(10, 5)); 
console.log(calculator.multiply(10, 5)); 
console.log(calculator.divide(10, 5));  
console.log(calculator.divide(10, 0));


// **Task:**

// Write the code for the class and test its methods with arbitrary values.


// Create a function `findMax(a, b)` that returns the larger of two numbers (you may use the built-in `Math.max` function).
// Write the code for the function and test it by passing different pairs of numbers.

function findMax(a, b) {
    return Math.max(a, b);
}
console.log(findMax(0, -1));
console.log(findMax(5, 3)); 
console.log(findMax(-1, -5)); 
console.log(findMax(5, 5));

// ### Task 3: Finding the Difference Between Two Numbers
// Create a function `difference(x, y)` that returns the difference between two numbers.
// Implement the function and test it with several examples.

function difference(x, y) {
    return x - y;
}
console.log("the difference =", difference(4, 5));
console.log("the difference =", difference(8, 8));
console.log("the difference =", difference(7, 5));

// ### Task 4: Calculating the Area and Perimeter of a Square
// Create two functions:
// - **squareArea(side):** calculates the area of a square (side × side).
// - **squarePerimeter(side):** calculates the perimeter of a square (4 × side).
// **Task:**
// Write the code for these functions and test them using chosen values for the side of the square.

function squareArea(side) {
    return side * side;
}
console.log(squareArea(5));
// or: 
function squareArea(side) {
    return side ** 2;
}
console.log(squareArea(6));

// ### Task 5: Converting Seconds to Minutes
// Create a function `convertSecondsToMinutes(seconds)` that calculates the number of minutes (by dividing seconds by 60).
// Write the code for the function and test it with an arbitrary number of seconds.

function convertSecondsToMinutes(seconds) {
    return seconds / 60;
}
console.log(convertSecondsToMinutes(60));
console.log(convertSecondsToMinutes(30));
console.log(convertSecondsToMinutes(77));

// ### Task 6: Calculating Average Speed
// Create a function `averageSpeed(distance, time)` that calculates the average speed using the formula:
// speed = distance / time.
// Implement the function and test it using various values for distance and time.

function averageSpeed(distance, time) {
    return distance / time;
}
console.log(averageSpeed(100, 100));
console.log(averageSpeed(10, 60));
console.log(averageSpeed(5, 60));

// ### Task 7: Finding the Hypotenuse
// Create a function `findHypotenuse(a, b)` that calculates the hypotenuse of a right triangle using the Pythagorean theorem
// (hypotenuse = √(a² + b²)), using `Math.sqrt` to compute the square root.
// Write the code for the function and test it (for example, for values 3 and 4).

function findHypotenuse(a, b) {
    return Math.sqrt(a ** 2 + b ** 2);
}
console.log(findHypotenuse(3, 4));
console.log(findHypotenuse(2, 3));
console.log(findHypotenuse(1, 1));

// ### Task 8: Calculating the Circumference of a Circle
// Create a function `circleCircumference(radius)` that calculates the circumference of a circle using the formula:
// circumference = 2 × π × radius, using `Math.PI` for π.
// Implement the function and test it for several values of the radius.

function circleCircumference(radius) {
    return Math.PI * 2 * radius;
}
console.log(circleCircumference(0.5));
console.log(circleCircumference(0));
console.log(circleCircumference(1));

// ### Task 9: Calculating Percentages
// Create a function `calculatePercentage(total, part)` that calculates what percentage the part is of the total, using the formula:
// percentage = (part / total) × 100.
// Write the code for the function and test it using different values for total and part.

function calculatePercentage(total, part) {
    return (part / total) * 100;
}
console.log(calculatePercentage(4, 2));
console.log(calculatePercentage(1, 1));
console.log(calculatePercentage(90, 30));
console.log(calculatePercentage(2, 4));

// ### Task 10: Converting Temperatures Between Celsius and Fahrenheit
// Create two functions:
// - **celsiusToFahrenheit(celsius):** converts a temperature from Celsius to Fahrenheit using the formula F = C × 9/5 + 32.
// - **fahrenheitToCelsius(fahrenheit):** converts a temperature from Fahrenheit to Celsius using the formula C = (F − 32) × 5/9.
// Implement both functions and test them with several temperature values.

function celsiusToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}
function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5 / 9)
}
console.log(celsiusToFahrenheit(100));
console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(-10));
console.log(fahrenheitToCelsius(100));
console.log(fahrenheitToCelsius(0));
console.log(fahrenheitToCelsius(60));