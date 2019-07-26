window.addEventListener('DOMContentLoaded', (event) => {
	document.getElementsByTagName('body')[0].classList.add('loaded');
});

$(function () {
    addDelayClass();
    getTopOffset();    
})

function addDelayClass () {
    // let timeout = 1000;
    // $(".dx-grossary").find('.dx-grossary-section').each(function () {
    //     let $this = $(this);
    //     setTimeout(function() {
    //         $this.addClass("list-delay")
    //     }, timeout); 
    //     timeout += 800;
    // })

    
    // let num = 0;

    
    
    
    
        let timeout = 1000;
        let list = $(".dx-grossary").find('.show');  
        for (let i = 0; i < list.length; i++) {
            let element = list[i];        
            setTimeout(function() {
                $(element).addClass("list-delay")
            }, timeout); 
            timeout += 800;
        }     
        // num = num+3;
        // console.log(num);
        // return num;
        
   
  

    // $(".dx-grossary").find('.show').each(function () {
    //     let $this = $(this);
    //     setTimeout(function() {
    //         $this.addClass("list-delay")
    //     }, timeout); 
    //     timeout += 800;
    // })
}

function getTopOffset () {
    let element = $('.dx-grossary-a');    
    let containerTopPoint = element.offset().top;
    let containerHeight = element.height();    
    let scrollHeight = containerHeight+containerTopPoint;
}


window.onscroll = function() {scrollScreen()};

function scrollScreen() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $('.hide').removeClass("hide").addClass("show");
        addDelayClass();     

    } else {
        // $('.hide').removeClass("hide");
    }
}   