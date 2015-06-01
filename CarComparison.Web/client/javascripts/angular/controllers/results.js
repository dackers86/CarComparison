angular.module('carComparisonApp.controllers', []).
controller('resultsCtrl', ['$scope', '$filter', 'carService', function ($scope, $filter, carService) {

    //carService.getHeaders.async().then(function (data) {
    //    $scope.cars = data;
    //});

   $scope.manufacturers = [];
   $scope.cars = [];
   $scope.cars.years = [];
   $scope.carFilter = {
       manufacturers: ""
   }

   $scope.isFiltered = function (val) {
       return $scope.carFilter.manufacturers[val.manufacturer.id];
   }

    carService.get.async().then(function (data) {

        angular.forEach(data, function (manufacturer, key) {
            $scope.manufacturers.push(manufacturer);

            angular.forEach(manufacturer.models, function (model, key) {
                $scope.cars.push({ model: model, manufacturer: manufacturer });
            });
        });
    });
}]);