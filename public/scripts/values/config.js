angular.module('TradeApp').value('config', {
    "trade_url": "http://localhost:8000/api/1.0/trades/",
    "currency_url":"http://localhost:8000/api/1.0/currencies/",
    "rate_provider_url":"http://api.fixer.io/latest"
});
