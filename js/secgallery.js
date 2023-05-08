$(window).on("load",function(){
    // gallery popup sec
    const wHeight = $(window).height();
    $(".gallery-popup-sec .gp-img-sec").css("max-height", wHeight + "px");

    let itemIndex = 0;
    const totalGalleryItems = $(".gallery-item-sec").length;

    $(".gallery-item-sec").click(function(){
        itemIndex = $(this).index();
        $(".gallery-popup-sec").addClass("open");
        $(".gallery-popup-sec .gp-img-sec").hide();
        gpSlideShow();
    })
    $(".gp-controls-sec .next").click(function(){
        if(itemIndex == totalGalleryItems-1){
            itemIndex = 0;
        }
        else{
            itemIndex++;
        }
        $(".gallery-popup-sec .gp-img-sec").fadeOut(function(){
            gpSlideShow();
        })
    })

    $(".gp-controls-sec .prev").click(function(){
        if(itemIndex === 0){
            itemIndex = totalGalleryItems-1;
        }
        else{
            itemIndex--;
        }
        $(".gallery-popup-sec .gp-img-sec").fadeOut(function(){
            gpSlideShow();
        })
    })

    function gpSlideShow(){
        const imgSrc = $(".gallery-item-sec").eq(itemIndex).find("img").attr("data-large");
        $(".gallery-popup-sec .gp-img-sec").fadeIn().attr("src",imgSrc);
        $(".gp-counter-sec").text((itemIndex+1) +"/"+ totalGalleryItems);
    }

    // hide gallery popup
    $(".gp-close-sec").click(function(){
        $(".gallery-popup-sec").removeClass("open");
    })
    
    // hide gallery popup when clicked outside of gp-container
    $(".gallery-popup-sec").click(function(event){
        if($(event.target).hasClass("open")){
            $(".gallery-popup-sec").removeClass("open");
        }
    })    

});