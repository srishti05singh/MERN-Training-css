// Create an array
/* let fruits = ["Apple", "Banana", "Mango"];

console.log("Original Array:", fruits);

// .push()
fruits.push("Orange");
console.log("After push():", fruits);

// .pop()
fruits.pop();
console.log("After pop():", fruits);

// .unshift()
fruits.unshift("Grapes");
console.log("After unshift():", fruits);

// .shift()
fruits.shift();
console.log("After shift():", fruits);

// .includes()
console.log("Includes Banana:", fruits.includes("Banana"));

// .indexOf()
console.log("Index of Mango:", fruits.indexOf("Mango"));

// .join()
console.log("Join:", fruits.join(" - "));

// .reverse()
fruits.reverse();
console.log("After reverse():", fruits);

// .sort()
fruits.sort();
console.log("After sort():", fruits);

// .slice()
let newArray = fruits.slice(0, 2);
console.log("Slice:", newArray);*/
// ===============================
// JavaScript Loops Example
// ===============================

// Create an array
let fruits = ["Apple", "Banana", "Mango"];

// Create an object
let student = {
    name: "Srishti",
    age: 20,
    course: "B.Tech"
};

// ====================================
// 1. FOR LOOP
// Used when you know the number of iterations
// ====================================

console.log("===== FOR LOOP =====");

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// ====================================
// 2. WHILE LOOP
// Used when the loop depends on a condition
// ====================================

console.log("===== WHILE LOOP =====");

let i = 0;

while (i < fruits.length) {
    console.log(fruits[i]);
    i++;
}

// ====================================
// 3. DO...WHILE LOOP
// Executes at least one time
// ====================================

console.log("===== DO WHILE LOOP =====");

let j = 0;

do {
    console.log(fruits[j]);
    j++;
} while (j < fruits.length);

// ====================================
// 4. FOR...OF LOOP
// Used to loop through array values
// ====================================

console.log("===== FOR OF LOOP =====");

for (let fruit of fruits) {
    console.log(fruit);
}

// ====================================
// 5. FOR...IN LOOP
// Used to loop through object keys
// ====================================

console.log("===== FOR IN LOOP =====");

for (let key in student) {
    console.log(key + " : " + student[key]);
}

// ====================================
// 6. forEach()
// Used only with arrays
// ====================================

console.log("===== FOREACH LOOP =====");

fruits.forEach(function (fruit) {
    console.log(fruit);
});