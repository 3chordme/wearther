//firebaseService.js
angular.module('weartherApp')
  .service('firebaseService', function($firebaseArray){

    var ref = new Firebase('https://wearther.firebaseio.com/');

    var firebaseArray = $firebaseArray(ref);

    this.getFirebaseArray = function() {
      console.log('getFirebaseArray returning', firebaseArray);
      return firebaseArray;
    };

    this.WeartherMaker = function() {
      
    }



    this.addWearther = function(wearther) {
      console.log('addWearther $adding', wearther)
      firebaseArray.$add(wearther);
    };



  });


// EXAMPLE

// JS

// $scope.addMessage = function() {
//     $scope.messages.$add({
//       text: $scope.newMessageText
//     });
//   };

// HTML

//   <body ng-controller="SampleCtrl">
//       <ul>
//         <li ng-repeat="message in messages">
//           <!-- edit a message -->
//           <input ng-model="message.text" ng-change="messages.$save(message)" />
//           <!-- delete a message -->
//           <button ng-click="messages.$remove(message)">Delete Message</button>
//         </li>
//       </ul>
//       <!-- push a new message onto the array -->
//       <form ng-submit="addMessage()">
//         <input ng-model="newMessageText" />
//         <button type="submit">Add Message</button>
//       </form>
//     </body>
