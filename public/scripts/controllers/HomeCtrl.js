angular.module('TradeApp').controller('HomeCtrl', ['config', 'ApiService', '$http', '$scope', function (config, ApiService, $http, $scope) {

    $scope.currentPage = 1;
    $scope.rates = [];

    var getPageConfig = function () {
        ApiService.getTradeSet($scope.currentPage).then(function (data) {
            $scope.totalItems = data.count;
        });
    };

    $scope.getTradeSet = function () {
        ApiService.getTradeSet($scope.currentPage).then(function (data) {
            $scope.trades = data.results;
        });
    };

    $scope.pageChanged = function () {
        $scope.getTradeSet();
    };


    $scope.tabActive = function ($state) {
        return $state.includes("home");
    };

    $scope.create_trade = function () {
        angular.element("#createTrade").modal("show");
    };

    $scope.edit_trade = function () {
        angular.element("#editTrade").modal("show");
    };

    $scope.delete_trade = function () {
        angular.element("#deleteTrade").modal("show");
    };

    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };

    $scope.getTradeSet();
    getPageConfig();

    this.getAllCurrencies = function () {
        ApiService.getAllCurrencies().then(function (data) {
            $scope.currencies = {};
            var count = 1;
            for (i in data.rates)
            {
                $scope.currencies[count] = i;
                count++;
            }
        });
    };
    
    this.getAllCurrencies();

    this.getRate = function (initial_rate, target_rate) {
        ApiService.getRate(initial_rate, target_rate).then(function (data) {
            alert(data.rates.GBP);
        });
    };

}]);