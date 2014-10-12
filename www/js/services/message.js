'use strict';

angular.module('chatClientApp')
    .service('Message', function Message($resource) {
        return $resource('/api/messages/:id');
    });
