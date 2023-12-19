function stopWatch(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

const colck1 = stopWatch();
const colck2 = stopWatch();
console.log(colck1());
console.log(colck1());
console.log(colck1());
console.log(colck1());
console.log(colck1());
console.log(colck1());
console.log(colck2());
console.log(colck2());