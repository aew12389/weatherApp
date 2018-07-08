angular.module('weatherApp.controllers', [])

  .controller('ForecastCtrl',
    ['$scope','weatherMap','savedLocations','ISO3166',
      function($scope,weatherMap,savedLocations,ISO3166) {

      $scope.message = '';
      $scope.hasLocation = '';

      $scope.savedLocations = savedLocations;

      $scope.forecast = weatherMap.queryForecast({
        location: savedLocations[ 0 ]
      });

      $scope.getForecastByLocation = function() {

        if ($scope.location == '' || $scope.location == undefined) {
          $scope.hasLocation = 'warning';
          $scope.message = 'Please provide a location';
          return;
        }

        $scope.hasLocation = 'success';

        $scope.forecast = weatherMap.queryForecast({
          location: $scope.location
        });
        
      };

      $scope.setLocation = function(loc) {
        $scope.location = loc;
        $scope.getForecastByLocation();
      };

      $scope.getIconImageUrl = function(iconName) {
        return (iconName ? $scope.iconBaseUrl + iconName + '.png' : '');
      };
  }])

  .controller('CurrentCtrl',
  ['$scope','weatherMap','savedLocations','ISO3166',
    function($scope,weatherMap,savedLocations,ISO3166) {

    $scope.message = '';
    $scope.hasLocation = '';

    $scope.savedLocations = savedLocations;
    
    $scope.weather = weatherMap.queryWeather({
      location: savedLocations[ 0 ]
    });

    $scope.getWeatherByLocation = function() {

      if ($scope.location == '' || $scope.location == undefined) {
        $scope.hasLocation = 'warning';
        $scope.message = 'Please provide a location';
        return;
      }

      $scope.hasLocation = 'success';

      $scope.weather = weatherMap.queryWeather({
        location: $scope.location
      });
    };

    $scope.setLocation = function(loc) {
      $scope.location = loc;
      $scope.getWeatherByLocation();
    };

    $scope.getIconImageUrl = function(iconName) {
      return (iconName ? $scope.iconBaseUrl + iconName + '.png' : '');
    };
}])
