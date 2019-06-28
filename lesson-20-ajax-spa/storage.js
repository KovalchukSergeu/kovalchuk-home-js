function THashStorage() {
  var self = this;
  self.storage = {};
  self.ErrorHandler = function (jqXHR, StatusStr, ErrorStr) {
    alert(StatusStr + ' ' + ErrorStr);
  };
  self.UpdateReady = function (ResultH) {
    if (ResultH.error != undefined) {
      alert(ResultH.error);
    }
  }
}

THashStorage.prototype.addValue = function (key, value) {
  var UpdatePassword = Math.random();
  $.ajax({
    url: AjaxHandlerScript,
    type: 'POST',
    data: {
      f: 'LOCKGET',
      n: 'KOVALCHUK_DRINKS_STORAGE',
      p: UpdatePassword
    },
    cache: false,
    success: LockGetReady,
    error: this.ErrorHandler
  });

  function LockGetReady(ResultH) {
    if (ResultH.error !== undefined) {
      alert(ResultH.error);
    } else {
      if (ResultH.result != "") {
        self.storage = JSON.parse(ResultH.result);
      }

      self.storage[key] = value;
      $.ajax({
        url: AjaxHandlerScript,
        type: 'POST',
        data: {
          f: 'UPDATE',
          n: 'KOVALCHUK_DRINKS_STORAGE',
          v: JSON.stringify(self.storage),
          p: UpdatePassword
        },
        cache: false,
        success: self.UpdateReady,
        error: self.ErrorHandler
      });
    }
  }
};

THashStorage.prototype.getStorage = function () {
  tttr();
  function tttr() {
    $.ajax({
      url: AjaxHandlerScript,
      type: 'POST',
      data: {
        f: 'READ',
        n: 'KOVALCHUK_DRINKS_STORAGE'
      },
      cache: false,
      success: ReadReady,
      error: self.ErrorHandler
    });
  }

  function ReadReady(ResultH) {
    if (ResultH.error !== undefined)
      alert(ResultH.error);
    else {
      if (ResultH.result !== "") {
        myStorage = JSON.parse(ResultH.result);
      }
    }
  }
};

THashStorage.prototype.getValue = function (key) {
  if (myStorage[key]) {
    return myStorage[key];
  };
};

THashStorage.prototype.deleteValue = function (key, par) {

  if (par[key]) {
    var UpdatePassword = Math.random();
    $.ajax({
      url: AjaxHandlerScript,
      type: 'POST',
      data: {
        f: 'LOCKGET',
        n: 'KOVALCHUK_DRINKS_STORAGE',
        p: UpdatePassword
      },
      cache: false,
      success: LockGetReady,
      error: this.ErrorHandler
    });

    function LockGetReady(ResultH) {

      if (ResultH.error !== undefined) {
        alert(ResultH.error);
      } else {
        if (ResultH.result != "") {
          self.storage = JSON.parse(ResultH.result);
        }
        delete self.storage[key];
        $.ajax({
          url: AjaxHandlerScript,
          type: 'POST',
          data: {
            f: 'UPDATE',
            n: 'KOVALCHUK_DRINKS_STORAGE',
            v: JSON.stringify(self.storage),
            p: UpdatePassword
          },
          cache: false,
          success: self.UpdateReady,
          error: self.ErrorHandler
        });
      }
    }
  }
};

THashStorage.prototype.getKeys = function () {
  return Object.keys(myStorage);
};
