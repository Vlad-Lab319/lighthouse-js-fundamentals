/*
Define a function lastIndexOf.
If the value never occurs, the function should return -1
*/

function lastIndexOf(array, number) {
  let lastIndex = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
      lastIndex = i;
    }
  }
  return lastIndex;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);