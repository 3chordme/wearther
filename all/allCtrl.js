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


    // $scope.wearthers = [
    //   {
    //     temperature: 65,
    //     description: "overcast",
    //     outfit: "Jeans, T-shirt, Beanie, Sweater",
    //     comfortLevel: "Comfy"
    //   },
    //   {
    //     temperature: 72,
    //     description: "sunny",
    //     outfit: "Jeans, T-shirt, Beanie",
    //     comfortLevel: "Too Hot"
    //   },
    //   {
    //     temperature: 60,
    //     description: "overcast",
    //     outfit: "Jeans, T-shirt, Beanie",
    //     comfortLevel: "Too Cold"
    //   },
    //   {
    //     temperature: 55,
    //     description: "overcast",
    //     outfit: "Only Socks",
    //     comfortLevel: "Too Cold"
    //   }
    // ];


  });
