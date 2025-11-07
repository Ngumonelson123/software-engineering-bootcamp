# JavaScript Utilities

A collection of utility functions for common JavaScript operations including string manipulation, array operations, and mathematical calculations.

## Files

- `strings.js` - String manipulation utilities
- `arrays.js` - Array operation utilities  
- `math.js` - Mathematical calculation utilities

## Installation

```bash
# Clone or download the files to your project
# No external dependencies required
```

## Usage

### strings.js

String manipulation functions for common text operations.

```javascript
const { reverseString, countChars, capitalizeWords } = require('./strings.js');

// Reverse a string
reverseString("Hello World"); // "dlroW olleH"

// Count characters in a string
countChars("Hello"); // 5

// Capitalize first letter of each word
capitalizeWords("hELlo worLD"); // "Hello World"
```

### arrays.js

Array operation functions for numerical computations and filtering.

```javascript
const { maxInArray, minInArray, sumArray, filterArray } = require('./arrays.js');

const numbers = [5, 2, 9, -3, 9, 0];

// Find maximum value
maxInArray(numbers); // 9

// Find minimum value
minInArray(numbers); // -3

// Sum all elements
sumArray(numbers); // 22

// Filter with custom predicate
filterArray(numbers, n => n >= 0); // [5, 2, 9, 9, 0]
```

### math.js

Mathematical functions for factorial, prime checking, and Fibonacci sequence generation.

```javascript
const { factorial, isPrime, fibonacci } = require('./math.js');

// Calculate factorial
factorial(5); // 120

// Check if number is prime
isPrime(29); // true
isPrime(100); // false

// Generate Fibonacci sequence
fibonacci(10); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

## API Reference

### String Functions

| Function | Parameters | Returns | Description |
|----------|------------|---------|-------------|
| `reverseString(str)` | `str: string` | `string` | Reverses the input string |
| `countChars(str)` | `str: string` | `number` | Returns character count |
| `capitalizeWords(sentence)` | `sentence: string` | `string` | Capitalizes first letter of each word |

### Array Functions

| Function | Parameters | Returns | Description |
|----------|------------|---------|-------------|
| `maxInArray(arr)` | `arr: number[]` | `number` | Finds maximum value |
| `minInArray(arr)` | `arr: number[]` | `number` | Finds minimum value |
| `sumArray(arr)` | `arr: number[]` | `number` | Sums all elements |
| `filterArray(arr, predicate)` | `arr: any[]`, `predicate: function` | `any[]` | Filters array by condition |

### Math Functions

| Function | Parameters | Returns | Description |
|----------|------------|---------|-------------|
| `factorial(n)` | `n: integer >= 0` | `number` | Calculates n! |
| `isPrime(n)` | `n: integer` | `boolean` | Checks if number is prime |
| `fibonacci(terms)` | `terms: integer >= 1` | `number[]` | Generates Fibonacci sequence |

## Testing

Each module includes built-in tests that run when executed directly:

```bash
node strings.js
node arrays.js  
node math.js
```

## Error Handling

All functions include appropriate error handling:
- Type validation for parameters
- Range checks for mathematical functions
- Empty array validation for array operations