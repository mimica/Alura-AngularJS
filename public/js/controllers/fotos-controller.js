
angular.module('alurapic').controller('FotosController', function($scope, $http) {

	$scope.fotos = [];
	$scope.filtro = '';
	$scope.mensagem = '';
	
	$http.get('v1/fotos')
		.success(function (result) {
			$scope.fotos = result;
		})
		.error(function (error) {
			console.log("Error retriving data:"+error);
		});

	$scope.remover = function (foto) {
		// Remove a foto
		console.log(foto);
		$http.delete('v1/fotos/'+foto._id)
			.success(function() {
				console.log('Foto ' + foto.titulo + ' for removida com sucesso.');

				// Find the foto index
				var indiceFoto = $scope.fotos.indexOf(foto);
				$scope.fotos.splice(indiceFoto, 1);

				$scope.mensagem = 'Foto ' + foto.titulo + ' for removida com sucesso.';
			})
			.error(function(error) {
				console.log(error);
				console.log('Não foi possível remover a foto ' + foto.titulo + '.');

				$scope.mensagem = 'Não foi possível remover a foto ' + foto.titulo + '.';
			});
	};
});