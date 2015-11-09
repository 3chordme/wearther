// homeCtrl.js
angular.module('weartherApp')
  .controller('homeCtrl', function($scope, firebaseService){

    $scope.test1 = 'Scope One Initialized.';

    //function that looks for the closest match to the current temp,
    //and displays that data.
    var arr = firebaseService.getFirebaseArray();
    //for (i = 0; i < arr.length; i++);

  });
