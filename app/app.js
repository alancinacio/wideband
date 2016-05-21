'use strict';

angular
    .module('app', ['ngRoute', 'firebase', 'ngMaterial'])
    .config(mainConfig);

mainConfig.$inject = ['$routeProvider', '$firebaseRefProvider'];

function mainConfig($routeProvider, $firebaseRefProvider) {
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