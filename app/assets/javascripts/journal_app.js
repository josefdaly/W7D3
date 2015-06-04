window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    console.log('Hello from Backbone!');
    var router = new JournalApp.Routers.Posts({ $rootEl: $("body") });
  }
};

$(document).ready(function(){
  JournalApp.initialize();
  Backbone.history.start();
});
