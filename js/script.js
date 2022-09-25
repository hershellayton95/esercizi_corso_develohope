// come di default
let num1 = 10;
let num2 = 20;
console.log('Before swap: ', num1, num2); // Before swap: 10 20

// Variable swapping
let temp = num2;
num2 = num1;
num1 = temp;

console.log('After swap: ', num1, num2); // After swap: 20 10

// come volete che io lo faccia
num1 = 10;
num2 = 20;
console.log('Before swap: ', num1, num2); // Before swap: 10 20

// spread swapping
[num2, num1] = [num1, num2];

console.log('After swap: ', num1, num2); // After swap: 20 10

// metodo senza usare variabili temporanee
num1 = 10;
num2 = 20;
console.log('Before swap: ', num1, num2); // Before swap: 10 20

// XOR swap algorithm
num1 = num1 + num2;
num2 = num1 - num2;
num1 = num1 - num2;

console.log('After swap: ', num1, num2); // After swap: 20 10