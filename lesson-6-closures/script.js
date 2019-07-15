function roundingOff(n) {
  return n.toFixed(2);
}

function calculateAverage(tips) {
  var sum = 0;
  for (var i = 0; i < tips.length; i++) {
    sum = sum + +tips[i];
  }
  return sum / tips.length;
}

var john = {
  score: [124, 48, 268, 180, 42],
  tips: [],
  scoreAndTips: [],
  averageTips: 0,
  calculateTips: function () {
    for (var i = 0; i < john.score.length; i++) {
      if (john.score[i] < 50) {
        john.tips[i] = roundingOff(john.score[i] * 0.2);
      } else if (john.score[i] >= 50 && john.score[i] < 200) {
        john.tips[i] = roundingOff(john.score[i] * 0.15);
      } else {
        john.tips[i] = roundingOff(john.score[i] * 0.1);
      }
      john.scoreAndTips[i] = john.score[i] + +john.tips[i];
    }
  }
};

john.calculateTips();
console.log('John tips = ' + john.tips);
console.log('John score + tips = ' + john.scoreAndTips);
john.averageTips = roundingOff(calculateAverage(john.tips));

var mike = {
  score: [77, 375, 110, 45],
  tips: [],
  scoreAndTips: [],
  averageTips: 0,
  calculateTips: function () {
    for (var i = 0; i < mike.score.length; i++) {
      if (mike.score[i] < 100) {
        mike.tips[i] = roundingOff(mike.score[i] * 0.25);
      } else if (mike.score[i] >= 100 && mike.score[i] < 300) {
        mike.tips[i] = roundingOff(mike.score[i] * 0.1);
      } else {
        mike.tips[i] = roundingOff(mike.score[i] * 0.25);
      }
      mike.scoreAndTips[i] = mike.score[i] + +mike.tips[i];
    }
  }
};

mike.calculateTips();
console.log('Mike tips = ' + mike.tips);
console.log('Mike score + tips = ' + mike.scoreAndTips);
mike.averageTips = roundingOff(calculateAverage(mike.tips));

console.log(mike.averageTips > john.averageTips ? 'Mike\'s family paid off the biggest average tips.' : 'John\'s family paid off the biggest average tips.');

module.exports = john;
