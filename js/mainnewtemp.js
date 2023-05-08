$(window).on("load",function(){

    // nav toggle
    $(".hamburger-btn").click(function(){
        $(".header .nav").slideToggle();
    })
    $(".header .nav").click(function(){
        if($(window).width() < 768){
            $(".header .nav").slideToggle();
        }
    })


    // fixed header
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $(".header").addClass("fixed");
        }
        else{
            $(".header").removeClass("fixed");
        }
    })    

    // home section slideshow
    let slideIndex = $(".slide.active").index();
    const slideLen = $(".slide").length;

    function slideshow(){
        $(".slide").removeClass("active").eq(slideIndex).addClass("active");
        if(slideIndex == slideLen-1){
            slideIndex = 0;
        }
        else{
            slideIndex++;
        }
        setTimeout(slideshow,5000);
    }
    slideshow();

    // click to scroll top
    $('.move-up').click(function(){
        $('html, body').animate({
            scrollTop:0
        },1000);
    })

    // AOS INSTANCE
    AOS.init()
});