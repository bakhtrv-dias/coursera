$(document).ready(function(){
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

            
            
            
$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        dots:true,
        adaptiveHeight:false,
        slidesToShow:4,
        slidesToScroll:2,
        speed:1000,
        easing:'ease',
        infinite:true,
        initialSlide:0,
        autoplay:true,
        autoplaySpeed:3500,
        pauseOnFocus:true,
        pauseOnHover:true,
        pauseOnDotsHover:true,
        draggable:true,
        swipe:true,
        touchThreshold:20,
        touchMove:true,
        waitForAnimate:false,
        centerMode:false,
        variableWidth:false,
        rows:1,
        slidesPerRow:1,
        vertical:false,
        verticalSwiping:false,
        fade:false,
        // asNavFor:".slidebig",
        responsive:[
            {
                breakpoint: 1200,
                settings:{
                    slidesToShow:3,
                }
            },{
                breakpoint: 864,
                settings:{
                    slidesToShow:2,
                }
            },{
                breakpoint: 594,
                settings:{
                    slidesToShow:1,
                }
            }
        ],
        mobileFirst:false,
    });
    // if(window.matchMedia('(max-width: 768px)').matches){
    //     // do functionality on screens smaller than 768px
    //     $('.slider').slick({
    //         slidesToShow: 3,
    //     });
    // }
    $('.slider2').slick({
        arrows:true,
        adaptiveHeight:false,
        slidesToShow:4,
        slidesToScroll:1,
        speed:1000,
        infinite:true,
        responsive:[
            {
                breakpoint: 1200,
                settings:{
                    slidesToShow:3,
                }
            },{
                breakpoint: 777,
                settings:{
                    slidesToShow:2,
                }
            },{
                breakpoint: 555,
                settings:{
                    slidesToShow:1,
                }
            }
        ],
    });
});
