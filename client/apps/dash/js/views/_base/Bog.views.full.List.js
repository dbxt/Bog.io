/**
 * Created by dbaxter on 12/6/13.
 */
define(['jquery', 'underscore', 'backbone'], function ($, _, Backbone) {
    Bog.dash.views.full = {
        List: Backbone.View.extend({
            collection: null,
            listView: null,
            itemView: null
        })
    };
    return Bog.dash.views.full.List;
});