angular.module('carComparisonApp.services', [])
.service('carService', ['$http', function ($http) {

    var url = "https://api.edmunds.com/api/vehicle/v2/makes";

    this.get = {
        async: function () {
            var promise = $http.get(url + "?api_key=ba4ht8z3ramrdz2zfsku5fff")
                               .then(function (response) {
                                    return response.data.makes;
                               });
            return promise;
        }
    };
}]);