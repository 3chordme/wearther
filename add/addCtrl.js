// addCtrl.js
angular.module('weartherApp')
  .controller('addCtrl', function($scope, firebaseService){

    $scope.test2 = 'Scope Two Initialized.';

    //gets info from <dir-current-weather> because added to scope in dirCurrentWeather.js

    $scope.submitWearther = function() {
      console.log('submitWearther has fired');
      var newWeartherObject = {
        temperature: $scope.temperature,
        main: $scope.main,
        outfit: $scope.newOutfit,
        comfortLevel: $scope.comfortLevel, //use radio buttons
      };
      console.log(newWeartherObject);
      firebaseService.addWearther(newWeartherObject);
    }



    //upon hitting submit, generate a new object with current weather info
    //and user input, and add that object to the firebase array.

  });
