angular.module('timeApp')
    .directive('showTime', function($interval) {
        return {
            restrict: 'E',
            template: '<span> {{time | date:"mediumTime"}} </span>',
            scope: {

            },
            link: function(scope, elem, attrs) {
                scope.time = new Date();

                $interval(function() {
                    scope.time = new Date();
                }, 1000);
            }
        };
    });
