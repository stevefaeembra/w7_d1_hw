const FormView = require("./views/form_view.js");
const PrimeTester = require("./models/primetester.js");

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const formView = new FormView();
  formView.bindEvents();

  const primeTester = new PrimeTester();
  primeTester.bindEvents();

});
