//Home page controller, handle trade list logic and ui
var TradeApp = angular.module('TradeApp');
TradeApp.controller('HomeCtrl', ['config', 'ApiService', '$scope', '$uibModal', function (config, ApiService, $scope, $uibModal) {

    //Set current page
    $scope.currentPage = 1;

    //Sets the home page configuration,
    $scope.getPageConfig = function () {
        ApiService.getTradeSet($scope.currentPage).then(function (data) {
            $scope.totalItems = data.count;
        });
    };

    //Get current page trade set
    $scope.getTradeSet = function () {
        ApiService.getTradeSet($scope.currentPage).then(function (data) {
            $scope.getPageConfig();
            $scope.trades = data.results;
        });
    };

    //init page config and trade set
    $scope.getTradeSet();
    $scope.getPageConfig();

    //on page changed
    $scope.pageChanged = function () {
        $scope.getTradeSet();
    };

    //Modal config for Create, Update and Delete trades
    
    $scope.open = function (op, id) {
        $scope.currentItem = id;

        var modalInstance = $uibModal.open({
            animation: false,
            templateUrl: 'views/'+op+'.html',
            controller: op+'Ctrl',
            resolve: {
                modalScope:{
                    currentItem: function () {
                        return $scope.currentItem;
                    },
                    reloadResultSet: function () {
                        return $scope.getTradeSet();
                    }
                }
            }
        });
    };
}]);