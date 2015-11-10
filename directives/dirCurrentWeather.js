angular.module('weartherApp')
  .directive('dirCurrentWeather', function(weatherService){

    return {
      templateUrl: '/directives/dirCurrentWeatherTmpl.html',
      restrict: 'E',
      scope: {
        temperature: '=',
        main: '='
      },
      // link: function(scope, elem, attrs) {
      //
      // }
      controller: function($scope, weatherService){
        weatherService.getWeather("Provo")
          .then(function(response){
            console.log('response is running');
            //console.log('$scope.currentWeather.tempF is ', $scope.currentWeather.tempF)
            $scope.currentWeather = response;
            $scope.temperature = $scope.currentWeather.tempF; //why isn't this working always????
            console.log('$scope.currentWeather.tempF is' + $scope.currentWeather.tempF);
            //only gets a value assigned AFTER the page changes.
            $scope.main = $scope.currentWeather.main;
          });

      }

    }



  });
