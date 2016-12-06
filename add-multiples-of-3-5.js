function findMultipliers(number) {
  var sum = 0;
  for(var i = 0; i <= number; i++) {
    if(i % 5 || i % 3) { sum += i; }
  }
  return sum;
}

// function that finds the sum of all the multipliers of 3 and 5 below 100
// x % 5 = 0
// x % 3 = 0
