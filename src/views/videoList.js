var VideoListView = Backbone.View.extend({
  

  el: '.list',

  initialize: function() {
    // this.collection.models.forEach(elem => {
    //   var entryView = new VideoListEntryView(elem);
    //   $('body').append(entryView.render());
    // });
    // this.collection.on('sync', function() {
    //   // this.render();
    // }, this);
    
    this.listenTo(this.collection, 'sync', this.render);
    
  },

  
  
  
  render: function() {
    this.$el.children().detach();
    this.collection.forEach(this.renderVideo, this);
    return this;
  },

  renderVideo: function(video) {
    var videoView = new VideoListEntryView({model: video});
    this.$el.append(videoView.$el);
    return this.$el;
  },

  template: templateURL('src/templates/videoList.html'),  

});

