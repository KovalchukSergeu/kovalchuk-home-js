(function (window) {
  function Model(data) {
    this.data = data;
    this.onSet = new alexMVC.Events(this);
  }

  Model.prototype = {
    get() {
      return this.data;
    },
    set(data) {
      this.data = data;
      this.onSet.notify({data: data});
    }
  };

  window.alexMVC = window.alexMVC || {};
  window.alexMVC.Model = Model;
})(window);