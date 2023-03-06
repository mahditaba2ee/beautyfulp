$(".owl-carousel").owlCarousel({
    autoplay:false,
    loop:false,
    dots:true,
    margin:10,
    nav:true,
    autoplayHoverPause:true,
    touchDrag:true,
    stagePadding:0,
    
    responsive:{
      0:{
        items:1,
      },

      480:{
        items:2,
      },
      600:{
        items:2,
      },
      768:{
        items:2,
      },
      1398:{
        items:4,
      },
    }
    }
 );