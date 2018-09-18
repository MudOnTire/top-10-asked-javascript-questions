const arr = [1, 2, 3, 4, 5, 6, NaN];
const target1 = NaN;
const target2 = 7;

let contains;

// es1
// ===
// contains = (arr, target) => {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       return true;
//     }
//   }
//   return false;
// }

// es5
// ===
// contains = (arr, target) => {
//   return arr.indexOf(target) >= 0;
// }

//es5
// ===
// contains = (arr, target) => {
//   return arr.filter(el => el === target).length > 0;
// }

// es5
// ===
// contains = (arr, target) => {
//   return arr.some(el => el === target);
// }

// es2015
// ===
// contains = (arr, target) => {
//   return arr.find(el => el === target) !== undefined;
// }

// es2015
// ===
contains = (arr, target) => {
  return arr.findIndex(el => el === target || (Object.is(el, NaN) && Object.is(target, NaN))) >= 0;
}

// es2016
// SameValueZero
// contains = (arr, target) => {
//   return arr.includes(target);
// }

console.log(contains(arr, target1));
console.log(contains(arr, target2));