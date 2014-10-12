'use strict';

angular.module('chatClientApp')
    .controller('MessagesCtrl', function ($scope, $rootScope, $timeout, Message, SelectedTopic, User, pollInterval) {
        var createdMessages = [];
        var pollTimeout;
        var messageQueryParams = {};

        $scope.user = User.getUser();
        $scope.topic = SelectedTopic.getSelectedTopic();

        if ($scope.topic) {
            messageQueryParams = {topic_id: $scope.topic.id};

            $scope.message = newMessage();
            $scope.messages = Message.query(messageQueryParams, function() {
                // Start polling messages after successfull initial load
                pollMessages();
            });
        }

        var pollMessages = function() {
            pollTimeout = $timeout(function() {
                Message.query(messageQueryParams, function(messages) {
                    $scope.messages = messages;
                    pollMessages();
                });
            }, pollInterval);
        };

        $rootScope.$on("$routeChangeStart", function() {
            // Stop polling when route changes
            $timeout.cancel(pollTimeout);
        });

        $scope.save = function(message) {
            if (!$scope.message.id) {
                createdMessages.push($scope.message);
            }

            $scope.message.$save();

            $scope.messages.push($scope.message);

            $scope.message = newMessage();
        }

        $scope.delete = function(message) {
            Message.delete(message, function() {
                _.remove($scope.messages, message);
            });
        }

        $scope.createdMessage = function(message) {
            var index = _.findIndex(createdMessages, {id: message.id});

            return index >= 0;
        }

        function newMessage() {
            var message = new Message();
            message._topic = {id: $scope.topic.id};

            if ($scope.user) {
                message.user = $scope.user.name;
                message.email = $scope.user.email;
            }

            return message;
        }
    });
