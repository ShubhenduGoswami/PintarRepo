

app.service("AnimationService",function() {

	var jQuery = $.noConflict();
	
	
	this.scrollToId = function(id) {
	    jQuery('html, body').animate({
	        scrollTop: jQuery(id).offset().top
	    }, 2000);
	}
	
	
});