/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates           *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math     *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Returns an area of a rectangle given by width and height.
 *
 * @param {number} width
 * @param {number} height
 * @return {number}
 *
 * @example:
 *   5, 10 => 50
 *   5, 5  => 25
 */
function getRectangleArea(...args) {
  return args[0] * args[1];
}

/**
 * Returns a circumference of circle given by radius.
 *
 * @param {number} radius
 * @return {number}
 *
 * @example:
 *   5    => 31.41592653589793
 *   3.14 => 19.729201864543903
 *   0    => 0
 */
function getCircleCircumference(...args) {
  return args[0] * 2 * Math.PI;
}

/**
 * Returns an average of two given numbers.
 *
 * @param {number} value1
 * @param {number} value2
 * @return {number}
 *
 * @example:
 *   5, 5  => 5
 *  10, 0  => 5
 *  -3, 3  => 0
 */
function getAverage(...args) {
  return args[0] / 2 + args[1] / 2;
}

/**
 * Returns a distance between two points by cartesian coordinates.
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 *
 * @return {number}
 *
 * @example:
 *   (0,0) (0,1)    => 1
 *   (0,0) (1,0)    => 1
 *   (-5,0) (10,-10) => 18.027756377319946
 */
function getDistanceBetweenPoints(...args) {
  return Math.sqrt((args[2] - args[0]) ** 2 + (args[3] - args[1]) ** 2);
}

/**
 * Returns a root of linear equation a*x + b = 0 given by coefficients a and b.
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 *
 * @example:
 *   5*x - 10 = 0    => 2
 *   x + 8 = 0       => -8
 *   5*x = 0         => 0
 */
function getLinearEquationRoot(...args) {
  return -args[1] / args[0];
}

/**
 * Returns an angle (in radians) between two vectors given by xi and yi,
 * coordinates in Cartesian plane.
 * See details https://en.wikipedia.org/wiki/Euclidean_vector#Representations
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {number}
 *
 * @example:
 *   (1,0) (0,1)     => π/2
 *   (0,1) (0,-1)    => π
 *   (0,-1) (1,0)    => π/2
 *   (0,1) (0,1)     => 0
 *   (0,1) (1,2)     => 0
 */
function getAngleBetweenVectors(...args) {
  return Math.acos(
    (args[0] * args[2] + args[1] * args[3]) /
      Math.sqrt((args[0] ** 2 + args[1] ** 2) * (args[2] ** 2 + args[3] ** 2))
  );
}

/**
 * Returns a last digit of a integer number.
 *
 * @param {number} value
 * @return {number}
 *
 * @example:
 *   100     => 0
 *    37     => 7
 *     5     => 5
 *     0     => 0
 */
function getLastDigit(...args) {
  return args[0] % 10;
}

/**
 * Returns a number by given string representation.
 *
 * @param {string} value
 * @return {number}
 *
 * @example:
 *    '100'     => 100
 *     '37'     => 37
 * '-525.5'     => -525.5
 */
function parseNumberFromString(...args) {
  return +args[0];
}

/**
 * Returns a diagonal length of the rectangular parallelepiped given by its sides a,b,c.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 *
 * @example:
 *   1,1,1   => 1.7320508075688772
 *   3,3,3   => 5.196152422706632
 *   1,2,3   => 3.741657386773941
 */
function getParallelepipedDiagonal(...args) {
  return Math.sqrt(args[0] ** 2 + args[1] ** 2 + args[2] ** 2);
}

/**
 * Returns the number rounded to specified power of 10.
 *
 * @param {number} num
 * @param {number} pow
 * @return {number}
 *
 * @example:
 *   1234, 0  => 1234
 *   1234, 1  => 1230
 *   1234, 2  => 1200
 *   1234, 3  => 1000
 *   1678, 0  => 1678
 *   1678, 1  => 1680
 *   1678, 2  => 1700
 *   1678, 3  => 2000
 */
