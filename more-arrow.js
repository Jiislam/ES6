const difference = (x,y) => x-y;
const multiply = (first,second,third) => first * second * third
const getAge = (person) => person.age
const student = { name: 'Jihadul', age: 45}
const age = getAge(student);
console.log(age);

const getRoll = (student) => student.roll
const details = {name: 'nannu',
roll : 12,
class: 'eleven'}
const roll = getRoll(details);
console.log(roll)

const getThird = (number) =>number[2];
const Numbers = [1,2,3,4,5,6,7,8,9,10];
const getTarget = getThird(Numbers);
console.log(getTarget);

// no parameter
const getPI = ()=> Math.PI
console.log(getPI())

// large arrow function

const doMath = (x,y,z) => {
    const sum = x+y+z;
    const mult = x*y*z;
    const result= sum + mult;
    return result ;
}

const even = (2,4,6)
const evenResult = doMath(even)
console.log(evenResult)