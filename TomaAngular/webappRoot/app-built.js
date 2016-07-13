(function () {
    'use strict';

    angular.module('app', ['ngRoute']);

    
})();
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
(function () {
	'use strict';

	angular.module('app').controller('home', ['$scope', '$rootScope', home]);

	function home($scope) {

	    $scope.message = "Zdravo Tomo.";

	}

})();