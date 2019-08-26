window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementsByTagName('body')[0].classList.add('loaded');   
});

$(function () {       
    isOnScreen();
})


function isOnScreen(elem) {
	// if the element doesn't exist, abort
	if( elem == undefined ) {
		return;
    }

	var $window = jQuery(window)
	var viewport_top = $window.scrollTop()
	var viewport_height = $window.height()
	var viewport_bottom = viewport_top + viewport_height
    var $elem = jQuery(elem)    
	var top = $elem.offset().top
	var height = $elem.height()
    var bottom = top + height
   

	return (top >= viewport_top && top < viewport_bottom) ||
	(bottom > viewport_top && bottom <= viewport_bottom) ||
	(height > viewport_height && top <= viewport_top && bottom >= viewport_bottom)
}

jQuery( document ).ready( function() {
	window.addEventListener('scroll', function(e) {
        $('.dx-grossary-section').each(function() {            
            let $this = $(this);   
          
            if( isOnScreen($($this)) ) {
                $this.addClass('visible')
            }
        })

		
    });
    
    window.addEventListener('scroll', function(e) {         
        if( isOnScreen($('.dx-grossary-alphabet'))) {
            $('.dx-grossary-alphabet').addClass('visible')
        }
    })
});

