// weatherService
angular.module('weartherApp')
  .service('weatherService', function($http, $q){

    this.getWeather = function(city) {

      var deferred = $q.defer();

      $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=080c36fce479d131e2b94a6197b9b31c')
        .then(function(response) {
          //console.log(response);

          var main = response.data.weather[0].main;
          var tempKelvin = response.data.main.temp;
          var temperature = Math.round(tempKelvin * 9 / 5 - 459.67);

          var weatherObject = {temperature, main};
          //console.log(weatherObject);
          deferred.resolve(weatherObject);
        });

        return deferred.promise;

    }

    });
