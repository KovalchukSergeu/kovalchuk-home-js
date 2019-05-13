function isPal(string) {
  return string.toLowerCase() === string.toLowerCase().split('').reverse().join('') ? true : false;
}

module.exports = isPal;
