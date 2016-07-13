angular.module('TradeApp').controller('AboutCtrl', ['ApiService', function(ApiService) {
    var data = {
        "sell_amount": 4444.123,
        "buy_amount": 5555.236,
        "rate": 1.265,
        "sell_currency": "EUR",
        "buy_currency": "GBP"
    };
}]);
