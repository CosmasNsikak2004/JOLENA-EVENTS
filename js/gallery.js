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

    // gallery popup
    const wHeight = $(window).height();
    $(".gallery-popup .gp-img").css("max-height",wHeight + "px");
    
    let itemIndex = 0;
    const totalGalleryItems = $(".gallery-item").length;
    
    $(".gallery-item").click(function(){
        itemIndex = $(this).index();
        $(".gallery-popup").addClass("open");
        $(".gallery-popup .gp-img").hide();
        gpSlideShow();
    })
    $(".gp-controls .next").click(function(){
        if(itemIndex == totalGalleryItems-1){
            itemIndex = 0;
        }
        else{
            itemIndex++;
        }
        $(".gallery-popup .gp-img").fadeOut(function(){
            gpSlideShow();
        })
    })
    
    $(".gp-controls .prev").click(function(){
        if(itemIndex === 0){
            itemIndex = totalGalleryItems-1;
        }
        else{
            itemIndex--;
        }
        $(".gallery-popup .gp-img").fadeOut(function(){
            gpSlideShow();
        })
    })
    
    
    function gpSlideShow(){
        const imgSrc = $(".gallery-item").eq(itemIndex).find("img").attr("data-large");
        $(".gallery-popup .gp-img").fadeIn().attr("src",imgSrc);
        $(".gp-counter").text((itemIndex+1) +"/"+ totalGalleryItems);
    }
    
    // hide gallery popup
    $(".gp-close").click(function(){
        $(".gallery-popup").removeClass("open");
    })
    
    // hide gallery popup when clicked outside of gp-container
    $(".gallery-popup").click(function(event){
        if($(event.target).hasClass("open")){
            $(".gallery-popup").removeClass("open");
        }
    })    

    // click to scroll top
    $('.move-up').click(function(){
        $('html, body').animate({
            scrollTop:0
        },1000);
    })

    // AOS INSTANCE
    AOS.init()
});