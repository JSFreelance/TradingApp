//here are defined all application states
var routerApp = angular.module('TradeApp', ['ui.router','ui.bootstrap']);

routerApp.run([
    "$rootScope", "$state", "$stateParams", function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        return $rootScope.$stateParams = $stateParams;
    }
]);

routerApp.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller:'HomeCtrl'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
        });

    $urlRouterProvider.otherwise('/home');

});
