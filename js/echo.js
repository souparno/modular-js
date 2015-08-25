define(function (require){
  var $ = require('jquery');

  var echo = function (output){
    $('#echo').html(output);
  }

  return echo;
});
