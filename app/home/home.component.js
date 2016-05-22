angular.module('app').component('home', {
    templateUrl: '/home/home.html',
    bindings: {
        user: "=",
        sessions: "="
    },
    controller: welcomeController
});

welcomeController.$inject = ['$location'];

function welcomeController($location) {
    
    this.createSession = function () {
        var session = {
            name: "test",
            host: this.user,
            players: []
        }
        this.sessions.$add(session);
    }
    
}