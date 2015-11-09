// addCtrl.js
angular.module('weartherApp')
  .controller('addCtrl', function($scope, firebaseService){

    $scope.test2 = 'Scope Two Initialized.';


    console.log("$scope.temperature is", $scope.temperature);
    console.log("$scope.main is", $scope.main);
    //gets info from <dir-current-weather> because added to scope in dirCurrentWeather.js

    function submitWearther() {
      var newWeartherObject = {
        temperature: $scope.temperature,
        main: $scope.main,
        clothing: $scope.newOutfit,
        comfortLevel: $scope.comfortLevel, //use radio buttons
      };
    }

    //upon hitting submit, generate a new object with current weather info
    //and user input, and add that object to the firebase array.

  });
