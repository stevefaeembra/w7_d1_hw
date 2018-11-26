const PubSub = require("../helpers/pub_sub");

const PrimeTester = function () {
};

PrimeTester.prototype.bindEvents = function () {
  // subscribe to FormView:number-submitted
  // compute value
  // publish on PrimeTester::isPrimeResult
  PubSub.subscribe('FormView:number-submitted', (event) => {
    const whatToTest = event.detail;
    console.log("whatToTest", whatToTest);
    const isPrimeResult = this.isPrime(whatToTest);
    PubSub.publish('PrimeTester::isPrimeResult', isPrimeResult);
  });
};

PrimeTester.prototype.isPrime = function (number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        return false;
    }
  }
  return true;
};

module.exports = PrimeTester;
