define([
    'jquery',
    'underscore',
    'backbone',
    'postal',
    'bog',

    'views/home/view',
    'views/events/view',
    'views/event/view'
], function ($, _, Backbone, postal, bog, home_view, events_view, event_view) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'home',
            'events': 'events',
            'event/:id': 'event'
        }
    });

    var initialize = function () {
        window.app = 'pub';
        var app_router = new AppRouter();
        var container = $('#page-container');

        app_router.on('route:home', function () {
            new home_view({ el: container });
        });
        app_router.on('route:events', function () {
            new events_view({ el: container });
        });
        app_router.on('route:event', function (id) {
            new event_view({ el: container }, id);
        });


        app_router.on('route:defaultAction', function (actions) {
            console.log('No route:', actions);
        });

        Backbone.history.start();

    };

    return {
        initialize: initialize
    };
});