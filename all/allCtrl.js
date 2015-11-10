// allCtrl.js
angular.module('weartherApp')
  .controller('allCtrl', function($scope, firebaseService){

    $scope.test3 = 'Scope Three Initialized.';

    $scope.wearthers = firebaseService.getFirebaseArray();


  });
