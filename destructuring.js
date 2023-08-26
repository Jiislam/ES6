const actor = {
    name : 'Ananta',
    age: 30,
    phone: '01796450552',
    money: 123456789

}

// if right side is an object, left side of destructuring will be object as well
const {phone, age: boyos} = actor

// const phone = actor.phone
// const age = actor.age
const name = actor.name

console.log(phone)
console.log(boyos)
console.log(name)
// console.log(phone)


//  array destructuring 
const numbers = [45,99]
const [first, second] = numbers;
const [x,y] = [12,45]

// function

function doubleThem(a,b){
    return [a*2, b*2];
}

const [prothom,ditiyo] = doubleThem(6,9)

console.log(prothom,ditiyo)
console.log(first,second)