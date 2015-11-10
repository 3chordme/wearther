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
            $scope.currentWeather = response;
            $scope.temperature = $scope.currentWeather.tempF; //why isn't this working always????
            $scope.main = $scope.currentWeather.main;
          });

      }

    }



  });
