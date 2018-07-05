angular.module('weatherApp.controllers', [])

  .controller('CurrentCtrl',
    ['$scope','weatherMap','savedLocations','ISO3166',
      function($scope,weatherMap,savedLocations,ISO3166) {

    $scope.message = '';
    $scope.hasLocation = '';

    $scope.savedLocations = savedLocations;
    
    $scope.forecast = weatherMap.queryWeather({
      location: savedLocations[ 0 ]
    });

    $scope.getForecastByLocation = function() {

      if ($scope.location == '' || $scope.location == undefined) {
        $scope.hasLocation = 'warning';
        $scope.message = 'Please provide a location';
        return;
      }

      $scope.hasLocation = 'success';

      $scope.forecast = weatherMap.queryWeather({
        location: $scope.location
      });
    };

    $scope.setLocation = function(loc) {
      $scope.location = loc;
      $scope.getForecastByLocation();
    };
  }])
