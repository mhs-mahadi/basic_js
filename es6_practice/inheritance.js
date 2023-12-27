class Father{
    constructor(){
        this.fatherName = 'Anower';
    }
}
class Son extends Father{
    constructor(name){
        super();
        this.sname = name;
    }
}

const son1 = new Son('Mahadi');
const son2 = new Son('shohag');
// console.log(son1, son2);
const {fatherName, sname} = son1;
console.log("Father Name="+fatherName,' ','Son name='+sname);
