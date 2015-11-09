//firebaseService.js
angular.module('weartherApp')
  .service('firebaseService', function($firebaseArray){

    var ref = new Firebase('https://wearther.firebaseio.com/');

    var firebaseArray = $firebaseArray(ref);

    this.getFirebaseArray = function() {
      console.log('getFirebaseArray returning', firebaseArray);
      return firebaseArray;
    };

    this.addWearther = function(wearther) {
      console.log('addWearther $adding', wearther)
      firebaseArray.$add(wearther);
    };



  });
