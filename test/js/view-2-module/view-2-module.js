(function (window) {
  function ViewEntityTwo(model, selector) {
    this.model = model;
    this.selector = selector;

    this.onChange = new alexMVC.Events(this);

    this.selector.addEventListener('change', (event) => {
      this.onChange.notify(event.target.value);
    });

    this.model.onSet.attach(() => this.draw());
  }

  ViewEntityTwo.prototype = {
    draw() {
      this.selector.value = this.model.get();
    }
  };

  window.alexMVC = window.alexMVC || {};
  window.alexMVC.ViewEntityTwo = ViewEntityTwo;
})(window);