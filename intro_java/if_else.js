var fruits = ['Apple', 'Banana', 'Orange'];
var index = fruits.indexOf('Banana'); //The indexOf() method is used to find the index of a specific element in the array.
console.log('index of Banana ' + index);
fruits[index]='Mango';  // Replace Banana with Mango
console.log(fruits);
fruits.pop(); //The pop() method is used to remove the last element from the fruits array.
console.log(fruits)
fruits.push('Watermelon') //The push() method is used to add a new element to the end of the fruits array.
console.log(fruits)