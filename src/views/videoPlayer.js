var VideoPlayerView = Backbone.View.extend({

//shouldhave used trigger, and directly listen for a select being called on the colleciton


  el: '.player',

  initialize: function () {
    this.$('.video-list-entry-title').bind('click', this.render());
    
  },
    
  render: function() {
    if (this.model.attributes.snippet === undefined) {
      this.$el.html(this.template(this.model.attributes.attributes)); // this.$('h3').html('Put proper title here'); // this.$('.video-player-details').append();

    } else {
      this.$el.html(this.template(this.model.attributes)); // this.$('h3').html('Put proper title here'); // this.$('.video-player-details').append();
      return this;
    }
  },
  
  // select: function() {
  //   this.model.set({selected: true});
  //   this.render();
  // },

  template: templateURL('src/templates/videoPlayer.html')

});
