angular.module('alurapic').controller('FotoController', function ($scope, recursoFoto, cadastroDeFotos, $routeParams) {
	
	$scope.foto = {};
	$scope.mensagem = '';
	console.log($routeParams.fotoId);

	
	if ($routeParams.fotoId)
	{
		// call a service
		recursoFoto.get({fotoId : $routeParams.fotoId}, function(foto) {
			$scope.foto = foto;
		}, function (error) {
			console.log(error);
			$scope.mensagem = 'Não foi possível obter a foto.';
		});
	}

	$scope.submeter = function () {
		
		if ($scope.formulario.$valid)
		{
			// call a service
			cadastroDeFotos.cadastrar($scope.foto)
				.then(function (dados) {
					$scope.mensagem = dados.mensagem;

					//Veja que ao limparmos o formulário, automaticamente nossa validação é disparada. Contudo, se você quiser que isso não acontece, logo depois de limpar o formulário faça:
					$scope.formulario.$setPristine();

					// limpa o formulário se for inclusão
					if (dados.inclusao)
						$scope.foto = {};
				})
				.catch(function(error) {
					$scope.mensagem = error.mensagem;
				});
		}
	};

});