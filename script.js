		jQuery(function(){
    	    $( '.menu-btn' ).click(function(){
    	       $('.responsive-menu').toggleClass('expand');
             $('.overlay').toggleClass('open');            
    	    });  
          $('.overlay').click(function(){
          $('.menu-btn').trigger('click');
          });
        });