const FormView = require("./views/form_view.js");
const PrimeTester = require("./models/primetester.js");
const ResultView = require("./views/result_view.js");

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const formView = new FormView();
  formView.bindEvents();

  const primeTester = new PrimeTester();
  primeTester.bindEvents();

  const resultView = new ResultView();
  resultView.bindEvents();

});
