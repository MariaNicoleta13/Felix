jQuery(document).ready(function() {
	
	var targetToggle = function(toggleBtn) {
		
		var originalText = jQuery(toggleBtn).text();
		var toggleTarget = jQuery(toggleBtn).attr('data-toggle-target');
		
		jQuery(toggleBtn).addClass("toggle-btn-visible");
		jQuery(toggleTarget).addClass("toggle-target-hidden");
		
		jQuery(toggleBtn).click(function() {
			
			// Toggle the button text (for example: Hide instead of Show)
			if ( jQuery(toggleBtn).text() == jQuery(toggleBtn).attr('data-toggle-text') ) {
				jQuery(toggleBtn).text(originalText);
			} else {
				jQuery(toggleBtn).text(jQuery(toggleBtn).attr('data-toggle-text'));
			}

			console.warn(toggleTarget);
			
		
			var classList = $(toggleTarget)[0].classList;
			if(classList.contains('toggle-target-expanded')) {
				classList.remove('toggle-target-expanded');
			} else {
			$(toggleTarget)[0].classList.add('toggle-target-expanded');
			}

			// Slide Toggle and then add class and remove inline style
			// jQuery(toggleTarget).toggleClass("toggle-target-expanded");//.css('display', '');
			// jQuery(toggleTarget).toggle("slide", {direction:'right'},400,function() {
			// 	jQuery(toggleTarget).css('display', '');
			// });
		});
		
	}; // end targetToggle function
	
	// If any elements on page use our data attribute then run our code
	if ( jQuery("[data-toggle-target]").length ) {
		jQuery("[data-toggle-target]").each(function() {
			targetToggle(this);
		});
	}

});