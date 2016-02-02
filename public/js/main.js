angular.module('pets', ['ngRoute'])
  .config(function ($routeProvider){

    $routeProvider.when('/', {
      templateUrl : 'partials/home.html',
    });
  });
