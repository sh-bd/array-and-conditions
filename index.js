var numbers = [10, 30, 23, 32, 83];

// get element from index
// console.log(numbers[4]);

// or
// var element = numbers[1];
// console.log(element);

// change value using index
numbers[1] = 31; //will chng 30 to 31
numbers[3] = 33;
// console.log(numbers)

// find index using element
var positionIndex = numbers.indexOf(83);
console.log(positionIndex)