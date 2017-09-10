var app = angular.module('listaDatos', ['testService', 'ui.bootstrap','ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/mostrar-datos',{
			templateUrl: '../tablaUsuarios.html',
			controller: 'datosTabla'
		})
		.otherwise({
			redirectTo: '/'
		});
});
/*podemos hacer la funcion dentro del controller o podemos inyectarla, y junto con los parametros que va a ocupar*/
app.controller('testController', ['$scope', 'testRequest', '$uibModal','$location', obtieneDatos]);

function obtieneDatos($scope, testRequest, $uibModal, $location) {
	// $scope.id = "";
	// $scope.nombre = "";
	// $scope.userName = "";
	// $scope.email = "";
    $scope.obtenerNombres = function (path) {
        testRequest.post().then(function (response) {
        	// post tiene los datos
            $scope.post = response.data[0];
            sessionStorage.setItem('datos',
            		JSON.stringify({
            			id: $scope.post.id,
            			nombre: $scope.post.name,
            			userName: $scope.post.username,
            			email: $scope.post.email
            		})
            	);
		        // mostrar datos en la tabla
		    	$location.path(path);
        });
    }

}

app.controller('datosTabla',['$scope',mostrarDatos]);

function mostrarDatos($scope) {
	$scope.objetoUsuarios = JSON.parse(sessionStorage.getItem('datos'));
}
