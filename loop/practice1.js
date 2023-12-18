var fruits = ['Apple', 'Banana', 'orange'];
var indexOfBanana = fruits.indexOf('Banana');
console.log(`index of Banana: ${parseInt(indexOfBanana)}`);
fruits[indexOfBanana] = 'Mango';
console.log(`Replace banana with mango [${fruits}]`);
var removeOrange = fruits.pop();
console.log(`remove orange from array [${fruits}]`);
var addWatermelon = fruits.push('Watermelon');
console.log(`add watermelon in array [${fruits}]`);