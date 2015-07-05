var app = angular.module('carComparisonApp', [   
    'carComparisonApp.services',
    'carComparisonApp.controllers.results',
    'carComparisonApp.controllers.filters'
]);

// run blocks
app.run(function ($rootScope) {
    window.onbeforeunload = function (event) {
        $rootScope.$broadcast('savestate');
    };
});