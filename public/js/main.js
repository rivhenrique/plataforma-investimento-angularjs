angular.module('plataforma-investimentos', ['ngRoute', 'ui.bootstrap'])
    .config(function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider.when('/investimento', {
            templateUrl: 'partials/detalhe-investimento.html',
            controller: 'DetalheInvestimentoController'
        }).when('/investimentos', {
            templateUrl: 'partials/lista-investimento.html',
            controller: 'ListarInvestimentosController'
        }).otherwise({redirectTo: '/investimentos'});
    });
