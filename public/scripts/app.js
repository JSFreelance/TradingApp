//app config
var routerApp = angular.module('TradeApp', ['ui.router','ui.bootstrap',  'nvd3', 'gridster']);

routerApp.run([
    "$rootScope", "$state", "$stateParams", function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        return $rootScope.$stateParams = $stateParams;
    }
]);

//app states
routerApp.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller:'HomeCtrl'
        })
        .state('charts', {
            url: '/charts',
            templateUrl: 'views/charts.html',
            controller: 'ChartsCtrl'
        });
    
    $urlRouterProvider.otherwise('/home');

});
