jQuery( document ).ready( function ( $ ) {
	'use strict';
	/*
	|--------------------------------------------------------------------------
	| Developer mode
	|--------------------------------------------------------------------------
	|
	| Set to true - it will allow printing in the console. Alsways check for this
	| variables when running tests so you dont forget about certain console.logs.
	| Id needed for development testing this variable should be used.
	|
	*/
	const devMode = function() {
		return true;
	};

	// Disable console.log for production site.
	if ( ! devMode() ) {
		console.log = function() {};
	}
	
	//adding font-awesome icon 
	$( "#search-2 form label" ).append( '<span class="search-icon"><i class="far fa-search" ></i></span>' );
	
	$( ".widget.widget_recent_entries ul li" ).prepend( '<span class="search-icon"><i class="far fa-caret-right" ></i></span>' );
	
	//search field widget
	$( "#search-2 span.search-icon" ).click( function () {
		$( "#search-2 span.search-icon" ).css({"transform": "translateX(100px)", "display": "none","cursor": "text"});
		$( "#search-2 .search-field" ).addClass('search-spread');
	} );
	
	//clarity search field 
	$('.clarity-search-icon i').click(function(){
		$(this).toggleClass('fa-times fa-search');
		$(this).parents('.search-box').toggleClass('is-extended');		 
	});
	
	//back to top animation 
	$('.to-top-link').click(function(e) {
		  e.preventDefault();
			// When arrow is clicked
		$('body,html').animate({
			scrollTop : 0   // Scroll to top of body
		}, 800);
	});
	
	//changing the nagigation texts 
	$(function(){
		$('.navigation.post-navigation .nav-links .nav-previous > a').text('Older Posts');
		$('.navigation.post-navigation .nav-links .nav-next > a').text('Newer Posts');
	})
	
	//overrite textarea default row 
	$(function(){
		$('textarea').attr('rows', 4);
	})
	
	
	//comment nav text change 
	$(function(){
		$('#comment-nav-below .nav-links .nav-previous > a').text('Prev comment');
		$('#comment-nav-below .nav-links .nav-next > a').text('Next comment');
		
		if($('#comment-nav-below .nav-links > div ').length < 2) {
			$('#comment-nav-below .nav-links > div').css({'width':'100%','text-align':'right'});
		}
	})

	//add focus effect
	$('.site-header').find('.clarity-search-icon').on("click", function(e) {
		e.preventDefault();
		$('.site-header').find('.clarity-search').focus();
		return false;
	 });
});
