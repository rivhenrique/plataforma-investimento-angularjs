angular.module('plataforma-investimentos')
    .controller('ListarInvestimentosController', ['$rootScope', '$scope', 'ApiRestService', '$location', function ($rootScope, $scope, ApiRestService, $location) {

    $scope.abrirDetalhe = (investimento) => {
        if ( investimento.indicadorCarencia === 'N' ) {
            $rootScope.investimento = investimento;
            $location.path('/investimento');
        }
    };

    ApiRestService.buscarInvestimentos(response => {
        $scope.listaInvestimentos = response;
    });

}]);

