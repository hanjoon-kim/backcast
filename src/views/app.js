var AppView = Backbone.View.extend({

  el: '#app',


  initialize: function() {
    this.render();
    this.videos = new Videos(window.exampleVideoData);
    this.video = new Video(exampleVideoData[0]);
    this.videoPlayers = new VideoPlayerView({model: this.video}); 
    this.videoList = new VideoListView({collection: this.videos}).render();  
  },

  events: {
    'click .video-list-entry-title': 'selectTitle',
    'click .video-list-entry-detail': 'select',
    'click .media-object': 'select'
  },

  selectTitle: function(event) {
    var title = event.target.innerText;
    var diane = this.videoList.collection.models;

    // debugger;
    for (let i = 0; i < diane.length; i++) {
      var realTitle = diane[i].attributes.snippet.title;
      if (title === realTitle) {
        console.log('Hello Diane!');
        var currentVideo = new Video(diane[i]);
      }
    }
    this.videoPlayers.remove();
    this.videoPlayers = new VideoPlayerView({model: this.currentVideo});
    this.videoPlayer.render();
    // console.log(this.videoList.collection.models.get(title));
    //things we need:
    //video that we clicked on's ID
    //video that we clicked on's title and description
    // debugger;
    // app.currentVideo = new Video()
    // app.currentVideo.set('')
    console.log('hello diane!');
  },


  // defaults: {
  //   currentVideo: new Video(exampleVideoData[0])
  // },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
