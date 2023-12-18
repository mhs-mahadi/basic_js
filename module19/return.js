function add(number1, number2){
    console.log(number1, number2);
    var total = number1 + number2;
    return total;
    console.log('after return line');
}

var sum = add(100, 200);
console.log('toatl add number', sum);