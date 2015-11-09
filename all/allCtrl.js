// allCtrl.js
angular.module('weartherApp')
  .controller('allCtrl', function($scope, firebaseService){

    $scope.test3 = 'Scope Three Initialized.';

    // var newWearther = {
    //     temperature: ,
    //     description: ,
    //     outfit: ,
    //     comfortLevel:
    // };

    //firebaseService.addWearther(newWearther);

    $scope.wearthers = firebaseService.getFirebaseArray();


  });
