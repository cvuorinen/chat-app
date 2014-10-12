'use strict';

angular.module('chatClientApp')
    .service('Topic', function Topic($resource) {
        return $resource('/api/topics/:id', {}, {
            update: {
                method: 'PUT'
            }
        });
    });
