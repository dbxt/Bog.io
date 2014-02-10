define([
    'jquery',
    'underscore',
    'backbone',
    'bog.site',
    'bog.i18n',
    'models/model.profile',
    'views/profile/_profile.detail.small',
    'text!../../../tmpl/home/main.v1.html'
], function ($, _, Backbone, site, i18n, ProfileModel, ProfileBadge, mainTemplate) {
    return Backbone.View.extend({
        initialize: function () {
            var self = this;
            _.bindAll(this, 'logout');

            var profile = new ProfileModel();
            profile.fetch({
                success: function (profile) {
                    self.model = profile;
                    self.render().localize();
                }
            });
        },
        render: function () {
            var self = this;

            self.$el.empty();

            self.$el.append(mainTemplate);

            var profileView = new ProfileBadge({ el: "#Profile-Panel", model: self.model });

            return this;
        },
        localize: function () {
            i18n.localizeView(this.$el, 'dash_home');
        },
        events: {
            "click #Logout": "logout"
        },
        logout: function () {
            $.get("/auth/logout/");
            window.location.href = "/";
        }
    });
});