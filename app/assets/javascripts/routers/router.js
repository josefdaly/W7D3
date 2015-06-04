JournalApp.Routers.Posts = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "":"index",
    "posts/:id": "show"
  },

  index: function() {

  },

  show: function (id) {
    var coll = new JournalApp.Collections.Posts();
    var post = coll.getOrFetch(id);
    var newView = new JournalApp.Views.PostShow({ model: post });
    this._swapView(newView);
  },

  _swapView: function (newView) {
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    this.$rootEl.html(newView.render().$el);
  }
});
