'use strict';

angular
    .module('app', ['ngRoute', 'firebase', 'ngMaterial'])
    .config(mainConfig);

mainConfig.$inject = ['$routeProvider', '$firebaseRefProvider'];

function mainConfig($routeProvider, $firebaseRefProvider) {
    $routeProvider
        .when('/', {
            template: '<home user="$resolve.register" sessions="$resolve.sessions"></home>',
            title: 'home',
            resolve: {
                register: function ($firebaseAuthService) {
                    return $firebaseAuthService.$authAnonymously()
                        .then(function (authData) {
                            return authData.uid;
                        });
                },
                sessions: function (fbRef, $firebaseArray) {
                    var query = fbRef.getSessionsRef().orderByChild("name");
                    return $firebaseArray(query).$loaded();
                }
            }
        })
        .otherwise({
            redirectTo: '/'
        });

    $firebaseRefProvider
        .registerUrl('https://wideband2.firebaseio.com/');
};