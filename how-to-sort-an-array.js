const a = { id: 3, name: 'a', price: 250 };
const b = { id: 2, name: 'b', price: 50 };
const c = { id: 4, name: 'c', price: 20 };
const d = { id: 1, name: 'd', price: 500 };
const e = { id: 0, name: 'e', price: 100 };

const arr = [a, b, c, d];

function byIdUp(a, b) {
  return a.id - b.id;
}

function byIdDown(a, b) {
  return b.id - a.id;
}

function byName(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}

function byPriceUp(a, b) {
  return a.price - b.price;
}

console.log(arr.sort(byIdUp));
console.log(arr.sort(byName));