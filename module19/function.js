//function
function startFan(){
    console.log('stand up');
    console.log('walk towards the switch');
    console.log('Press the switch');
}

startFan();

// function parameter
console.log('\nfunction parameter start');
function singraAno(taka){
    console.log('singra ano');
    console.log(taka);
}

singraAno(300);

// add function

function sum(a,b,c,d,e){
    console.log(a, b, c, d, e);
    var sum = a + b + c + d + e;
    console.log(sum); 
}
sum(10, 15, 20, 25, 30);