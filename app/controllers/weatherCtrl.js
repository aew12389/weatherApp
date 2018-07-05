angular.module('weatherApp.controllers', ['geolocation'])

  .controller('ForecastCtrl',
    ['$scope','weatherMap','ISO3166','savedLocations','geolocation',
      function($scope,weatherMap,ISO3166,geolocation,savedLocations) {

    $scope.message = '';
    $scope.hasLocation = '';

    $scope.savedLocations = savedLocations;

    var currentLocation = geolocation.getLocation().then(function(data){
      $scope.coords = {lat:data.coords.latitude, long:data.coords.longitude};
    });
    
    $scope.forecast = weatherMap.query5DayForecast({
      location: currentLocation
    });

    $scope.getForecastByLocation = function() {

      if ($scope.location == '' || $scope.location == undefined) {
        $scope.hasLocation = 'warning';
        $scope.message = 'Please provide a location';
        return;
      }
      
      savedLocations.push($scope.location);      
      $scope.hasLocation = 'success';

      $scope.forecast = weatherMap.query5DayForecast({
        location: $scope.location
      });
    };

    $scope.setLocation = function(loc) {
      $scope.location = loc;
      $scope.getForecastByLocation();
    };
  }])

  .controller('CurrentCtrl',
    ['$scope','weatherMap','ISO3166','savedLocations','geolocation',
      function($scope,weatherMap, ISO3166, geolocation, savedLocations) {

    $scope.message = '';
    $scope.hasLocation = '';
    $scope.savedLocations = savedLocations;

    var currentLocation = geolocation.getLocation().then(function(data){
      $scope.coords = {lat:data.coords.latitude, long:data.coords.longitude};
    });
    
    $scope.forecast = weatherMap.queryWeather({
      location: currentLocation
    });

    $scope.getForecastByLocation = function() {

      if ($scope.location == '' || $scope.location == undefined) {
        $scope.hasLocation = 'warning';
        $scope.message = 'Please provide a location';
        return;
      }
      
      savedLocations.push($scope.location);    
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
