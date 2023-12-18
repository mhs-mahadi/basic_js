function findLargestNumber(numbers){
    let largestNumber = numbers[0];
    for (let i = 1; i < numbers.length; i++){
        if (numbers[i] < largestNumber){
            largestNumber = numbers[i];
        }
    }
    return largestNumber;
}

const numbers =[12, 23, 34, 45, 56, 67, 78, 89, 98, 65, 54, 34, 32, 21, 9,3, 2, 1];
const largestNumber = findLargestNumber(numbers);
console.log(largestNumber);