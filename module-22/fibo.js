//0,1,1,2,3,5,8,13,21
//fibe [10] = fibe[10-1]+fibo[10-2]
//fibo[n] = fibo[n-1]+fibo[n-2]

[0,1,1,2]
const fibo = [0, 1];
for (i = 2; i <= 51; i++){
    fibo[i] = fibo[i-1]+fibo[i-2];
}
console.log(fibo);

// const numberArray = [5, 8, 2, 10, 3];
// const partialArray = numberArray.slice(3, 4);
// console.log(partialArray);

const numberArray = [5, 8, 2, 10, 3, 8, 2, 10, 11, 34, 45];
console.log(numberArray);
const partialArray = numberArray.splice(0, 10);
console.log(partialArray);
console.log(numberArray);