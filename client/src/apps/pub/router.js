define([ 'jquery', 'underscorejs', 'backbone', 'postal', 'bog',

    'views/home/view',
    'views/about/view',
    'views/events/view',
    'views/events-overview/view',
    'views/event/view',
    'views/donations-overview/view',
    'views/solicitations-overview/view'
], function ($, _, Backbone, postal, bog, home_view, about_view, events_view, events_overview_view, event_view, donations_overview_view, solicitations_overview_view) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'home',
            'about': 'about',
            'events': 'events',
            'events/about/': 'events-overview',
            'event/:id': 'event',
            'donations/about/': 'donations-overview',
            'solicitations/about/': 'solicitations-overview'
        }
    });

    var initialize = function () {
        window.app = 'pub';
        var app_router = new AppRouter();
        var container = $('#page-container');

        app_router.on('route:home', function () {
            new home_view({ el: container });
        });

        app_router.on('route:about', function () {
            new about_view({ el: container });
        });

        // ----------------------------------------------------------
        // EVENTS
        // ----------------------------------------------------------
        app_router.on('route:events', function () {
            new events_view({ el: container });
        });
        app_router.on('route:events-overview', function () {
            new events_overview_view({ el: container });
        });
        app_router.on('route:event', function (id) {
            new event_view({ el: container }, id);
        });

        // ----------------------------------------------------------
        // DONATIONS
        // ----------------------------------------------------------
        app_router.on('route:donations-overview', function () {
            new donations_overview_view({ el: container });
        });

        // ----------------------------------------------------------
        // SOLICITATIONS
        // ----------------------------------------------------------
        app_router.on('route:solicitations-overview', function () {
            new solicitations_overview_view({ el: container });
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