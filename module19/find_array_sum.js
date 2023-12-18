function arraySum(numbers){
    sum = 0;
    for(let i = 0; i < numbers.length ; i++){
        const index = i;
        const elements = numbers [index];
        sum = sum + elements;
        console.log(index, elements, sum);
    }
    return sum;
}

const myarray = [12, 34, 45, 45, 56, 67, 78, 98, 80];
var mysum = arraySum(myarray);
console.log('total', mysum);