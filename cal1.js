const calc = {};
calc.add = (a, b) => a + b;
calc.sub = (a, b) => a - b;
calc.mul = (a, b) => a * b;
calc.div = function(a, b) {
  if (b == 0) {
    return new Error("zero divider error.");
  }
  return a / b;
};
calc.getE = function() {
  return Math.E;
};
calc.mod = (a, b) => a % b;

module.exports = calc;
