'use strict';
module.exports = function() {


var secretNumber = (function(){
  var myNum = Math.floor((Math.random() * 1000000) + 0);
  return function(){
    return myNum;
  };
})();

return secretNumber;

};




