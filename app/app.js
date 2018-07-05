angular.module('weatherApp', [
    'ngRoute',
    'weatherApp.controllers',
    'weatherApp.services',
    "iso-3166-country-codes"

]).
config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/forecast', {templateUrl:'app/views/forecast.html',controller: 'ForecastCtrl'});
    $routeProvider.when('/current', {templateUrl:'app/views/current.html', controller: 'CurrentCtrl'});
    $routeProvider.otherwise({redirectTo: '/current'});
}]);