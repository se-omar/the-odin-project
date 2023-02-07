const capitalize = (s) => {
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const reverse = (s) => {
  let revStr = "";
  for (let i = s.length - 1; i >= 0; i--) {
    revStr += s[i];
  }
  return revStr;
};

const calculator = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
  mul: (a, b) => a * b,
  divide: (a, b) => a / b,
};

const caesarCipher = (s) => {
  let ciphered = "";
  for (let char of s) {
    let code = char.charCodeAt();
    if (String.fromCharCode(code) == "z") code = "a".charCodeAt();
    else code += 1;

    ciphered += String.fromCharCode(code);
  }
  return ciphered;
};

const analyzeArray = (arr) => {
  return {
    average: getAverage(arr),
    min: getMin(arr),
    max: getMax(arr),
    length: arr.length,
  };
};
const getAverage = (arr) => {
  let sum = 0;
  for (let el of arr) {
    sum += el;
  }
  return sum / arr.length;
};

const getMin = (arr) => {
  let min = arr[0];
  for (let el of arr) {
    if (el < min) {
      min = el;
    }
  }
  return min;
};

const getMax = (arr) => {
  let max = arr[0];
  for (let el of arr) {
    if (el > max) {
      max = el;
    }
  }
  return max;
};

export { capitalize, reverse, calculator, caesarCipher, analyzeArray };
