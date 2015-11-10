// homeCtrl.js
angular.module('weartherApp')
  .controller('homeCtrl', function($scope, firebaseService, weatherService){

    var firebaseArray = firebaseService.getFirebaseArray();
    console.log('firebaseArray[0] is', firebaseArray[0]);
    //problem is that the firebase object isn't loading soon enough, so it is undefined here

    firebaseArray.$loaded()
      .then(function(data) {
        console.log('then() has fulfilled');
        weatherService.getWeather("Provo")
          .then(function(response){
            console.log('response is running');
            //console.log('$scope.currentWeather.tempF is ', $scope.currentWeather.tempF)
            $scope.currentWeather = response;
            $scope.temperature = $scope.currentWeather.tempF; //why isn't this working always????
            //set a default look into resolve
            console.log('$scope.currentWeather.tempF is' + $scope.currentWeather.tempF);
            //only gets a value assigned AFTER the page changes.
            $scope.main = $scope.currentWeather.main;
            $scope.match = search(data);
            console.log('according to promise match is', $scope.match)
          });
      })
      .catch(function(error) {
        console.error("Error:", error);
      });

      //still has a bug. only works when refreshed, not when link is clicked.
      //may not need a promise.
      //might be best to get weather from weatherServices instead of this dumb data-binding approach.
      //for some reason the directive temperature is being all wonky.

    search = function(arr) {

      console.log('search() is running');

      var match;
      var diff = Math.abs($scope.temperature - arr[0].temperature);

      console.log('initial diff is ' + diff);
      console.log('initial $scope.temperature is ' + $scope.temperature);

      for (var i = 0; i < arr.length; i++) {
        console.log('Loop #' + i + ' diff is ' + diff + ' arr[i].temperature is ' + arr[i].temperature);
        //when home is clicked, diff is NaN because $scope.temperature is undefined
        //check promise in dirCurrentWeather.js
        if (Math.abs($scope.temperature - arr[i].temperature) <= diff) {
          diff = Math.abs($scope.temperature - arr[i].temperature);
          match = arr[i];
        }
      }
      return match;
    }

  });
