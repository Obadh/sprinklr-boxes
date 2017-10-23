var Boxes = angular.module('boxesApp', ['ngRoute'])
.controller('boxesController', ['$scope', 'boxes', boxesController])
.service('boxes', boxes)
.directive('boxesCard', boxesCard);

Boxes.config(function($routeProvider){
  $routeProvider.when('/' , {
    templateUrl : 'partial/boxes.html',
    controller: 'boxesController'
  })
  $routeProvider.otherwise({ redirectTo : '/' });
})
