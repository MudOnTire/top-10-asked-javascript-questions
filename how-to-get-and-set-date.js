const d = new Date(2017, 11, 14);

const year = d.getFullYear();
const month = d.getMonth();
const date = d.getDate();

console.log(`${year}-${month + 1}-${date}`);

const now = new Date();

console.log(now.getMonth());
console.log(now.getDate());