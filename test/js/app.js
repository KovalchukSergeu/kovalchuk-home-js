'use strict';

function initApp() {
  const model = new alexMVC.Model(33, oneView, twoView);

  const oneView = new alexMVC.ViewEntityOne(model, document.getElementById('entity-one'));
  const twoView = new alexMVC.ViewEntityTwo(model, document.getElementById('entity-two'));

  const oneController = new alexMVC.Controller(model, oneView);
  const twoController = new alexMVC.Controller(model, twoView);

  oneView.draw();
  twoView.draw();

  // window.setTimeout(
  //   () => model.set(999),
  //   5000
  // );
}

document.addEventListener('DOMContentLoaded', initApp, false);