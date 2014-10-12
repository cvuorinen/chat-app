'use strict';

angular.module('chatClientApp')
    .service('SelectedTopic', function SelectedTopic() {
        var selectedTopic;

        return {
            setSelectedTopic: function(topic) {
                selectedTopic = topic;
            },
            getSelectedTopic: function() {
                return selectedTopic;
            }
        };
    });
