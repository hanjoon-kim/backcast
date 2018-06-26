var VideoListEntryView = Backbone.View.extend({
  


  initialize: function() {
    this.render();
    this.$('.video-list-entry-title').bind('click', this.model.select());
    // this.$('.video-list-entry-title').on('click', function() {
    //   console.log('click click');
    //   this.model.select();
    // });
    
  },

  select: function() {
    this.model.set({selected: true});
  }, 

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
