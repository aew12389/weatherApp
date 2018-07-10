angular.module('weatherApp.controllers', [])

  .controller('ForecastCtrl',
    ['$scope','weatherMap','savedLocations','ISO3166',
      function($scope,weatherMap,savedLocations,ISO3166) {

      $scope.message = '';
      $scope.hasLocation = '';

      $scope.savedLocations = savedLocations;

      $scope.forecast = weatherMap.queryForecast({
        location: savedLocations[ 0 ].location
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
      location: savedLocations[ 0 ].location
    });

    $scope.getWeatherByLocation = function() {

      var newLocation = $scope.savedLocations.indexOf($scope.location);
      if(newLocation === -1){
        $scope.saveLocation($scope.location);          
      } 

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

    $scope.saveLocation = function(loc) {
       
        $scope.location = loc;
        
        if($scope.savedLocations.length > 4){
          alert('You can only save 5 locations')
        }else{
          $scope.savedLocations.push({ location: $scope.location });
        }        
      };

      $scope.removeLocation = function(loc){
        var removedLocation = $scope.savedLocations.indexOf(loc);
        $scope.savedLocations.splice(removedLocation, 1);
      };

      $scope.updateLocation = function(){
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
      $scope.updateLocation();
    };

    $scope.getIconImageUrl = function(iconName) {
      return (iconName ? $scope.iconBaseUrl + iconName + '.png' : '');
    };
}])
