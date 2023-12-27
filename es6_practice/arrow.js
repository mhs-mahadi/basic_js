// function doubleIt(num){
//     return num * 2;
// }

// // variable function
//  const doubleIt = function mysunction(num){
//      return num * 2;
//  }


//  arrow function
const doubleIt = num => num *2 ;
const add = (a, b) => a + b;
const give10 = () => 1000;

const bishal = (x, y) =>{
    const add = x + y ;
    const diff = x - y ;
    const result = add * diff;
    return result;
}

const result1 = give10();
const result = add(30, 70);
console.log(result1);

const output = bishal(20, 10);
console.log(output);