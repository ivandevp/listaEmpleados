var app = angular.module('listaDatos', ['testService', 'ui.bootstrap']);

app.controller('testController', ['$scope', 'testRequest', '$uibModal', obtieneDatos]);

function obtieneDatos($scope, testRequest, $uibModal) {
    $scope.obtenerNombres = function () {
        testRequest.post().then(function (response) {
            $scope.posts = response.data;
            console.log($scope.posts);
        });
    }

}