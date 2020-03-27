describe('ListarInvestimentosController tests', function() {
    var $controller, $rootScope, $scope, ApiRestService, $location;

    beforeEach(angular.mock.module('plataforma-investimentos'));
    beforeEach(angular.mock.module(function($provide) {
        ApiRestService = {
            buscarInvestimentos: function () {
                return [{
                    "nome": "INVESTIMENTO III",
                    "objetivo": "Abrir meu próprio negócio",
                    "saldoTotalDisponivel": 26000,
                    "indicadorCarencia": "N",
                    "acoes": [
                        {
                            "id": "1",
                            "nome": "BBAS3",
                            "percentual": 41.1
                        },
                        {
                            "id": "2",
                            "nome": "VALE3",
                            "percentual": 22.43
                        },
                        {
                            "id": "3",
                            "nome": "PETR4",
                            "percentual": 26.12
                        },
                        {
                            "id": "5",
                            "nome": "OIBR3",
                            "percentual": 10.35
                        }
                    ]
                },
                    {
                        "nome": "INVESTIMENTO IV",
                        "objetivo": "Investimento em carencia",
                        "saldoTotalDisponivel": 44000,
                        "indicadorCarencia": "S",
                        "acoes": [
                            {
                                "id": "1",
                                "nome": "BBAS3",
                                "percentual": 41.1
                            },
                            {
                                "id": "2",
                                "nome": "VALE3",
                                "percentual": 22.43
                            },
                            {
                                "id": "3",
                                "nome": "PETR4",
                                "percentual": 26.12
                            },
                            {
                                "id": "5",
                                "nome": "OIBR3",
                                "percentual": 10.35
                            }
                        ]
                    }];
            }
        };
        $provide.value('ApiRestService', ApiRestService);
    }));

    beforeEach(inject(function(_$controller_, _$rootScope_, _$location_, $injector) {
        $rootScope = _$rootScope_;
        $scope = _$rootScope_.$new();
        ApiRestService = $injector.get('ApiRestService');
        $location = _$location_;

        spyOn(ApiRestService, 'buscarInvestimentos');
        spyOn($location, 'path');

        $controller = _$controller_('ListarInvestimentosController', {
            $rootScope: $rootScope,
            $scope: $scope,
            ApiRestService: ApiRestService,
            $location: $location
        })
    }));

    it('chamar função para trocar a tela caso seja um investimento sem carência', function() {
        investimento = {
            indicadorCarencia: 'N'
        };
        $scope.abrirDetalhe(investimento);
        expect($rootScope.investimento).toBeDefined();
        expect($location.path).toHaveBeenCalled();
    });

    it('fazer nada caso seja um investimento com carência', function() {
        investimento = {
            indicadorCarencia: 'S'
        };
        $scope.abrirDetalhe(investimento);
        expect($rootScope.investimento).not.toBeDefined();
        expect($location.path).not.toHaveBeenCalled();
    });

    it('chamar função da service para funcionamento da tela', function() {
        expect(ApiRestService.buscarInvestimentos).toHaveBeenCalled();
    })
});
