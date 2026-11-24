// 1. Math: Built-in JavaScript object for mathematical constants and functions
// Note: 'Math' always starts with a capital 'M'
console.log("Math.PI:", Math.PI); // 3.141592653589793

// 2. Math.abs(): Returns the absolute (non-negative) value

console.log(Math.abs(-10));  // 10
console.log(Math.abs(10));   // 10
console.log(Math.abs(-4.7)); // 4.7

// 3. Math.round(): Rounds to the nearest integer (.5 rounds up)

console.log(Math.round(4.6));  // 5
console.log(Math.round(4.4));  // 4
console.log(Math.round(-4.5)); // -4

// 4. Math.ceil(): Always rounds UP to the next whole number

console.log(Math.ceil(4.1));  // 5
console.log(Math.ceil(4.9));  // 5
console.log(Math.ceil(-4.9)); // -4 (closer to 0 is higher)

// 5. Math.floor(): Always rounds DOWN to the previous whole number

console.log(Math.floor(4.9));  // 4
console.log(Math.floor(4.1));  // 4
console.log(Math.floor(-4.1)); // -5 (further below 0 is lower)

// 6. Math.trunc(): Simply cuts off the decimal part (no rounding)

console.log(Math.trunc(4.9));  // 4
console.log(Math.trunc(4.1));  // 4
console.log(Math.trunc(-4.9)); // -4 (just drops .9)

// 1. Math.max(): Returns the highest number

console.log(Math.max(10, 25, 5, 40));   // 40
console.log(Math.max(-10, -25, -5));    // -5 (closest to 0 is largest)

// 2. Math.min(): Returns the lowest number

console.log(Math.min(10, 25, 5, 40));   // 5
console.log(Math.min(-10, -25, -5));    // -25

// 4. Edge cases
console.log(Math.max()); // -Infinity (no arguments)
console.log(Math.min()); // Infinity  (no arguments)
console.log(Math.max(10, "abc")); // NaN (if any value cannot be converted to a number)

// 1. Basic usage: random decimal between 0 (inclusive) and 1 (exclusive)
console.log(Math.random()); // e.g., 0.738291045

// 2. Random integer from 0 to 9
console.log(Math.floor(Math.random() * 10)); // 0, 1, 2, ..., 9
// 3. Random integer from 1 to 10 (add 1 to shift the range)
console.log(Math.floor(Math.random() * 10) + 1); // 1, 2, ..., 10

// 4. Random integer between min and max (BOTH inclusive) — standard formula
const min = 10;
const max = 20;
const randomInRange = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Random (${min}-${max}):`, randomInRange); // e.g., 14

// 5. Practical use: pick a random item from an array
const colors = ["red", "green", "blue", "yellow"];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
console.log("Random color:", randomColor); // e.g., "blue"
