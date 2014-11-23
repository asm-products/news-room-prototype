"use strict";

var app = Marionette.Application.extend({
  initialize: function(options){
    console.log(options.container);
  }
});

app = new app({container: 'body'});

app.addRegions({

  mainRegion: '.container'

});

app.Router = Backbone.Router.extend({

  routes: {
    'search/*path': 'path'
  },
  
  search: function(){ }

});







