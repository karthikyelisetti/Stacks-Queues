function getSmallestPrime(arr) {
  var isPrime = true;
  var findPrimes = arr.filter((num) => {
    for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        return isPrime;
      }
    }
    return (isPrime ? num > 1 : num);
  });
  
  return Math.min(...findPrimes);
}

function getSmallestPrimeDivisor(arrSum) { 
  for (let i = 2; i <= Math.sqrt(arrSum); i++) {
    if (arrSum % i === 0) {     
      let isPrime = true;
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        return i;
      }
    }
  }  
  return sum;
}

function totalSpins(arr, numOfSpins) { 
  let arrLength = arr.length;
  numOfSpins = numOfSpins % arrLength; 
  let result = [];
  for (let i = 0; i < arrLength; i++) {
    let j = (i + arrLength - numOfSpins) % numOfSpins;
    result[j] = arr[i];
  }
  return result;
}

function generatePassword(arr) {
  let arrSum = arr.reduce((acc, val) => acc + val); 
  let smallestPrime = getSmallestPrime(arr); 
  let mod = arrSum % smallestPrime;
  if (smallestPrime === 1 || mod === 0) {   
    smallestPrime = getSmallestPrimeDivisor(arrSum);
  }
  let spins = smallestPrime % arr.length;
  return totalSpins(arr, spins); 
}

let arr = [90, 45, 37, 80, 1, 46];
let password = generatePassword(arr);
console.log(password.join(" ")); 
