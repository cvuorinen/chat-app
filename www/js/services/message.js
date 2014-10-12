'use strict';

angular.module('chatClientApp')
    .service('Message', function Message($resource, apiHost) {
        return $resource(apiHost + '/api/messages/:id');
    });
