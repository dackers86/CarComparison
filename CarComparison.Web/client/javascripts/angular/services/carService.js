angular.module('carComparisonApp.services', [])
.service('carService', ['$http', '$rootScope', function ($http, $rootScope) {

    var url = "https://api.edmunds.com/api/vehicle/v2/makes";

    var service = {

        cars: {},
        carFilter: {manufacturers: {}},

        SaveState: {
            async: function () {
                $http.get(url + "?api_key=ba4ht8z3ramrdz2zfsku5fff")
                    .then(function (response) {
                        sessionStorage.carStorage = angular.toJson(response.data.makes);
                        $rootScope.$emit('Loaded-Cars', response.data.makes);
                    });
            }
        },

        RestoreState: function () {
            var result = angular.fromJson(sessionStorage.carStorage);
            return result;
        },

        UpdateFilters: {
            async: function (filter) {
                carFilter = filter;
            }
        },
        
    }

    $rootScope.$on("savestate", service.SaveState.async());
    $rootScope.$on("restorestate", service.RestoreState);

    return service;
    
}]);