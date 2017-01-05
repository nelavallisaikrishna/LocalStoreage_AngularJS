
var app = angular.module('myApp', ['localStorage']);



app.controller('DemoCtrl', function ($scope, $store) {

    $scope.regstr = {};

    $store.bind($scope, 'regstr');

    $scope.clearTest = function(){
        $store.remove('regstr');
    };

    });



























