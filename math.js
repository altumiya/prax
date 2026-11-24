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
