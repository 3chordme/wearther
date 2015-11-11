// homeCtrl.js
angular.module('weartherApp')
  .controller('homeCtrl', function($scope, firebaseService, weatherService){

    var firebaseArray = firebaseService.getFirebaseArray();
    console.log('firebaseArray[0] is', firebaseArray[0]);
    //problem is that the firebase object isn't loading soon enough, so it is undefined here

    firebaseArray.$loaded()
      .then(function(data) {
        weatherService.getWeather("Provo")
          .then(function(response){
            $scope.currentWeather = response;
            $scope.temperature = $scope.currentWeather.temperature;
            $scope.main = $scope.currentWeather.main;
            if ($scope.main === "Clouds") {
              $scope.main = "Cloudy";
            }
            $scope.match = search(data);
          });
      })
      .catch(function(error) {
        console.error("Error:", error);
      });

    search = function(arr) {
      var match;
      var diff = Math.abs($scope.temperature - arr[0].temperature);

      for (var i = 0; i < arr.length; i++) {
        //console.log('Loop #' + i + ' diff is ' + diff + ' arr[i].temperature is ' + arr[i].temperature);

        if (Math.abs($scope.temperature - arr[i].temperature) <= diff) {
          diff = Math.abs($scope.temperature - arr[i].temperature);
          match = arr[i];
        }
      }
      return match;
    }

  });
