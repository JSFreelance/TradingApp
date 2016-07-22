
//API Access layer it uses angular $http for share data from API

angular.module('TradeApp').service('ApiService', ['$http', 'config', function($http, config) {

    //Retrieve current page trade list
    this.getTradeSet = function (currentPage, callback) {
        return this.httpPromise($http.get(config.trade_url +'?page='+currentPage),
            'trade set not found', callback);
    };

    //Retrieve a trade having id
    this.getTrade = function (id, callback) {
        return this.httpPromise($http.get(config.trade_url+id), 'Trade not found', callback);
    };

    //create a trade data: json
    this.createTrade = function (data, callback) {
        return this.httpPromise($http.post(config.trade_url, data), 'Trade not created', callback);
    };

    //update a trade data: json
    this.updateTrade = function (id, data, callback) {
        return this.httpPromise($http.put(config.trade_url+id+'/', data), 'Trade not updated', callback);
    };

    //delete trade
    this.deleteTrade = function (id, callback) {
        return this.httpPromise($http.delete(config.trade_url+id+'/'), 'Trade not deleted', callback);
    };

    //retrieve all currencies available at rate provider
    this.getAllCurrencies = function (callback) {
      return this.httpPromise($http.get(config.rate_provider_url), 'Currency set not found', callback);
    };

    //retrieve all rates having a base currency
    this.getRateSet = function (sellCurrency, callback) {
        return this.httpPromise($http.get(config.rate_provider_url+'?base='+sellCurrency), 'Rate set not found', callback);
    };

    this.httpPromise = function (http_object, err, callback) {
        return http_object.then(function (response) {
            if(callback != null){
                callback();
            }
            return response.data;
        }, function () {
            alert(err);
        });
    };
}]);