var app = angular.module("httptest", []);

app.controller("getjson", ["$scope", "$http", function($scope, $http) {
  $http.get("logs.json").
  success(function(res) {
    $scope.data = res;
  });
}]);