(function (window) {
  function Controller(model, view) {
    this.model = model;
    this.view = view;

    if (this.view.hasOwnProperty('onChange')) {
      this.view.onChange.attach((sender, data) => this.update());
    }
  }

  Controller.prototype = {
    update(data) {
      this.model.set(data);
    }
  };


  window.alexMVC = window.alexMVC || {};
  window.alexMVC.Controller = Controller;
})(window);