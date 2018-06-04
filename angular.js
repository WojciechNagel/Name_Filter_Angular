// JavaScript source code

var app = angular.module("ajsImiona", []);
app.controller("ctlImiona", function ($scope, $http) {
    $scope.order = 'pozycja';
    $scope.dir = false;
    //$scope.imiona = [{ 'pozycja': 1, 'imie': 'Ewa' } {'pozycja': 2, 'imie': 'Adam' }];
    $http.get("service.php?imie=").then(function(response) {
        $scope.imiona = response.data;
        
    });
});