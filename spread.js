const max = Math.max(6,12,87,45,12,54)
const numbers = [3,5,2,45,5,43,91,32,15]
const getMax = Math.max(...numbers);
console.log(...numbers);
console.log(getMax);

// use spread operator to copy

const friends = [4,5,87,9];
const bondhu = friends
const dosto =[...friends]
console.log(dosto)
friends.push(100);
console.log(dosto)
console.log(friends)

// advanced

const sonkha = [...friends, 999] 
console.log(sonkha)
