angular.module('meusServicos', ['ngResource'])
.factory('recursoFoto', function($resource) {

	// Return an JS object
	return $resource('/v1/fotos/:fotoId', null, {
		update : {
			method: 'PUT'
		}
	});


})
.factory('cadastroDeFotos', function(recursoFoto, $q, $rootScope) {

	// $q : permite criar promisses

	// Return a JS object
	var servico = {};

	var evento = 'fotoCadastrada';

	servico.cadastrar = function(foto)
	{
		return $q(function(resolve, reject)
		{
			if (foto._id)
			{
				// Update
				recursoFoto.update({fotoId: foto._id}, foto, function() {
					
					// para Edicao e Inclusão : dispara o evento
					$rootScope.$broadcast(evento);

					resolve({
						mensagem : 'Foto ' + foto.titulo + ' atualizada com sucesso!',
						inclusao : false
					});
				}, function(error) {
					console.log(error);
					reject({
						mensagem : 'Não foi possível alterar a foto ' + foto.titulo
					});
				});
			}
			else
			{
				// Insert
				recursoFoto.save(foto, function() {
					
					// Dispara o evento
					$rootScope.$broadcast(evento);

					resolve({
						mensagem : 'Foto ' + foto.titulo + ' incluída com sucesso!',
						inclusao : true
					});
				}, function(error) {
					console.log(error);
					reject({
						mensagem : 'Não foi possível salvar a foto ' + foto.titulo
					});
				});
			}
		});

	};

	// Return an JS object
	return servico;
});