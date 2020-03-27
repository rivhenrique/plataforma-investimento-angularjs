describe('DetalheInvestimentoController tests', function() {
    var $controller, $rootScope, $scope, $modal, $location;

    var item = {
        "nome": "INVESTIMENTO II",
        "objetivo": "Viagem dos sonhos",
        "saldoTotalDisponivel": 7300,
        "indicadorCarencia": "N",
        "acoes": [
            {
                "id": "1",
                "nome": "BBAS3",
                "percentual": 35.81
            },
            {
                "id": "2",
                "nome": "VALE3",
                "percentual": 26.42
            },
            {
                "id": "3",
                "nome": "PETR4",
                "percentual": 37.77
            }
        ]
    };

    beforeEach(angular.mock.module('plataforma-investimentos'));

    beforeEach(inject(function(_$controller_, _$rootScope_, _$modal_, _$location_, $compile) {
        $rootScope = _$rootScope_;
        $scope = _$rootScope_.$new();
        $modal = _$modal_;
        $location = _$location_;

        spyOn($location, 'path');
        spyOn($modal, 'open');
        $rootScope.investimento = item;

        var element = angular.element(
            '<form name="formulario">' +
            '<input ng-model="valoresResgateAcoes[$index]" name="resgate" integer />' +
            '</form>'
        );
        $scope.model = { itemX: null };
        $compile(element)($scope);

        $controller = _$controller_('DetalheInvestimentoController', {
            $rootScope: $rootScope,
            $scope: $scope,
            $modal: $modal,
            $location: $location
        });
    }));

    it('deve atualizar a validade do formulário para verdadeiro', function() {
        $scope.valoresResgateAcoes[0] = 15.40;
        $scope.validarFormulario(item, 0);
        expect($scope.valorResgastes).toBe(15.40);
        expect($scope.formulario.$valid).toBeTrue();
    });

    it('deve atualizar a validade do formulário para false', function() {
        $scope.valoresResgateAcoes[0] = 10000.40;
        $scope.validarFormulario(item, 0);
        expect($scope.formulario.$valid).toBeFalse();
    });

    it('deve abrir modal quando o formulário for válido', function() {
        $scope.valorResgastes = 10;
        $scope.submeter();
        expect($modal.open).toHaveBeenCalled();
    });

    it('não deve abrir modal quando o formulário for inválido', function() {
        $scope.valorResgastes = 10;
        $scope.valoresResgateAcoes[0] = 10000.40;
        $scope.validarFormulario(item, 0);
        $scope.submeter();
        expect($modal.open).not.toHaveBeenCalled();
    });
});
