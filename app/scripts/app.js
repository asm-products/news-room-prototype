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
	  //app.collect = new app.Collect;
	 // app.mainCollectionView = new app.MainCollectionView;
	  Backbone.history.start();
	  
	  app.router.on("route:path", function(path) {
        
		$('paper-input').val(path);
		
		var myElem = document.querySelector('my-element');
		elem.postsLoaded(path.toString());
		  
	  });
	  //app.router.navigate('search/search', {trigger:true});
	  //app.mainRegion.show(app.mainView);
	
	});
	
	app.addInitializer( function(options){
	
	 app.Anim = new app.modules.anim;
	 
	 var myElem = document.querySelector('my-element');
	 
	 $('paper-item').on('click', function(e){
	    var p = this.getAttribute('label');
		var t = document.querySelector('my-element');
		var q = '{"q":"' + p + '"}';
		t.changeParam(q,p);

      });
	  
	  $('paper-input').on('change', function(e){
       
	    var p = $(this).val();
		p = _.escape(p);
		var t = document.querySelector('my-element');
		var q = '{"q":"' + p + '"}';
	    t.changeParam(q,p);
            
	  });
	  
	  $('#sort').on('change', function(){
	    var e = this.selected;
		var t = document.querySelector('my-element');
		var q = '{"sort":"' + e + '"}';
	    
		t.changeSort(e,q);
		
	  });
	  
	});
	
  });

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));

