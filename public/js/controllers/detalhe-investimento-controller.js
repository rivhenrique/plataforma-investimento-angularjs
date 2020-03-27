angular.module('plataforma-investimentos')
    .controller('DetalheInvestimentoController', ['$rootScope', '$scope', '$modal', '$location', function($rootScope, $scope, $modal, $location) {

    $scope.item = $rootScope.investimento;
    $scope.valoresResgateAcoes = new Array($scope.item.acoes.length).fill(0);

    $scope.validarFormulario = function(item, index) {
        atualizarValidadeValorResgate(item,index);
        $scope.valorResgastes = $scope.valoresResgateAcoes.reduce(function(x,y) {
            return Number(x) + Number(y);
        });
    };

    atualizarValidadeValorResgate = function(item, index) {
        if ( $scope.valoresResgateAcoes[index] > (item.saldoTotalDisponivel*item.acoes[index].percentual/100) ) {
            $scope.formulario.resgate.$setValidity('tetoResgate', false);
        } else {
            $scope.formulario.resgate.$setValidity('tetoResgate', true);
        }
    };

    $scope.submeter = function() {
        if ($scope.formulario.$valid && $scope.valorResgastes > 0) {
            var modalConfirmacao = $modal.open({
                templateUrl: 'partials/modal.html',
                controller: 'DetalheInvestimentoController',
                scope: $scope
            });
            $scope.fecharModal = function () {
                modalConfirmacao.dismiss('cancel');
                $location.path('/investimentos');
            };
        }
    };


}]);
