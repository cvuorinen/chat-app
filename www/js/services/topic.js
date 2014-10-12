'use strict';

angular.module('chatClientApp')
    .service('Topic', function Topic($resource, apiHost) {
        return $resource(apiHost + '/api/topics/:id', {}, {
            update: {
                method: 'PUT'
            }
        });
    });
