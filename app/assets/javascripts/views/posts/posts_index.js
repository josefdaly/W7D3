JournalApp.Views.PostsIndex = Backbone.View.extend({

  template: JST['posts/index'],

  initialize: function () {
    // debugger;
    this.listenTo(this.collection, "sync remove", this.render);
  },

  render: function () {
    console.log("rendered");
    var $content = $(this.template());

    this.collection.each(function (post) {
      var postItemView = new JournalApp.Views.PostsIndexItem({
        model: post
      });
      $content.append(postItemView.render().$el);
    });

    this.$el.html($content);
    return this;
  },

});

$(function () {
  var coll = new JournalApp.Collections.Posts();
  coll.fetch();
  var idx = new JournalApp.Views.PostsIndex({ collection: coll });
      $("body").append(idx.render().$el);
  // {
  //   success: function () {
    // }
  // });
});

// new Journal
