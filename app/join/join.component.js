angular
    .module('app')
   .component('join', {
       templateUrl: '/join/join.html',
       controller: joinController
   });
   
   joinController.$inject = ['$firebaseAuthService', '$location'];
   
   function joinController($firebaseAuthService, $location) {
       this.annonLogin = function() {
           $firebaseAuthService.$authAnonymously()
               .then(function() {
                   console.log('logged in anonymously');
               })
               .catch(function() {
                   console.log('nope');
               })
           
       }
   }