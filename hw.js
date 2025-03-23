// **Task:**
// Write the code for the class and test its methods with arbitrary values.
// Create a function `findMax(a, b)` that returns the larger of two numbers
// (you may use the built-in `Math.max` function).
// Write the code for the function and test it by passing different pairs of numbers.

function findMax(a, b) {
  return  Math.max(a, b);
}
console.log(findMax(0, 1));
console.log(findMax(10, 1));
console.log(findMax(-1, 1));
console.log(findMax(0, 0));

// ### Task 3: Finding the Difference Between Two Numbers
// Create a function `difference(x, y)` that returns the difference between two numbers.
// Implement the function and test it with several examples.

function difference(x, y) {
    return x - y;
}
console.log(difference(5, 2));
console.log(difference(1, 2));
console.log(difference(0, 2));
console.log(difference(0, 0));

// ### Task 4: Calculating the Area and Perimeter of a Square
// Create two functions:
// - **squareArea(side):** calculates the area of a square (side × side).
// - **squarePerimeter(side):** calculates the perimeter of a square (4 × side).
// **Task:**
// Write the code for these functions and test them using chosen values for the side of the square.

function squareArea(side) {
    return side * side;
}
function squarePerimeter(side) {
    return side * 4;
}
console.log(squareArea(5));
console.log(squarePerimeter(5));

// ### Task 5: Converting Seconds to Minutes
// Create a function `convertSecondsToMinutes(seconds)` that calculates the number of minutes (by dividing seconds by 60).
// Write the code for the function and test it with an arbitrary number of seconds.

function convertSecondsToMinutes(seconds) {
    return seconds / 60;
}
console.log(convertSecondsToMinutes(60));
console.log(convertSecondsToMinutes(120));
console.log(convertSecondsToMinutes(30));

// ### Task 6: Calculating Average Speed
// Create a function `averageSpeed(distance, time)` that calculates the average speed using the formula:
// speed = distance / time.
// Implement the function and test it using various values for distance and time.

function averageSpeed(distance, time) {
   return distance / time;
}
console.log(averageSpeed(100, 40));
console.log(averageSpeed(100, 50));
console.log(averageSpeed(100, 1));