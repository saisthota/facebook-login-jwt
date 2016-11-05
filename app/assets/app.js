var app = angular.module('LoginApp', ['ngRoute']);

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/home.html',
                controller: 'HomeCtrl'
            })

    }
]);

app.controller('HomeCtrl', function($scope) {
    $scope.init = function() {
        $scope.title = "hello";
    }
});