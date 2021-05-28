function every(array, test) {
  let fact = true;
  for (let i = 0; i < array.length; i++) {
      if (fact == true) {
        let currArray = array.slice(i, i + 1);
        //console.log(currArray.some(test), currArray)
        fact = currArray.some(test);
        }  else {
          return fact;
        }
  }
  return fact;
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
console.log(every([1, 89, 12, 9, 12, 3, 2, 1], n => n < 10));
// → false