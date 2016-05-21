angular.module('app').component('home', {
   templateUrl: '/home/home.html',
   controller: welcomeController
});

welcomeController.$inject = ['$firebaseAuthService', '$location'];

function welcomeController($firebaseAuthService, $location) {
    this.annonLogin = function() {
           $firebaseAuthService.$authAnonymously()
               .then((function() {
                   console.log('logged in anonymously', this.sessionId);
               }).bind(this))
               .catch(function() {
                   console.log('nope');
               })
           
       }
}