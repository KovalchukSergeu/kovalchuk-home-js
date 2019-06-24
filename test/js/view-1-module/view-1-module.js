(function (window) {
  function ViewEntityOne(model, selector) {
    this.model = model;
    this.selector = selector;

    this.model.onSet.attach(() => this.draw());
  }

  ViewEntityOne.prototype = {
    draw() {
      this.selector.innerHTML = this.model.get();
    }
  };

  window.alexMVC = window.alexMVC || {};
  window.alexMVC.ViewEntityOne = ViewEntityOne;
})(window);