angular.module('plataforma-investimentos')
    .factory('ApiRestService', ['$http', function($http) {
    return {
        buscarInvestimentos: function(callback) {
            $http.get('http://www.mocky.io/v2/5e76797e2f0000f057986099').then(response => {
                callback(response.data.response.data.listaInvestimentos);
            }).catch(() => {
                callback([
                    {
                        "nome": "INVESTIMENTO I",
                        "objetivo": "Minha aposentadoria",
                        "saldoTotalDisponivel": 39321.29,
                        "indicadorCarencia": "N",
                        "acoes": [
                            {
                                "id": "1",
                                "nome": "BBAS3",
                                "percentual": 28.1
                            },
                            {
                                "id": "2",
                                "nome": "VALE3",
                                "percentual": 20.71
                            },
                            {
                                "id": "3",
                                "nome": "PETR4",
                                "percentual": 21.63
                            },
                            {
                                "id": "4",
                                "nome": "CMIG3",
                                "percentual": 12.41
                            },
                            {
                                "id": "5",
                                "nome": "OIBR3",
                                "percentual": 17.15
                            }
                        ]
                    },
                    {
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
                    },
                    {
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
                    }
                ]);
            });
        }
    }

}]);
