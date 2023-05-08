 const responsive={
    0:{
        items:1
    },
    350:{
        items:1
    },
    500:{
        items:2
    },
    1000:{
        items:3
    },
    1075:{
        items:4
    }

}



$(document).ready(function(){

 $nav= $('.nav');
 $toggleCollapse =$('.toggle-collapse');

// click event on toggle menu
$toggleCollapse.click(function(){
    $nav.toggleClass('collapse');
})

// fixed header
$(window).scroll(function(){
    if($(this).scrollTop() > 100){
        $(".navbar").addClass("fixed");
    }
    else{
        $(".navbar").removeClass("fixed");
    }
})

// owl-carousel for blog
$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    dots:false,
    nav:true,
    navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
    responsive:responsive
});


// click to scroll top
$('.move-up').click(function(){
    $('html, body').animate({
        scrollTop:0
    },1000);
})

// AOS INSTANCE
AOS.init()

});