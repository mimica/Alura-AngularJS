//
// Directive: https://docs.angularjs.org/guide/directive
//
// Filter: https://docs.angularjs.org/api/ng/filter/filter
//
angular.module('minhasDiretivas', ['meusServicos'])
.directive('meuPainel', function () {

	// DDO : Directive Definition Object
	var ddo = {};

	ddo.restrict = "AE";

	ddo.scope = {
		titulo: '@'
	};

	ddo.transclude = true;

	ddo.templateUrl = 'js/directives/meu-painel.html';

	return ddo;
})
.directive('minhaFoto', function() {

	var ddo = {};

	ddo.restrict = "AE";

	ddo.scope = {
		titulo: '@',
		url: '@'
	};

	ddo.template = '<img class="img-responsive center-block" src="{{ url }}" alt="{{ titulo }}">';

	return ddo;
})
.directive('meuBotaoPerigo', function() {

	var ddo = {};

	ddo.restrict = "E";

	ddo.scope = {
		nome: '@',
		acao: '&'
	};

	ddo.template = '<button ng-click="acao(foto)" class="btn btn-danger btn-block">{{ nome }}</button>';

	return ddo;
})
.directive('meuFocus', function() {

	var ddo = {};

	ddo.restrict = "A";

	/*
	ddo.scope = {
		focado : '='	// comunicação bi-direcional
	};
	*/

	ddo.link = function(scope, element) {

		/*
		// watch tem um certo custo computacional
		scope.$watch('focado', function(novoValor, valorAntigo) {
			//alert('mudou');
			if (scope.focado) {
				// manipulate DOM

				// with jQuery
				//element.focus();

				// with jQLite
				element[0].focus();
				scope.focado = false;
			}
		});
		*/

		scope.$on('fotoCadastrada', function() {
			// with jQLite
			element[0].focus();
			scope.focado = false;
		});
	};

	return ddo;
})
.directive('meusTitulos', function() {
	
	var ddo = {};

	ddo.restrict = "E";

	ddo.template = '<ul><li ng-repeat="titulo in titulos">{{ titulo }}</li></ul>';

	ddo.controller = function($scope, recursoFoto) {
		recursoFoto.query(function(fotos) {
			$scope.titulos = fotos.map(function(foto) {
				return foto.titulo;
			});
		});
	};

	return ddo;
});