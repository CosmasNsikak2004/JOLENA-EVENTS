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

//third 

$(window).on("load",function(){
    // gallery popup tri
    const wHeight = $(window).height();
    $(".gallery-popup-tri .gp-img-tri").css("max-height", wHeight + "px");

    let itemIndex = 0;
    const totalGalleryItems = $(".gallery-item-tri").length;

    $(".gallery-item-tri").click(function(){
        itemIndex = $(this).index();
        $(".gallery-popup-tri").addClass("open");
        $(".gallery-popup-tri .gp-img-tri").hide();
        gpSlideShow();
    })
    $(".gp-controls-tri .next").click(function(){
        if(itemIndex == totalGalleryItems-1){
            itemIndex = 0;
        }
        else{
            itemIndex++;
        }
        $(".gallery-popup-tri .gp-img-tri").fadeOut(function(){
            gpSlideShow();
        })
    })

    $(".gp-controls-tri .prev").click(function(){
        if(itemIndex === 0){
            itemIndex = totalGalleryItems-1;
        }
        else{
            itemIndex--;
        }
        $(".gallery-popup-tri .gp-img-tri").fadeOut(function(){
            gpSlideShow();
        })
    })

    function gpSlideShow(){
        const imgSrc = $(".gallery-item-tri").eq(itemIndex).find("img").attr("data-large");
        $(".gallery-popup-tri .gp-img-tri").fadeIn().attr("src",imgSrc);
        $(".gp-counter-tri").text((itemIndex+1) +"/"+ totalGalleryItems);
    }

    // hide gallery popup
    $(".gp-close-tri").click(function(){
        $(".gallery-popup-tri").removeClass("open");
    })
    
    // hide gallery popup when clicked outside of gp-container
    $(".gallery-popup-tri").click(function(event){
        if($(event.target).hasClass("open")){
            $(".gallery-popup-tri").removeClass("open");
        }
    })    

});

//last

$(window).on("load",function(){
    // gallery popup end
    const wHeight = $(window).height();
    $(".gallery-popup-end .gp-img-end").css("max-height", wHeight + "px");

    let itemIndex = 0;
    const totalGalleryItems = $(".gallery-item-end").length;

    $(".gallery-item-end").click(function(){
        itemIndex = $(this).index();
        $(".gallery-popup-end").addClass("open");
        $(".gallery-popup-end .gp-img-end").hide();
        gpSlideShow();
    })
    $(".gp-controls-end .next").click(function(){
        if(itemIndex == totalGalleryItems-1){
            itemIndex = 0;
        }
        else{
            itemIndex++;
        }
        $(".gallery-popup-end .gp-img-end").fadeOut(function(){
            gpSlideShow();
        })
    })

    $(".gp-controls-end .prev").click(function(){
        if(itemIndex === 0){
            itemIndex = totalGalleryItems-1;
        }
        else{
            itemIndex--;
        }
        $(".gallery-popup-end .gp-img-end").fadeOut(function(){
            gpSlideShow();
        })
    })

    function gpSlideShow(){
        const imgSrc = $(".gallery-item-end").eq(itemIndex).find("img").attr("data-large");
        $(".gallery-popup-end .gp-img-end").fadeIn().attr("src",imgSrc);
        $(".gp-counter-end").text((itemIndex+1) +"/"+ totalGalleryItems);
    }

    // hide gallery popup
    $(".gp-close-end").click(function(){
        $(".gallery-popup-end").removeClass("open");
    })
    
    // hide gallery popup when clicked outside of gp-container
    $(".gallery-popup-end").click(function(event){
        if($(event.target).hasClass("open")){
            $(".gallery-popup-end").removeClass("open");
        }
    })    

});