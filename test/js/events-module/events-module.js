(function (window) {
  function Events(sender) {
    this.sender = sender;
    this.listeners = [];
  }

  Model.prototype = {
    attach(listener) {
      this.listeners.push(listener);
    },
    notify(args) {
      this.listeners.forEach((listener, index) => {
        this.listeners[index](this.sender, args);
      });
    }
  };

  window.alexMVC = window.alexMVC || {};
  window.alexMVC.Events = Events;
})(window);