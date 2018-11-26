const PubSub = require('../helpers/pub_sub.js');

const ResultView = function () {

};

ResultView.prototype.bindEvents = function () {
  // subscribe to PrimeTester::isPrimeResult (-> boolean)
  PubSub.subscribe("PrimeTester::isPrimeResult", (event) => {
    var result = event.detail;
    const resultDiv = document.querySelector('#result');
    const wording = {
      true: "This is a prime number!",
      false: "This isn't a prime number"
    };
    resultDiv.textContent = wording[result];
  });
};

module.exports = ResultView;
