'use strict';

angular.module('chatClientApp')
    .controller('TopicFormCtrl', function ($scope, $stateParams, $location, Topic) {
        if ($stateParams.id == "new") {
            $scope.topic = new Topic();
        } else {
            $scope.topic = Topic.get({id: $stateParams.id});
        }

        $scope.save = function() {
            if ($scope.topic.id) {
                //Topic.update({id: $scope.topic.id}, $scope.topic);
                Topic.update({}, $scope.topic);
            } else {
                $scope.topic.$save();
            }

            $location.path('/tab/topics');
        };
    });
