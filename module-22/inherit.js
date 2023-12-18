class Parents{
    constructor(fname = 'Shohag'){
        this.fname = fname;
    }
}
class Child extends Parents{
    constructor(name){
        super();
        this.name = name;
    }
    fullName(){
        return this.name + " " + this.fname;
    }
}

const baby = new Child('Fatiha');
const baby2 = new Child('Fatiha2');

console.log(baby.fullName());
console.log(baby2);