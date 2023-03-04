arr = [90, 45, 37, 80, 1, 46]

var findPrimes = arr.filter((num) => {
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
});

var minPrime = Math.min(...findPrimes);

console.log(arr);
console.log(findPrimes);
console.log(minPrime);
