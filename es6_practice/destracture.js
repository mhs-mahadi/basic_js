const person = {first_name:'mahadi', age:30, education:'bsc in cse', occupation:'job', phone:['01740967409', '01611108873']};

const {first_name, occupation, phone, age, education} = person;
// const {occupation} = person;
// const {phone} = person;

console.log('Name : '+ first_name, ",Ocupation : " + occupation,',Phone : '+ phone[0]);
console.log(first_name, education, age);