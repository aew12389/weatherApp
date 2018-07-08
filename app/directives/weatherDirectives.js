angular.module('weatherApp.directives', [])

.directive('weatherPanel',[function factory() {
    return {
      restrict: 'EA',

      scope: {
        useWeather: '=showEntry',
        weather: '=weatherPanel'
      },

      templateUrl: 'app/views/weatherPanel.html',

      link: function(scope, element, attrs) {
        // Get icon image url
        scope.getIconImageUrl = function(iconName) {
          return (iconName ? 'http://openweathermap.org/img/w/' + iconName + '.png' : '');
        };

        scope.parseDate = function (time) {
          return new Date(time * 1000);
        };
      }
    }
  }])

  .directive('forecastPanel',[function factory() {
    return {
      restrict: 'EA',

      scope: {
        useDayForecast: '=showEntry',
        forecast: '=forecastPanel'
      },

      templateUrl: 'app/views/forecastPanel.html',

      link: function(scope, element, attrs) {
        // Get icon image url
        scope.getIconImageUrl = function(iconName) {
          return (iconName ? 'http://openweathermap.org/img/w/' + iconName + '.png' : '');
        };

        scope.parseDate = function (time) {
          return new Date(time * 1000);
        };
      }
    }
  }])