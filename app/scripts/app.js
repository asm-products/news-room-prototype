(function(document) {
  'use strict';

  document.addEventListener('polymer-ready', function() {
    // Perform some behaviour
    console.log('Polymer is ready to rock!');
	app.start();
	app.addInitializer( function(options){
	
	  app.router = new app.Router;
	  app.mainModel = new app.MainModel;
	  app.mainView = new app.MainView({model:app.mainModel});
	  app.mainCollectionView = new app.MainCollectionView;
	  Backbone.history.start();
	  app.router.navigate('home/see', {trigger:true});
	  app.mainRegion.show(app.mainView);
	
	});
	
	app.addInitializer( function(options){
	
	  app.Anim = new app.modules.anim;
	
	});
	
	
  });

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));