function roundToPowerOfTen(...args) {
  return Math.round(args[0] / 10 ** args[1]) * 10 ** args[1];
}

/**
 * Returns true is the number is prime; otherwise false.
 * See: https://en.wikipedia.org/wiki/Primality_test
 *
 * @param {number} n
 * @return {bool}
 *
 * @example:
 *   4 => false
 *   5 => true
 *   6 => false
 *   7 => true
 *   11 => true
 *   12 => false
 *   16 => false
 *   17 => true
 */
function isPrime(...args) {
  if (args[0] <= 1 || (args[0] % 2 === 0 && args[0] !== 2)) {
    return false;
  }
  for (let i = 3; i <= Math.sqrt(args[0]); i += 2) {
    if (args[0] % i === 0) {
      return false;
    }
  }
  return true;
}

/**
 * Tries to convert value to number and returns it if conversion was successful;
 * otherwise returns default value passed as a second argument.
 *
 * @param {any} value
 * @param {any} def
 * @return {number}
 *
 * @example
 *   toNumber(null, 0) => 0
 *   toNumber('test', 0) => 0
 *   toNumber('1', 0) => 1
 *   toNumber(42, 0) => 42
 *   toNumber(new Number(42), 0) => 42
 */
function toNumber(...args) {
  return Number.isNaN(+args[0]) ? args[1] : Number(args[0]);
}

/**
 * Returns the cube of the given number.
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   3  => 27
 *   -2 => -8
 *   0  => 0
 */
function getCube(...args) {
  return args[0] ** 3;
}

/**
 * Returns the Fibonacci number located at the index position.
 *
 * @param {number} index
 * @return {number}
 *
 * @example:
 *   0  => 0
 *   1  => 1
 *   2  => 1
 *   3  => 2
 *   10 => 55
 */
function getFibonacciNumber(...n) {
  if (n[0] === 0) {
    return 0;
  }
  if (n[0] === 1) {
    return 1;
  }
  return getFibonacciNumber(n[0] - 1) + getFibonacciNumber(n[0] - 2);
}

/**
 * Returns the sum of all numbers from 1 to n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   5  => 15 // (1+2+3+4+5)
 *   10 => 55 // (1+2+3+...+10)
 *   1  => 1
 */
function getSumToN(...n) {
  if (n[0] === 1) {
    return 1;
  }
  return getSumToN(n[0] - 1) + +n;
}

/**
 * Returns the sum of the digits of a given number.
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   123 => 6  // (1+2+3)
 *   202 => 4  // (2+0+2)
 *   5   => 5  // 5
 */
function getSumOfDigits(...args) {
  let sum = 0;
  let n = args[0];
  while (n > 0) {
    sum += n % 10;
    n = Math.trunc(n / 10);
  }
  return sum;
}

/**
 * Returns true if the given number is a power of two, false otherwise.
 *
 * @param {number} num
 * @return {boolean}
 *
 * @example:
 *   4   => true
 *   16  => true
 *   15  => false
 */
function isPowerOfTwo(...args) {
  let num = args[0];
  while (num > 1) {
    num /= 2;
  }
  return num === 1;
}

/**
 * Returns the sine of a number.
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   0 => 0
 *   Math.PI / 2 => 1
 */
function getSine(...args) {
  return Math.sin(args[0]);
}

/**
 * Returns a string representation of a number in a specified base (radix).
 *
 * @param {number} number
 * @param {number} base
 * @return {string}
 *
 * @example:
 * 255, 16 => 'ff'
 * 2, 2    => '10'
 */
function numberToStringInBase(...args) {
  const num = args[0];
  const base = args[1];
  return num.toString(base);
}

/**
 * Returns a string representation of a number in exponential notation.
 *
 * @param {number} number
 * @param {number} fractionDigits
 * @return {string}
 *
 * @example:
 * 12345, 2    => '1.23e+4'
 */
