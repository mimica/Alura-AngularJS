//
// https://docs.angularjs.org/guide/directive
//
angular.module('minhasDiretivas', [])
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
});