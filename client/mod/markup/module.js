define([ 'module_base', 'text!./placeholder.html', 'bootstrap' ], function (mod_base, placeholder) {
    return mod_base.extend({
        api_root: "/api/mod/markup",
        initialize: function (el, o, callback) {
            var self = this;
            self.base_initialize(el, o, function () {
                if (self.manifest.options.src && !self.manifest.options.markup) {
                    require([ "text!./markup/" + self.manifest.options.src ], function (module_layout) {
                        self.base_render(module_layout, window.culture, function () {
                            if (callback) {
                                callback(self);
                            }
                        });
                    });
                }
                if (!self.manifest.options.src && self.manifest.options.markup) {
                    self.base_render(self.manifest.options.markup, window.culture, function () {
                        if (callback) {
                            callback(self);
                        }
                    });
                }
                if (!self.manifest.options.src && !self.manifest.options.markup) {
                    self.base_render(placeholder, window.culture, function () {
                        if (callback) {
                            callback(self);
                        }
                    });
                }
            });
        }
    });
});