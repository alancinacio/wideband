'use strict';

var app = angular.module('app', ['ngRoute', 'firebase']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            template: '<h1>angular init</h1>'
        })
        .otherwise('/home');;
});