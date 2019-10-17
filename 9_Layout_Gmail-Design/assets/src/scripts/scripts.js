// window.addEventListener('DOMContentLoaded', (event) => {
//     document.getElementsByTagName('body')[0].classList.add('is-loaded');   
// });

// $(function () {       
//     isOnScreen();
// })


// function isOnScreen(elem) {
// 	// if the element doesn't exist, abort
// 	if( elem == undefined ) {
// 		return;
//     }

// 	let $window = jQuery(window)
// 	let viewport_top = $window.scrollTop()
// 	let viewport_height = $window.height()
// 	let viewport_bottom = viewport_top + viewport_height
//     let $elem = jQuery(elem)    
// 	let top = $elem.offset().top
// 	let height = $elem.height()
//     let bottom = top + height
   

// 	return (top >= viewport_top && top < viewport_bottom) ||
// 	(bottom > viewport_top && bottom <= viewport_bottom) ||
// 	(height > viewport_height && top <= viewport_top && bottom >= viewport_bottom)
// }


// // Load the containers with the main content on the page after scrolling
// jQuery( document ).ready( function() {
// 	window.addEventListener('scroll', function(e) {
//         $('.grossary-section').each(function() {            
//             let $this = $(this);   
          
//             if( isOnScreen($($this)) ) {
//                 $this.addClass('is-visible')
//             }
//         })

		
//     });
    
//     // Load the container with the alphabet letters after first scrolling 
//     window.addEventListener('scroll', function(e) {         
//         if( isOnScreen($('.grossary-alphabet'))) {
//             $('.grossary-alphabet').addClass('is-visible')
//         }
//     })
// });