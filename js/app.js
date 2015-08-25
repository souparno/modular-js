define(function (require) {
  var calculator = require('calculator'),
      echo = require('echo');


  var app = {
    run: function () {
      var result = calculator.add(1, 2);
      echo(result);
    }
  };
 
  return app;
});
