const numbers = [3, 5, 6, 4, 7, 9, 8];
// const output = [];

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result =  element * element;
//     output.push(result);
// }

const result = numbers.map(x => x * x);


console.log(result);