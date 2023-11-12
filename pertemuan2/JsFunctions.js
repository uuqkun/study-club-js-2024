/** =============================== 1st subject =====================
 *  JAVASCRIPT FUNCTION
 * this is a declaration method used before ES6 syntax
 */

// =====> declaration
function power(base, exp) {
  let total = 1;

  for (let i = 0; i < exp; i++) {
    total *= base;
  }

  return total;
}

/* Different ways of function invocation */

// ====> normal invocation
console.log(power(1, 3));

// =====> invoke without parentheses ()
console.log(power);

// =====> Function as variable values
let result = power(10, 4); // power will return 10^4 that is 10000
console.log(result);

/* ARROW FUNCTION
 * New way to declare a function after ES6
 */

// ====> normal declaration
function sayHello() {
  // do something ...
  return "Hello world";
}

// invocation
// sayHello();

// ====> arrow func declaration
let sayHey = () => {
  // do something
  return "Hello world";
};

// invocation
// sayHey();

/** =============================== 2nd subject =====================
 * Function as an object's attribute
 */

// First, create an object of student
const student = {
  name: "Fahry",
  age: 25,
  GPA: 3.8,
  hobbies: ["UI/UX Design", "Hacking your laptop", "Sleep"],
  isActive: true,
  doWalking: function () {
    return this.name + " is walking...";
  },
  eatSomething: () => {
    return student.name + " is ate something strange...";
  },
};

// Second, invoke each functions we had
console.log(student.doWalking());
console.log(student.eatSomething());

/** =============================== 3rd subject =====================
 * 1. Scope
 *  1.1. Local Scope
 *  1.2. Function Scope
 *  1.3. Global Scope
 * 2. Hoisting
 *
 */

/**
 * ================ 1.1. Block Scope
 */

// Variable declared inside an object cannot be accessed outside {} block, here's the example
const book = {
  id: 112,
  title: "Tales of Arise 2nd Edition",
  author: "Fajar jawir",
};

// this will cause an error
// console.log(title)

// id, title, and author is an 'object attributes'
// Object attribute can only be accessed by "referencing it's object parent"
// we can access it by using objectName.attributeName
console.log(book.title); // output : Tales of Arise 2nd Edition

// ... As well as the other attributes
console.log(book.id);
console.log(book.author);

// These are the examples of "Block Scope"

/**
 * =============== Function Scope
 * Explanation: Each function creates a new scope.
 *              Variables defined inside a function are not accessible (visible)
 *              from outside the function.
 */

let getName = () => {
  let name = "Rahmat"; // cannot be accessed outside this function

  return name;
};

// This will cause an error
// console.log(name);

/**
 * =============== Global Scope
 * Explanation: All scripts and functions can access it
 */

let asianCountries = [
  "Malaysia",
  "Indonesia",
  "Vietnam",
  "Cambodia",
  "Japan",
  "South Korea",
];

function getCountry(index) {
    // Can be accessed inside this function
    return asianCountries[index];
}

console.log(getCountry(0)); // Output : "Malaysia"




