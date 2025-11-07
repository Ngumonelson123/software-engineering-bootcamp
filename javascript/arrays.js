/** Find maximum in a number array */
function maxInArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) throw new Error('Array is empty');
  return arr.reduce((max, n) => (n > max ? n : max), arr[0]);
}

/** Find minimum in a number array */
function minInArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) throw new Error('Array is empty');
  return arr.reduce((min, n) => (n < min ? n : min), arr[0]);
}

/** Sum all elements in a number array */
function sumArray(arr) {
  if (!Array.isArray(arr)) throw new Error('Expected an array');
  return arr.reduce((sum, n) => sum + n, 0);
}

/** Filter array by a predicate/condition */
function filterArray(arr, predicate) {
  if (!Array.isArray(arr)) throw new Error('Expected an array');
  if (typeof predicate !== 'function') throw new Error('Expected a predicate function');
  const out = [];
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i], i, arr)) out.push(arr[i]);
  }
  return out;
}

module.exports = { maxInArray, minInArray, sumArray, filterArray };

/* Quick tests when run directly */
if (require.main === module) {
  const nums = [5, 2, 9, -3, 9, 0];
  console.log('max:', maxInArray(nums));                           // 9
  console.log('min:', minInArray(nums));                           // -3
  console.log('sum:', sumArray(nums));                             // 22
  console.log('filtered >= 0:', filterArray(nums, n => n >= 0));   // [5, 2, 9, 9, 0]
}
