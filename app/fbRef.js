angular
    .module('app')
    .factory('fbRef', fbReferences)
    
fbReferences.$inject = ['$firebaseRef', '$firebaseAuthService'];

function fbReferences($firebaseRef, $firebaseAuthService) {
    return {
        getSessionsRef: function(){
            return $firebaseRef
                .default
                .child('sessions');
        },
    }
}