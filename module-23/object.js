const students = [
    {id: 11, name: 'Omar Sunny'},
    {id: 21, name: 'manna'},
    {id: 31, name: 'moyouri'},
    {id: 41, name: 'deepjol'}
];
const studentName = [];

for (let i = 0; i < students.length; i++) {
    const element = students[i];
    const {name} = element;
    studentName.push(name);
    
}

const names = students.map(s => s.name);
const ids = students.map(i => i.id);
const bigger = students.filter(i => i.id > 30);

const biggerNmae = bigger.map(bn => bn.name);
const firsefukker = bigger.find(ff => ff.name );

console.log(bigger)
console.log('bigger fukker name', biggerNmae);
console.log('first fukker', firsefukker);
console.log(ids);
console.log('from maps function', names);
console.log('from for loops function', studentName);