module.exports = function reverse (n) {
  if (n < 0) {
    n = Math.abs(n);
  }
  let stringNumber = String(n);
  let arrayNumber = stringNumber.split('');
  let reverseArrayNumber = arrayNumber.reverse();
  let answer = reverseArrayNumber.join('');
  return Number(answer);
}
