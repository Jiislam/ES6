// template strings
const a = 54;
const array = [45, 56]
const object = {
    name: 'Jihadul Islam',
    age: 20,
    educationalBackground: 'Accounting',
    occupation: 'IT'
}

const message = `The student named ${object.name} failed ${a} times untill he succeded. He was from ${object.educationalBackground} , but now he is having  a succesfull career in ${object.occupation}. His average was ${array}`

console.log(message)

//  arrow function

const square = x => x*x
const sum = (x,y) => x+y

const getsquare = square(54)
const getsum = sum(5,4)

console.log(getsquare)
console.log(getsum)

// distructuring

const {age, z, ...} = {x:2, y:5, z:3, name: 'ovijeet', age: 55}

const [first, second, ....remaining] = ['ram', 'sam', 'jodu', 'modhu']