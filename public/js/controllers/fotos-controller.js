
angular.module('alurapic').controller('FotosController', function($scope, recursoFoto) {

	$scope.fotos = [];
	$scope.filtro = '';
	$scope.mensagem = '';
	
	recursoFoto.query(function(fotos) {
		$scope.fotos = fotos;
	}, function (error) {
		console.log(error);
	});


	/*
	$http.get('v1/fotos')
		.success(function (result) {
			$scope.fotos = result;
		})
		.error(function (error) {
			console.log("Error retriving data:"+error);
		});
		*/

	

	$scope.remover = function (foto) {

		// Remove a foto
		console.log(foto);

		recursoFoto.delete({fotoId : foto._id}, function() {
			// Find the foto index
			var indiceFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indiceFoto, 1);
			$scope.mensagem = 'Foto ' + foto.titulo + ' for removida com sucesso.';
		}, function (error) {
			console.log(error);
			$scope.mensagem = 'Não foi possível remover a foto ' + foto.titulo + '.';
		});		
	};
});