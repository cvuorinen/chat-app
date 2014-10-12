// Chat App
angular.module('chatClientApp', [
    'ionic',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'angularMoment',
    'angular-md5'
])

    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if(window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if(window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .value('pollInterval', 3000)

    .config(function($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            // setup an abstract state for the tabs directive
            .state('tab', {
                url: "/tab",
                abstract: true,
                templateUrl: "templates/tabs.html"
            })

            // Each tab has its own nav history stack:

            .state('tab.main', {
                url: '/main',
                views: {
                    'tab-main': {
                        templateUrl: 'templates/main.html',
                        controller: 'MainCtrl'
                    }
                }
            })

            .state('tab.topics', {
                url: '/topics',
                views: {
                    'tab-topics': {
                        templateUrl: 'templates/topics.html',
                        controller: 'TopicsCtrl'
                    }
                }
            })
            .state('tab.topic-form', {
                url: '/topics/:id',
                views: {
                    'tab-topics': {
                        templateUrl: 'templates/topic-form.html',
                        controller: 'TopicFormCtrl'
                    }
                }
            })

            .state('tab.messages', {
                url: '/messages',
                views: {
                    'tab-messages': {
                        templateUrl: 'templates/messages.html',
                        controller: 'MessagesCtrl'
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/main');

    });

