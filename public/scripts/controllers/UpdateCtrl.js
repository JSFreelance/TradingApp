angular.module('TradeApp').controller('UpdateCtrl',  ['ApiService', '$scope','$uibModalInstance', 'modalScope', function(ApiService, $scope, $uibModalInstance, modalScope) {

    ApiService.getTrade(modalScope.currentItem()).then(function (data) {
        $scope.updateData = data;

        $scope.$watch("updateData['sell_amount']", function() {
            $scope.updateData['buy_amount'] = $scope.updateData['rate'] * $scope.updateData['sell_amount']  ;
        });
    });

    $scope.ok = function () {
        ApiService.updateTrade(modalScope.currentItem(), $scope.updateData, modalScope.reloadResultSet);
        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

}]);