define([
    'jquery',
    'underscore',
    'backbone',
    'bog.maps'
], function ($, _, Backbone, maps) {
    return Backbone.View.extend({
        render: function () {
            var map = maps.addMapToCanvas(document.getElementById("site-header"));
        }
    });
});