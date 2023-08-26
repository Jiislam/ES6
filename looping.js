// for of use on array or string not in object
//  for in use on object

const numbers = [1,6,8,4];

for (const num of numbers){
    console.log(num);
}


const glass = {
    name: ' glass' ,
    color : ' golden',
    price: 12,
    isCleaned: true

};
for ( const key in glass){
    const value = glass[key];
    console.log(key,value)
}

const practice1 = (x,y,z) => x*y*z
const practiceMutiply = practice1(5,78,52)
console.log(practiceMutiply)
//  practice w

const first = ['I am a web developer']
const second = ['I love to code']
const third = ['I love to eat biriyani']

const output = [...first,...second,...third]
console.log(output)