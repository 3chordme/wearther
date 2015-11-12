angular.module('weartherApp')
  .directive('dirNavBar', function() {

    return {
      templateUrl: '/directives/dirNavBarTmpl.html',
      restrict: 'E',
    };

  });
