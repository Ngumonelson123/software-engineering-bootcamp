/** Factorial of n (n!) -n must be a non-negative integer */
function factorial(n) {
  if (!Number.isInteger(n) || n < 0) throw new Error('n must be a non-nagative integer');
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
}
//** Check if a number is prime */
function isPrime(n) {
  if (!Number.isInteger(n) || n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n  % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i +2) === 0) return false;
  }
  return true;
}
/** Generate Fibonacci sequence with 'terms numbers (>=1)' */
function fibonacci(terms) {
    if (!Number.isInteger(terms) || terms <= 0) throw new Error('terms must be a positive integer');
    if (terms === 1) return [0];
    const seq = [0, 1];
    while (seq.length < terms) {
        const len = seq.length;
        seq.push(seq[len -1] + seq[len -2]);
    }
    return seq;
}

module.exports = { factorial, isPrime, fibonacci };
/* Quick tests when run directly */
if (require.main === module) {
  console.log('Factorial of 5:', factorial(5)); // 120
  console.log('Is Prime(29):', isPrime(29));   // true
  console.log('Is Prime(100):', isPrime(100)); // false
  console.log('fibonacci (10):', fibonacci(10)); // [0,1,1,2,3,5,8,13,21,34]
}
