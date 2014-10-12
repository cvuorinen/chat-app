'use strict';

angular.module('chatClientApp')
    .service('User', function User($cookies) {
        var user = {
            name: $cookies.userName,
            email: $cookies.userEmail
        };

        return {
            getUser: function() {
                return user;
            },
            setUser: function(newUser) {
                user = newUser;

                $cookies.userName = user.name;
                $cookies.userEmail = user.email;
            }
        };
    });
