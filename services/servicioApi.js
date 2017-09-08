angular.module('testService', [])
    .factory('testRequest', function ($http) {
        var ruta = "https://jsonplaceholder.typicode.com/users";
        return {
            post: function () {
                global = $http.get(ruta);
                //console.log(global);
                return global;
            }
        }
    });