'use strict';

angular.module('chatClientApp')
    .controller('UserCtrl', function ($scope, $location, User) {
        $scope.user = User.getUser();
        $scope.submitted = false;

        $scope.setUser = function() {
            $scope.submitted = true;

            if ($scope.user.name) {
                User.setUser($scope.user);

                $location.path('/tab/topics');
            }
        };
    });
