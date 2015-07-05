
(function() {

    "use strict";

    angular.module('app').config(['$routeProvider', '$locationProvider', Routes]);

    function Routes($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'HomeController'
            });

        $locationProvider.html5Mode(false).hashPrefix('!');

    }

})();

