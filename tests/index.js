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

export { capitalize, reverse, calculator, caesarCipher };
