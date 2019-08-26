/**
 * Custom DX Tabbed script. Copy paste this elsewhere if needed for other projects.
 * It should work standalone.
 *
 * The Controller element must have data attribute of data-tabsController,
 * while the target - data-tabsTarget
 *
 * @version 1.0
 */

$(function() {
    dxTabs();
})

function dxTabs () {
    /**
     * jQuery selectors for accesing the elements.
     */
    var controllerSelectorID = ''; // [data-tabsController="ID"]
    var targetSelectorID = ''; // [data-tabsTarget="ID"]
    var token = ''; // Custom ID for each tab

    /**
     * The two jQuery objects to work with
     */
    var $controllerElement;
    var $targetElement;

    /**
     * Tabs container for selecting all siblings
     */
    var $tabsContainer;

    /**
     * Actions when a controller element is clicked. duh.
     */
    var controllerClick = function( event ) {
        
        // Just a string of the data attribute
        var controllerSelectorID = $(event.currentTarget).attr('data-tabcontroller');
        
        console.log($(event.currentTarget), controllerSelectorID);

        $controllerElement = $(this); 
        console.log($controllerElement);       
        $targetElement = $('[data-tabtarget="' + controllerSelectorID + '"]');

        
        token = $controllerElement.closest('.js-dxtabs').attr('data-dxtabsid');

        
        $tabsContainer = $('#' + token);
        console.log($tabsContainer);
        // Clearout all states
        $('[data-dxtabsid="' + token + '"]' + ' [data-tabcontroller]').each(function() {
            $(this).removeClass('active');
        });

        $('[data-dxtabsid="' + token + '"]' + ' [data-tabtarget]').each(function() {
            $(this).removeClass('active');
        });

        // Add the state to clicked element and its pair.
        $('[data-dxtabsid="' + token + '"]' + ' [data-tabcontroller="' + controllerSelectorID + '"]').addClass('active');
        $('[data-dxtabsid="' + token + '"]' + ' [data-tabtarget="' + controllerSelectorID + '"]').addClass('active');
    };


    // Check if tabs exist. If so then run the script for each tab.

    
    if( $('.js-dxtabs').length !== 0 ) {
        
        // Go trought all tabs in a page        
        $('.js-dxtabs').each(function() {
            
            // Set the custom token
            $(this).attr('data-dxtabsid', Math.random().toString(36).substring(10));

            // The tabs click
            $('[data-tabcontroller]').click(controllerClick);
            // $(this).click(controllerClick);
        });
    }
    
};



