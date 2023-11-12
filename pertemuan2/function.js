/** ======================== JAVASCRIPT FUNCTION ==============================
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

/** ==================== Function as an object attribute ==============================
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

