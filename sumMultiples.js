//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

//Find the sum of all the multiples of 3 or 5 below 1000.

// define a function
function sumMultiples() {
// create an array to collect multiples of 3 or 5
  var multiples = [];
  // loop through all numbers from 1 and 999
  for (var i = 1; i < 1000; i++) {
    // collect all multiples of 3 or 5 into an array
      // check if each # is a multiple of 3 or 5
      if ((i % 3 === 0) || (i % 5 === 0)) {
       // if yes, add to array 
       multiples.push(i);
      }
   }
    // find the sum of all numbers in the array
     var sum = 0;
    for (var j = 0; j < multiples.length; j++) {
       sum += multiples[j];
     }
      //return the sum
    return sum;
}

console.log(sumMultiples());