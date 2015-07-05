angular.module('carComparisonApp.controllers.results', []).
controller('resultsCtrl', ['$scope', '$filter', 'carService', function ($scope, $filter, carService) {

   $scope.manufacturers = [];
   $scope.cars = [];
   $scope.cars.years = [];

   $scope.isFiltered = function (val) {
       return carService.carFilter.manufacturers[val.manufacturer.id];
   };

   $scope.$watch(function () {
       return carService.RestoreState;
   });

   $scope.cars = carService.RestoreState;

}]);