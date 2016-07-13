(function () {
	'use strict';

	angular.module('app').controller('home', ['$scope', '$rootScope', home]);

	function home($scope) {

	    $scope.message = "Zdravo Tomo.";

	}

})();