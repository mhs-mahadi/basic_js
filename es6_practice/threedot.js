const age1 = [1, 2, 3, 4, 5, 6, 7];
const age2 = [7, 6, 5, 4, 3, 2, 1];
const age3 = [10, 11, 12, 13, 14, 15];
const result = [...age1, ...age2,555, ...age3];
console.log(result);
const business = 650;
const minister = 550;
const sochib = 460;
const maximum = Math.max(business, minister, sochib);
console.log(maximum);
const maxNUmber = [650, 750,860,987,367413,87484];
const maxis = Math.max(...maxNUmber);
console.log(maxis);
