
function removeArrayName(names){
    let unicName = [];
    for (let i = 0; i < names.length; i++){
        const name = names[i];
        // console.log(name);
        if (unicName.indexOf(name) == -1){
            unicName.push(name);
        }
    }
    return unicName;
}

const names = ["Alice", "Bob", "Charlie", "David", "Charlie", "mahadi", "hassan", "shohag", "mahadi"];

const uniqueName = removeArrayName(names);
console.log(uniqueName);