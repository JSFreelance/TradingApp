// Manage delete trade modal form ui and logic
angular.module('TradeApp').controller('DeleteCtrl', ['ApiService', '$scope','$uibModalInstance', 'modalScope', function(ApiService, $scope, $uibModalInstance, modalScope) {
    
    $scope.ok = function () {
        ApiService.deleteTrade(modalScope.currentItem(), modalScope.reloadResultSet);
        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
    
}]);
