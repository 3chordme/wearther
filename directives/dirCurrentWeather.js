angular.module('weartherApp')
  .directive('dirCurrentWeather', function(weatherService){

    return {
      templateUrl: '/directives/dirCurrentWeatherTmpl.html',
      restrict: 'E',
      // scope: {
      //
      // },
      // link: function(scope, elem, attrs) {
      //
      // }
      controller: function($scope, weatherService){
        weatherService.getWeather("Provo")
          .then(function(response){
            $scope.currentWeather = response;
          })
      }

    }



  });
