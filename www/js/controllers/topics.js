'use strict';

angular.module('chatClientApp')
    .controller('TopicsCtrl', function ($scope, $location, $window, Topic, SelectedTopic) {
        $scope.topics = Topic.query();

        $scope.delete = function(topic) {
            Topic.delete(topic, function() {
                _.remove($scope.topics, topic);
            },
            function() {
                $window.alert('Delete failed. Cannot delete topic which has messages.');
            });
        }

        $scope.selectTopic = function (topic) {
            SelectedTopic.setSelectedTopic(topic);

            $location.path('/tab/messages');
        }
    });
