function isPrime(number) {
  if (number <= 0 || number === 1) return false;
  if (number === 2) return true;
  const maximumDividor = Math.sqrt(number) + 1; 
  for (let i = 2; i < maximumDividor; i++){
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
console.log(isPrime(1));
