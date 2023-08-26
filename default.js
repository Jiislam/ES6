//  deafult 
function add(num1= 99,num2 = 0){
    const result = num1 + num2;
    console.log(num1, num2 , result);
    return result;
}

// const summation = add(5,7)
// const summation = add(5)
const summation = add()

// default --> if value is not provided, take this as adefault

function fullName (first,last=''){
    const full = first +' '+last;
    return full;
}

function friends(numbs = []){

}

function person(human ={}){
    
}