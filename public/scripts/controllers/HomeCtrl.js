angular.module('TradeApp').controller('HomeCtrl', ['config', 'ApiService', '$http', '$scope', function (config, ApiService, $http, $scope) {

    //TO DO: Refactor having naming conventions, test, etc.

    $scope.currentPage = 1;
    $scope.currentRate = null;

    var getPageConfig = function () {
        ApiService.getTradeSet($scope.currentPage).then(function (data) {
            $scope.totalItems = data.count;
        });
    };

    $scope.getTradeSet = function () {
        ApiService.getTradeSet($scope.currentPage).then(function (data) {
            getPageConfig();
            $scope.trades = data.results;
        });
    };

    $scope.pageChanged = function () {
        $scope.getTradeSet();
    };


    $scope.tabActive = function ($state) {
        return $state.includes("home");
    };

    $scope.createTrade = function () {
        angular.element("#createTradeForm").modal("show");
    };

    $scope.editTrade = function (id) {
        ApiService.getTrade(id).then(function (data) {
            $scope.editedTradeId = id;
            $scope.savedSellCurrency = data['sell_currency'];
            $scope.savedBuyCurrency = data['buy_currency'];
            $scope.savedSellAmount = data['sell_amount'];
            $scope.savedBuyAmount =data['buy_amount'];
            $scope.savedRate = data['rate'];
        });
        angular.element("#editTradeForm").modal("show");
    };

    $scope.deleteTrade = function (id) {
        $scope.tradeDeletedId = id;
        angular.element("#deleteTradeForm").modal("show");
    };

    $scope.deleteTradeConfirm = function () {
        ApiService.deleteTrade($scope.tradeDeletedId).then(function () {
            $scope.getTradeSet();
        });
    };

    $scope.saveEditedTrade = function () {
        var data = {
            'sell_currency':$scope.savedSellCurrency,
            'buy_currency': $scope.savedBuyCurrency,
            'sell_amount': $scope.savedSellAmount,
            'rate': $scope.savedRate,
            'buy_amount': $scope.savedBuyAmount
        };

        ApiService.updateTrade($scope.editedTradeId, data).then(function () {
            $scope.getTradeSet();
        });
    };

    $scope.$watch('savedSellAmount', function() {
        $scope.savedBuyAmount = $scope.savedSellAmount * $scope.savedRate;
    });

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
    
    $scope.updateBuyAmount = function () {
        if($scope.initialCurrency != null && $scope.targetCurrency != null && $scope.currentRate != null){
            if($scope.initialCurrency == $scope.targetCurrency){
                $scope.buyAmount = null;
            }else{
                $scope.buyAmount = $scope.currentRate * $scope.sellAmount;
            }
        }
    };

    $scope.getRate = function () {
        ApiService.getRate($scope.initialCurrency).then(function (data) {
            $scope.currentRate = data.rates[$scope.targetCurrency];
        });
    };

    $scope.$watch('initialCurrency', function() {
        $scope.updateRate();
    });

    $scope.$watch('currentRate', function() {
        $scope.updateRate();
    });

    $scope.updateRate = function () {
        if($scope.initialCurrency != null && $scope.targetCurrency != null){
            $scope.getRate();
            $scope.updateBuyAmount();
        }
    };

    $scope.newTrade = function () {
        var data = {
            "sell_amount": $scope.sellAmount,
            "buy_amount": $scope.buyAmount,
            "rate": $scope.currentRate,
            "sell_currency": $scope.initialCurrency,
            "buy_currency": $scope.targetCurrency
        };
        ApiService.createTrade(data).then(function () {
            $scope.getTradeSet();
        });
    };

}]);