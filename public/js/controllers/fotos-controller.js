
angular.module('alurapic').controller('FotosController', function($scope, $http) {

	$scope.fotos = [];
	$scope.filtro = '';
	
	$http.get('v1/fotos')
		.success(function (result) {
			$scope.fotos = result;
		})
		.error(function (error) {
			console.log("Error retriving data:"+error);
		});

});