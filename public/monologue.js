requirejs.config({
    paths : {
        'jquery' : 'bower_components/jquery/dist/jquery',
        'underscore' : 'bower_components/underscore/underscore',
        'backbone' : 'bower_components/backbone/backbone',
        'text' : 'bower_components/text/text',
        'hogan' : 'bower_components/hogan.js/lib/hogan'
    },
    shim : {
        'backbone' : {
            deps : ['underscore','jquery'],
            exports:'Backbone'
        },
        'underscore' : {
            exports : '_'
        }
    }
});

require([
    'jquery',
    'backbone',
    'modules/status/statuses',
    'modules/status/newStatusView',
    'modules/status/statusesView'
],function($, Backbone, Statuses, NewStatusView, StatusesView){
    $(document).ready(function() {
        var statuses = new Statuses();
        var newStatusView = new NewStatusView({ el: $('#new-status'), collection : statuses});
        newStatusView.render();

        var statusesView = new StatusesView({ el: $('#statuses'), collection: statuses });
        statusesView.render();
    });
})
