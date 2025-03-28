// ### Task 1: Comparison by Reference
// **Task Description:*
// - Create two objects, `obj1` and `obj2`, with identical content (for example, both equal to `{ name: "Alex" }`).
// - Compare them using the `===` operator and log the result to the console (the expected result is `false` because objects are compared by reference).
// - Then, create an object `a` and assign it to another variable `b` (e.g., `let b = a;`).
// - Change one property through variable `b` and log object `a` to demonstrate that both variables refer to the same object.

const obj1 = { name: "Alex" };
const obj2 = { name: "Alex" };
console.log(obj1 === obj2);
let a = { name: "Alex" };
let b = a;
b.name = "Jordan";
console.log(a);

// ### Task 2: Cloning and Merging using Object.assign

// **Task Description:**

// - Create an object `user` with several properties (for example, `{ name: "Alex", age: 30 }`).
// - Create another object `permissions` with different properties (for example, `{ canEdit: true, canDelete: false }`).
// - Using `Object.assign`, create a new object `combined` that merges the properties of both objects.
// - Log the `combined` object to the console.
// - Then, use `Object.assign` to clone the `user` object into a new object `userCopy`, change one property in `userCopy`, and verify that the original `user` object remains unchanged.

const user = { name: "Alex", age: 30 };
const permissions = { canEdit: true, canDelete: false };
const combined = Object.assign({}, user, permissions);
console.log(combined); 
const userCopy = Object.assign({}, user);
userCopy.age = 35;
console.log(user);  
console.log(userCopy);


// ### Task 3: Nested Cloning

// **Task Description:**

// - Create an object `config` that contains a nested object, for example:
    
//     ```jsx
//     let config = {
//       theme: "dark",
//       options: {
//         fontSize: 14,
//         language: "en"
//       }
//     };
    
//     ```
    
// - Make a shallow copy of `config` using either `Object.assign` or the spread operator.
// - Change the `fontSize` property in the nested object of the copy.
// - Log both objects to the console and observe that changing the nested object affects the original object, demonstrating that the copy was shallow.

let config = {
    theme: "dark",
    options: {
      fontSize: 14,
      language: "en"
    }
  };
  let configCopy = { ...config };
  configCopy.options.fontSize = 18;
  console.log(config);
  console.log(configCopy);