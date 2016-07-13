
angular.module('TradeApp').service('ApiService', ['$http', 'config', function($http, config) {

    this.getTradeSet = function (currentPage) {
        return this.httpPromise($http.get(config.trade_url +'?page='+currentPage),
            'trade set not found');
    };

    this.getTrade = function (id) {
        return this.httpPromise($http.get(config.trade_url+id), 'Trade not found');
    };

    this.createTrade = function (data) {
        return this.httpPromise($http.post(config.trade_url, data), 'Trade not created');
    };

    this.updateTrade = function (id, data) {
        return this.httpPromise($http.put(config.trade_url+id), 'Trade not updated');
    };

    this.deleteTrade = function (id) {
        return this.httpPromise($http.delete(config.trade_url+id), 'Trade not deleted');
    };

    this.getAllCurrencies = function () {
      return this.httpPromise($http.get(config.rate_provider_url), 'Currency set not found');
    };

    this.getRate = function (initial_currency, target_currency) {
        return this.httpPromise($http.get(config.rate_provider_url+'?symbols='+initial_currency+','+target_currency), 'Rate not found');
    };

    this.getCurrency = function (id) {
        return this.httpPromise($http.get(config.currency_url+id), 'Currency not found');
    };

    this.httpPromise = function (http_object, err) {
        return http_object.then(function (response) {
            return response.data;
        }, function () {
            alert(err);
        });
    };
}]);