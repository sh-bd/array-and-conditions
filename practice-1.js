var fruits = ['Apple', 'Banana', 'Orange'];
console.log(fruits);

/**
 * 1. find index of banana, replace with mango
 * 2. remove orange and add watermelon
 */

// task 1
console.log(fruits.indexOf('Banana'));
fruits[1] = 'Mango';
console.log(fruits);

// task 2
fruits.pop();
fruits.push('Watermelon');
console.log(fruits);