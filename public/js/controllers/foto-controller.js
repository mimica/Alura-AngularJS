angular.module('alurapic').controller('FotoController', function ($scope, recursoFoto, $routeParams) {
	
	$scope.foto = {};
	$scope.mensagem = '';
	console.log($routeParams.fotoId);

	

	if ($routeParams.fotoId)
	{
		recursoFoto.get({fotoId : $routeParams.fotoId}, function(foto) {
			$scope.foto = foto;
		}, function (error) {
			console.log(error);
			$scope.mensagem = 'Não foi possível obter a foto.';
		});
	}
	/*
	if ($routeParams.fotoId) {
		$http.get('v1/fotos/'+$routeParams.fotoId)
			.success(function(foto) {
				$scope.foto = foto;
			})
			.error(function(error) {
				$scope.mensagem = 'Não foi possível obter a foto com Id '+$routeParams.fotoId;
			});
	}
	*/

	$scope.submeter = function () {
		if ($scope.formulario.$valid)
		{
			if ($scope.foto._id)
			{
				recursoFoto.update({fotoId : $scope.foto._id}, $scope.foto, function() {
					$scope.foto = {};
						
					//Veja que ao limparmos o formulário, automaticamente nossa validação é disparada. Contudo, se você quiser que isso não acontece, logo depois de limpar o formulário faça:
					$scope.formulario.$setPristine();

					$scope.mensagem = 'Foto alterada com sucesso.';
					console.log('Foto alterada com sucesso.');
				}, function (error) {
					$scope.mensagem = 'Não foi possível alterar a foto.';
					console.log(error);
				});

				/*
				// Update
				$http.put('v1/fotos/' + $scope.foto._id, $scope.foto)
					.success(function () {
						$scope.foto = {};
						
						//Veja que ao limparmos o formulário, automaticamente nossa validação é disparada. Contudo, se você quiser que isso não acontece, logo depois de limpar o formulário faça:
						$scope.formulario.$setPristine();

						$scope.mensagem = 'Foto alterada com sucesso.';
						console.log('Foto alterada com sucesso.');
					})
					.error(function (error) {
						$scope.mensagem = 'Não foi alterada a foto.';
						console.log(error);
					});
				*/

			}
			else {
				// insert

				//recursoFoto.

				/*
				$http.post('v1/fotos', $scope.foto)
					.success(function () {
						$scope.foto = {};

						//Veja que ao limparmos o formulário, automaticamente nossa validação é disparada. Contudo, se você quiser que isso não acontece, logo depois de limpar o formulário faça:
						$scope.formulario.$setPristine();

						$scope.mensagem = 'Foto incluída com sucesso.';
						console.log('Foto cadastrada com sucesso.');
					})
					.error(function (error) {
						$scope.mensagem = 'Não foi incluir a foto.';
						console.log(error);
					});
				*/
			}
		}
	};

});