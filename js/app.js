define(function (require) {
  var calculator = require('calculator');

  var app = {
    run: function () {
      var result = calculator.add(1, 2);
      console.log(result);
    }
  };
 
  return app;
});
