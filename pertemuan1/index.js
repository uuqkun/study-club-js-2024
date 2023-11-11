/**
 * Ada 3 metode deklarasi variabel di JS
 * 'var' merupakan metode lama sebelum ES6 -
 * dan dapat menerima tipe data apapun.
 * 'let' dan 'const' adalah metode ES6 dan juga
 * menerima tipe data apapun.
 * 'var' & 'let' dapat dideklarasikan ulang.
 * 'const' tidak dapat dideklarasikan ulang
 */

// Metode pertama
var name = "ridho";
console.log(name);

// Metode Kedua
let country = "Indonesia";
console.log(country);

// Dapat diberi tipe data yang berbeda
country = 12;
console.log(country);

// Metode ketiga
// constant tidak dapat dirubah
const pi = 3.14;
console.log(pi);

/**
 * ============= Array ==============
 */

let booksId = [1, 0, 2, 5, 6, 3, 4];
booksId.forEach(bi => {
    console.log("id: " +  bi);
});
