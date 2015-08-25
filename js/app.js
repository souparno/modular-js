/*requirejs.config({
  "baseUrl": "/",
  "paths": {
    "calculator": "js/calculator.js"
  }
});
*/

define(function (require, exports) {
  var calculator = require('calculator');
  var result = calculator.add(1, 2);

  console.log(result);
});
