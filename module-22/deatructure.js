const person = {pname: 'mahadi', age:32, job: 'Devops engineer', child: 'fatiha', phone: '01740967409', friends:['mizan', 'shju', 'rashed']};
const {pname} = person;
const {phone, friends, job} = person;


console.log(pname, phone);
console.log(friends);
console.log(job);

const friends1 = ['saju', 'rashed', 'mizan', 'sagor', 'mintu', 'arif'];

const[university1, university2, ...schoolfrd]   = friends1;

console.log(university1, university2);
console.log(schoolfrd);

const complesObject ={
    fname : 'Mahadi',
    lname : "Shohag",
    info:{
        road:4,
        house:76,
        block: 'B',
        address: 'Gulshan-1, Niketon'
    }
}

const {fname} = complesObject;

const {address} = complesObject.info;

console.log(fname, address);