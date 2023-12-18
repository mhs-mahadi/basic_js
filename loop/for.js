 console.log('simple  even for loop');
 for(var i = 0; i <=20; i += 2){
    console.log(`even number is: ${i}`);
 }

 console.log('simple odd for loop');
 for (let index = 1; index < 21; index += 2){
    console.log(`Odd number is: ${index}`)
 }

 var friends = ['mahadi', 'hassan', 'shohag', 'mizan', 'shaju', 'sagor', 'rashed', 'selim'];
//  for(var index = 0; index < friends.length; index +=1){
//     if(friends[index] == 'shaju'){
//         continue;
//     }
//     console.log(`${index} frinds name: ${friends[index]}`);
//  }

//revers 
console.log(friends.length -1);
for(var i = friends.length -1; i >= 0; i--){
    console.log(`${i} frinds name: ${friends[i]}`);
}


var reversedArray = friends.reverse();
for (var i = 0; i <= reversedArray.length-1; i++){
    console.log(`${i} frinds name: ${reversedArray[i]}`);
}

