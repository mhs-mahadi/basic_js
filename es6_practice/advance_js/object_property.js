const student = [
    {id:11, name:'mahadi'},
    {id:21, name:'hassan'},
    {id:31, name:'shohag'},
    {id:41, name:'ripon'}
]

// const sname = [];
// for (let i = 0; i < student.length; i++) {
//     const element = student[i];
//     const {name} = element ;
//     sname.push(name);
    
// }
// console.log(sname);
const ids = student.map(studentId => studentId.id);
const names = student.map(studentName => studentName.name);
console.log(`Id is : ${ids} and name is: ${names}`);