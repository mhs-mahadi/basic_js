const nums = [1, 2, -3, -4, 5, -6, -7, 8, -9]

for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (element > 3){
        break;
    }
    console.log(element);
    
}

for (let index = 0; index < nums.length; index++) {
    const element = nums[index];

    if(element < 0){
        continue;
    }
    console.log(element);
}