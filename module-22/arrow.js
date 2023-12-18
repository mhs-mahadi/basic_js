// function doubleIt(num) {
//     return num * 2;
// }
const doubleIt = num => num * 2;
const add = (num1, num2) => num1 + num2;
const give5 = () => 5;


const number = give5();
console.log(number);
const result = doubleIt(100);
const addvalue = add(15, 25);
console.log(addvalue);
console.log(result);


const doMath = (x, y)=>{
    const sum = x+y;
    const diff = x-y;
    const multi = sum * diff;
    return multi;
}

const result2 = doMath(10, 5);
console.log(result2);