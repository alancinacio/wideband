'use strict';

angular
    .module('app', ['ngRoute', 'firebase'])
    .config(mainConfig);

mainConfig.$inject = [$routeProvider, $firebaseRefProvider];


function routeConfig($routeProvider, $firebaseRefProvider) {
    $routeProvider
        .when('/', {
            template: '<home></home>',
            title: 'home'
        })
        .otherwise({
            redirectTo: '/' 
        });
        
    $firebaseRefProvider
        .registerUrl('https://wideband2.firebaseio.com/');
};