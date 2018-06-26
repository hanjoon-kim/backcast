var VideoPlayerView = Backbone.View.extend({

  el: '.player',

  initialize: function () {
    this.$('.video-list-entry-title').bind('click', this.render());
  },

  // events: {
  //   'click .video-player-details': 'select'
  // },

  render: function() {
    this.$el.html(this.template());
    return this;
  },
  
  // select: function() {
  //   this.model.set({selected: true});
  //   this.render();
  // },

  template: templateURL('src/templates/videoPlayer.html')

});
