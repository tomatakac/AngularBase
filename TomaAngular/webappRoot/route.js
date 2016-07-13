(function () {
    'use strict';

    angular.module('app')
        .config(['$routeProvider', routeConfigurator]);

    function routeConfigurator($routeProvider) {
        var routes = {
            '/': {
                templateUrl: 'webappRoot/views/home/home.view.html',
                title: 'demo',
                controller: 'home'
            }
            

        };

        for (var path in routes) {
            $routeProvider.when(path, routes[path]);
        }

        $routeProvider.otherwise({ redirectTo: '/' });
    }

})();