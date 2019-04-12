var firstSum = 124;
var secondSum = 64;
var thirdSum = 268;
var tip;

function tipCounting(x) {
  if (x <= 50) {
      tip = x * 0.2;
  } else if (x <= 200) {
    tip = x * 0.15;
  } else {
    tip = x * 0.1;
  }
  return tip;
}

var firstTip = tipCounting(firstSum);
var secondTip = tipCounting(secondSum);
var thirdTip = tipCounting(thirdSum);

var tipArrays = [firstTip, secondTip, thirdTip];
var finalAmount = [ firstSum + secondSum + thirdSum + firstTip + secondTip + thirdTip];

console.log(tipArrays);
console.log(finalAmount);