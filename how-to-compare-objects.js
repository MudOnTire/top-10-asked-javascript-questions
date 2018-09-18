const isEqual = (a, b) => {
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }
  for (var key in a) {
    if (a[key] !== b[key]) {
      return false
    }
  }
  return true;
}

const result = isEqual({ a: 1, b: 2 }, { a: 1, b: 2, c: 3 });
console.log(result);