// app.js

angular.module('weartherApp', ['ui.router', 'firebase'])

//add ui router, firebase

  .config(function($stateProvider, $urlRouterProvider) {

      $stateProvider

        .state('home', {
          url: '/home',
          templateUrl: 'home/homeTmpl.html',
          controller: 'homeCtrl'
        })
        
        .state('add', {
          url: '/add',
          templateUrl: 'add/addTmpl.html',
          controller: 'addCtrl'
        })

        .state('all', {
          url: '/all',
          templateUrl: 'all/allTmpl.html',
          controller: 'allCtrl'
        });

      $urlRouterProvider.otherwise('/home');



  });
