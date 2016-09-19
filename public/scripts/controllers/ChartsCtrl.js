// Manage delete trade modal form ui and logic
angular.module('TradeApp').controller('ChartsCtrl', ['$scope','$timeout','ChartService', function($scope, $timeout, ChartService) {
        $scope.gridsterOptions = {
        margins: [20, 20],
        columns: 4,
        mobileModeEnabled: false,
        draggable: {
            handle: 'p'
        },
        resizable: {
            enabled: true,
            handles: ['n', 'e', 's', 'w', 'ne', 'se', 'sw', 'nw'],

            // optional callback fired when resize is started
            start: function (event, $element, widget) {
            },

            // optional callback fired when item is resized,
            resize: function (event, $element, widget) {
                if (widget.chart.api) widget.chart.api.update();
            },

            // optional callback fired when item is finished resizing
            stop: function (event, $element, widget) {
                $timeout(function () {
                    if (widget.chart.api) widget.chart.api.update();
                }, 400)
            }
        },
    };

    $scope.dashboard = {
        widgets: [{
            col: 0,
            row: 2,
            sizeY: 2,
            sizeX: 3,
            name: "Sell amount (USD)",
            chart: {
                options: ChartService.lineChart.options(),
                data: ChartService.lineChart.data(),
                api: {}
            }
        }, {
            col: 4,
            row: 2,
            sizeY: 1,
            sizeX: 1,
            name: "Top sold currencies",
            chart: {
                options: ChartService.pieChart.options(),
                data: ChartService.pieChart.data(),
                api: {}
            }
        }, {
            col: 4,
            row: 2,
            sizeY: 1,
            sizeX: 1,
            name: "Most bought currencies",
            chart: {
                options: ChartService.pieChart.options(),
                data: ChartService.pieChart.data(),
                api: {}
            }
        }]
    };

    // We want to manually handle `window.resize` event in each directive.
    // So that we emulate `resize` event using $broadcast method and internally subscribe to this event in each directive
    // Define event handler
    $scope.events = {
        resize: function (e, scope) {
            $timeout(function () {
                scope.api.update()
            }, 200)
        }
    };
    angular.element(window).on('resize', function (e) {
        $scope.$broadcast('resize');
    });

    // We want to hide the charts until the grid will be created and all widths and heights will be defined.
    // So that use `visible` property in config attribute
    $scope.config = {
        visible: false
    };
    $timeout(function () {
        $scope.config.visible = true;
    }, 200);
}]);