function toExponential(...args) {
  const num = args[0];
  const fractionDigits = args[1];
  return num.toExponential(fractionDigits);
}

/**
 * Returns a string representation of a number in fixed-point notation.
 *
 * @param {number} number
 * @param {number} fractionDigits
 * @return {string}
 *
 * @example:
 * 12345, 2    => '12345.00'
 * 12.345, 1   => '12.3'
 */
function toFixed(...args) {
  const num = args[0];
  const fractionDigits = args[1];
  return num.toFixed(fractionDigits);
}

/**
 * Returns a string representation of a number in normal (fixed-point or exponential)
 * notation rounded to precision significant digits.
 *
 * @param {number} number
 * @param {number} precision
 * @return {string}
 *
 * @example:
 * 12345, 7    => '12345.00'
 * 12.345, 4   => '12.35'
 */
function toPrecision(...args) {
  const num = args[0];
  const precision = args[1];
  return num.toPrecision(precision);
}

/**
 * Returns the primitive value of a Number object.
 *
 * @param {Number} number
 * @return {number}
 *
 * @example:
 * new Number(5) => 5
 * Number(-5)    => -5
 */
function getNumberValue(...args) {
  return args[0].valueOf();
}

/**
 * Returns a boolean value indicating whether the parameter is a number or not.
 *
 * @param {number} number
 * @return {boolean}
 *
 * @example:
 * Infinity => false
 * NaN      => false
 * 0        => true
 * 'a' / 1  => false
 * 'a'      => false
 * 5        => true
 * '5'      => false
 */
function isNumber(...args) {
  return Number.isFinite(args[0]) && !Number.isNaN(args[0]);
}

/**
 * Returns a boolean value indicating whether a number is an integer or not.
 *
 * @param {number} number
 * @return {boolean}
 *
 * @example:
 * 5    => true
 * 5.1  => false
 * '5'  => false
 */
function isInteger(...args) {
  const number = args[0];
  return Number.isInteger(number);
}

/**
 * Returns a floating point number or, if the number cannot be parsed from the argument, returns NaN.
 *
 * @param {string} str
 * @return {number | NaN}
 *
 * @example:
 * '4.567abcdefgh' => 4.567
 * 'abcdefgh'      => NaN
 */
function getFloatOnString(str) {
  return Number.parseFloat(str);
}

/**
 * Returns an integer of the specified base or, if the number cannot be parsed
 * from the argument, returns NaN.
 *
 * @param {string} str
 * @param {number} base
 * @return {number | NaN}
 *
 * @example:
 * '4.567abcdefgh', 10  => 4
 * 'abcdefgh', 10       => NaN
 * '1.234', 2           => 1
 * '10', 8              => 1
 */
function getIntegerOnString(...args) {
  const str = args[0];
  const base = args[1];
  return Number.parseInt(str, base);
}

/**
 * Returns whether a number is a safe integer.
 *
 * @param {number} number
 * @return {boolean}
 *
 * @example:
 * 10       => true
 * 3.5      => false
 * 2 ** 53  => false
 */
function isSafeInteger(...args) {
  return Number.isSafeInteger(args[0]);
}

/**
 * Returns the smallest integer less than or equal to a given number.
 *
 * @param {number} number
 * @return {number}
 *
 * @example:
 * 5.9  => 5
 * -5.1 => -6
 */
function roundToSmallestInteger(...args) {
  return Math.floor(args[0]);
}

/**
 * Returns the largest integer greater than or equal to a given number.
 *
 * @param {number} number
 * @return {number}
 *
 * @example:
 * 5.1  => 6
 * -5.9 => -5
 */
function roundToLargestInteger(...args) {
  return Math.ceil(args[0]);
}

/**
 * Returns the value of a number rounded to the nearest integer.
 *
 * @param {number} number
 * @return {number}
 *
 * @example:
 * 5.5  => 6
 * 5.4  => 5
 * -5.5 => -5
 */
