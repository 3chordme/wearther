// addCtrl.js
angular.module('weartherApp')
  .controller('addCtrl', function($scope, firebaseService, $state, weatherService){

    weatherService.getWeather("Provo")
      .then(function(response){
        $scope.currentWeather = response;
        $scope.temperature = $scope.currentWeather.temperature;
        $scope.main = $scope.currentWeather.main;
      });
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
      $state.go('all');
    }


  });
