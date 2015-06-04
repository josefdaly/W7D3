JournalApp.Views.PostShow = Backbone.View.extend({
  template: JST['posts/post_show'],

  render: function () {
    this.$el.html(this.template({ post: this.model }));
    debugger;
    return this;
  }

});
