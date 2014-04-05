define([ 'jquery', 'underscorejs', 'backbone', 'modules/bog.site', 'modules/bog.i18n', 'text!../../../templates/home/landing.html' ],
    function ($, _, Backbone, site, i18n, LandingTemplate) {
        return Backbone.View.extend({
            initialize: function () {
                this.render().localize();
            },
            render: function () {
                this.$el.html(LandingTemplate);
                return this;
            },
            localize: function () {
                i18n.localizeView(this.$el, 'admin_landing');
            }
        });
    });