// ### . Basic Operations in JavaScript
//1. Adding Two Numbers
//Create two number variables and log their sum to the console.

let a = 7;
let b = 8;
let sum = a + b;
console.log("the sum is", sum);

//2. Multiplication Function
//  Write a function that takes two numbers, multiplies them, and returns the result.

a = 4;
b = 9;
let product = a * b;
console.log("the result is", product);

//3. Simple Arithmetic Expression 
// Calculate the result of the expression (5 + 3) * 2 and print it to the console.

a = 5;
b = 3;
let c = 2;
let result1 = (a + b) * 3 / c;
console.log("the answer is", result1);

a = 17;
b = 5;
let remainder = a % b;
console.log("the ostatok posle delenia budet", remainder)


//4. Square Root Calculation
// Write a function that takes a number and returns its square root.

a = 81
let root = Math.sqrt(a); 
console.log("Square root of", a, "is", root);

//5. Even Number Check
//Write a function that checks if a number is even (use the modulo operator) and returns true or false.

function EvenNum(a, b) {
    return (a + b) % 2  
};
a = 22;
b = a + 1;

console.log("Is the sum even?:", EvenNum(a, b));

//### 2. Tasks Using if and switch
//1. Positive Number Check   
//Write an if statement that checks if a number is positive. If it is, print “Positive” to the console.

a = 11;
if (a > 0) {
    console.log(a, "is a positive number");
} else {
    console.log(a, "is a negative number")
}

//2.String Comparison
//Check if a given string equals "JavaScript". Print “Correct” if it does; otherwise, print “Incorrect”.

a = "javascrip";
if (a === "javascript") {
    console.log(a, "is written correctly")
} else {
    console.log("error,", a, "is incorrect")
}

//3. Voting Eligibility
//Write an if statement that checks if a person’s age is 18 or older. Print a message stating whether the person can vote.

let age = 17;
if (age >= 18) {
    console.log("since your age is", age, ",you can vote!")
} else {
    console.log("since your age is", age, "you cannot vote yet")
}

//4. Day of the Week with switch
//Use a switch statement to print the name of the day of the week given a number from 1 to 7 (e.g., 1 for Monday).

let dayNum = 2;
switch(dayNum) {
    case 1:
        console.log("Monday");
     break;
    case 2:
        console.log("Tuesday");
     break;
    case 3:
        console.log("Wed");
    break;
    case 4:
        console.log("Thu");
        break;
    case 5:
        console.log("Fri");
        break
    case 6:
        console.log("Sat");
        break;
    case 7:
        console.log("Sun");
        break;
    default: 
    console.log("what?")           
}

//5. Simple Calculator
//Create a function that accepts two numbers and an operator (either '+' or '-'). Use a switch statement to perform the corresponding operation and return the result.


function calculator(a, b, operator) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/": 
            return a / b;
        case "%":
            return a % b;        
        default:
        return "error in operator"  

    }
}
console.log(calculator(70, 8, "+"));
console.log(calculator(70, 8, "-"));
console.log(calculator(70, 8, "*"));
console.log(calculator(70, 8, "/"));
console.log(calculator(70, 8, "%"));
console.log(calculator(70, 8, "$"));

//### 3. Tasks Using For Loops
//1. Print Numbers 1 to 5
//Use a for loop to print the numbers from 1 to 5.

for (a = 1; a<= 5; a++) {
    console.log(a);
} 

//2. Sum of Numbers
//Write a for loop that computes the sum of numbers from 1 to 5 and logs the result.

let summa = 0;
for (a = 1; a <= 5; a++) {
    summa += a;
}
console.log(summa);

//3. Multiplication Table for 2
//Use a for loop to print the multiplication table for the number 2 (from 2×1 to 2×10).

for (a = 1; a <=10; a++) {
console.log("2 *", a, " = ", 2 * a);
}

//4. Print Even Numbers
//Use a for loop to print even numbers between 1 and 10.

for (a = 1; a <= 10; a++) {  
    if (a % 2 == 0) {  
        console.log(a);
    }
}

//5. **Factorial Calculation**
//Write a `for` loop to calculate the factorial of a small number (e.g., 4) and print the result.

let fact = 1;
for(a = 1; a <= 4; a++) {
    fact *= a;
}
console.log(fact);

//### Tasks Using Nested Loops
//**3x3 Multiplication Table**
//Use nested loops to print a multiplication table for numbers 1 to 3.

for (let a = 1; a <= 5; a++) { 
    for (let b = 1; b <= 5; b++) { 
        process.stdout.write((a * b) + '\t'); 
    }
    console.log(); // Move to the next line after each row
}

//2. **Rectangle of Stars**
//Use nested loops to print a rectangle made of `*` characters with 3 rows and 4 columns

for (let a = 1; a <= 3; a++) { 
    let rect = ''; 
    for (b = 1; b <= 4; b++) { 
        rect += '*'; 
    }
    console.log(rect); 
}

//3. **Number Triangle**
//Print a triangle where the first row is `1`, the second row is `1 2`, and the third row is `1 2 3`.

for (a = 1; a <= 3; a++) { // Outer loop for rows
    for (b = 1; b <= a; b++) { // Inner loop for numbers in each row
        process.stdout.write(b + ' '); // Print the number with a space
    }
    console.log(); // Move to the next line after each row
}