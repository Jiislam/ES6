const glass = {
    name: ' glass' ,
    color : ' golden',
    price: 12,
    isCleaned: true

};
console.log(glass);
const keys = Object.keys(glass)
// [ 'name', 'color', 'price', 'isCleaned' ]
const values = Object.values(glass)
// [ ' glass', ' golden', 12, true ]
console.log(keys)
console.log(values)

const entries = Object.entries(glass)
console.log(entries)
// array of array , two dimensional array
/* [
    [ 'name', ' glass' ],
    [ 'color', ' golden' ],
    [ 'price', 12 ],
    [ 'isCleaned', true ]
  ] */

delete glass.isCleaned;
console.log(glass);

// freeze object : no values will be added 

Object.freeze(glass)
glass.source = ' bangladesh'
glass.price = 5000;
delete glass.name;
console.log(glass)