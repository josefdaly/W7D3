JournalApp.Views.PostsIndexItem = Backbone.View.extend({

  events: {
    'click button.delete': 'delete'
  },
  template: JST['posts/index_item'],
  tagName: 'li',
  render: function () {
    this.$el.html(this.template({post: this.model}));

    return this;
  },

  delete: function (event) {
    this.model.destroy();
  }

});
