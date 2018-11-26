const PubSub = require("../helpers/pub_sub.js");

const FormView = function () {

};

FormView.prototype.bindEvents = function () {
  // glom onto submit button on form, sends number (as text)
  // to the FormView:number-submitted channel
  const form = document.querySelector('#prime-checker-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    debugger;
    const inputtedNumber = parseInt(event.target.number.value);
    // send a custom event
    PubSub.publish('FormView:number-submitted', inputtedNumber);
  });
};

module.exports = FormView;
