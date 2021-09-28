const sumLargestNumbers = function(data) {
  // Put your solution here
 
  if (data === undefined) {
    return 'No data';    
  } else if (data.length < 2) {
    return data[0];    
  } else if (data.length === 2) {
    return data[0] + data[1];
  } else {
    let max1 = data

  } 
} 

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
console.log(sumLargestNumbers());
console.log(sumLargestNumbers([7]));
