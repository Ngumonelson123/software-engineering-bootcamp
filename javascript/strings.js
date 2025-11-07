/** Reverse a string */
function reverseString(str) {
  return [...String(str)].reverse().join('');
}

/** Count characters in a string */
function countChars(str) {
  return String(str).length;
}

/** Capitalize the first letter of each word */
function capitalizeWords(sentence) {
  return String(sentence)
    .trim()
    .split(/\s+/)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ');
}

module.exports = { reverseString, countChars, capitalizeWords };

/* Quick tests when run directly: */
if (require.main === module) {
  console.log(reverseString("Hello World"));
  console.log(countChars("Hello"));
  console.log(capitalizeWords("hELlo worLD"));
}