function roundToNearestInteger(...args) {
  return Math.round(args[0]);
}

/**
 * Returns the integer part of a number by removing any fractional digits.
 *
 * @param {number} number
 * @return {number}
 *
 * @example:
 * 5.5  => 5
 * 5.4  => 5
 * -5.5 => -5
 */
function getIntegerPartNumber(...args) {
  return Math.trunc(args[0]);
}

/**
 * Returns the sum of numbers.
 *
 * @param {number} x1
 * @param {number} x2
 * @param {number} x3
 * @returns {number}
 *
 * @example:
 * 1, 2, 3       => 6
 * 0.1, 0.2, 0.3 => 0.6
 */
function getSumOfNumbers(...args) {
  let sum;
  let x1 = args[0];
  let x2 = args[1];
  let x3 = args[2];
  if (Number.isInteger(x1) && Number.isInteger(x2) && Number.isInteger(x3)) {
    sum = args[0] + args[1] + args[2];
  } else {
    let n = 1;
    while (
      !Number.isInteger(x1) ||
      !Number.isInteger(x2) ||
      !Number.isInteger(x3)
    ) {
      x1 *= 10;
      x2 *= 10;
      x3 *= 10;
      n += 1;
    }
    sum = (args[0] + args[1] + args[2]).toFixed(n);
  }
  return sum;
}

/**
 * Returns the largest number.
 *
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @return {number}
 *
 * @example:
 * 1, 2   => 2
 * -5, -6 => -5
 * 0, 5   => 5
 */
function getMaxNumber(...args) {
  return Math.max(args[0], args[1]);
}

/**
 * Returns a random integer in the range from min to max.
 *
 * @param {number} min
 * @param {number} max
 * @return {number}
 *
 * @example:
 * 1, 2  => 1 | 2
 * -5, 0 => -5 | -4 | -3 | -2 | -1 | 0
 * -1, 1 => -1 | 0 | 1
 */
function getRandomInteger(...args) {
  const min = args[0];
  const max = args[1];
  const randomNum = Math.random() * (max + 1 - min) + min;
  return Math.floor(randomNum);
}

/**
 * Returns the length of the hypotenuse of a right triangle.
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 *
 * @example:
 * 3, 4 => 5
 */
function getHypotenuse(...args) {
  return Math.hypot(args[0], args[1]);
}

/**
 * Returns count of odd numbers from zero to the resulting number.
 * The resulting number is taken into account.
 *
 * @param {number} number
 * @return {number}
 *
 * @example:
 * 4  => 2
 * 5  => 3
 * 10 => 5
 * 15 => 8
 */
function getCountOfOddNumbers(...args) {
  let n;
  if (args[0] === 0) {
    n = 0;
  } else if (args[0] > 0) {
    n = Math.ceil(args[0] / 2);
  } else if (args[0] < 0) {
    n = Math.abs(Math.floor(args[0] / 2));
  }
  return n;
}

module.exports = {
  getRectangleArea,
  getCircleCircumference,
  getAverage,
  getDistanceBetweenPoints,
  getLinearEquationRoot,
  getAngleBetweenVectors,
  getLastDigit,
  parseNumberFromString,
  getParallelepipedDiagonal,
  roundToPowerOfTen,
  isPrime,
  toNumber,
  getCube,
  getFibonacciNumber,
  getSumToN,
  getSumOfDigits,
  isPowerOfTwo,
  getSine,
  numberToStringInBase,
  isSafeInteger,
  roundToLargestInteger,
  roundToSmallestInteger,
  roundToNearestInteger,
  getSumOfNumbers,
  isNumber,
  isInteger,
  toExponential,
  toFixed,
  toPrecision,
  getNumberValue,
  getFloatOnString,
  getIntegerOnString,
  getIntegerPartNumber,
  getMaxNumber,
  getRandomInteger,
  getHypotenuse,
  getCountOfOddNumbers,
};
