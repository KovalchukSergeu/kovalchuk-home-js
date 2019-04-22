function greet() {
  console.log('Hi');
}

var anonymousGreet = function() {
  console.log('Hi');
};

function log(a) {
  console.log(a);
  a();
}


log(function () {
  console.log('as argument')
});

var c = {
  name: 'The c object',
  log: function () {
    var self = this;
    self.name = 'Updated c object';
    console.log('SELF', self);

    var setName = function (newName) {
      this.name = newName;
      self.name = newName;
    };

    setName('Update again!!! The c object');
    console.log('this', this);
    console.log('SELF-2', self);
  }
};

c.log();