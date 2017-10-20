var app = angular.module('myApp', ['ui.router']);
app.config(function ($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('tab', {
            url: '/tab:id',
            templateUrl: './App/View/tab.html',
            controller: 'tabController'
        });
    $urlRouterProvider.otherwise('/tab1')
});