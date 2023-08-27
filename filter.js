// filter selects element based on a condition and returns an array with the elements that fullfilled the condition
const numbers = [45,45,89,45,23,41];
const playerHeight = [75,65,67,72,55,59];

// const selected = playerHeight.filter( p => p > 50);
const selected = playerHeight.filter( p => p%2 === 1);
console.log(selected)