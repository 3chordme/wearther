angular.module('weartherApp')
  .directive('dirCurrentWeather', function(weatherService){

    return {
      templateUrl: '/directives/dirCurrentWeatherTmpl.html',
      restrict: 'E',
      scope: {
        temperature: '=',
        main: '='
      }
    }


  });
