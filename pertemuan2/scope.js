/** =============================== JavaScript Scope =====================
 * 1. Scope
 *  1.1. Local Scope
 *  1.2. Function Scope
 *  1.3. Global Scope
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
