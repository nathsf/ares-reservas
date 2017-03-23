$('.slide-g').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    navText: [
              "<img src='assets/icons/btn-izq.png' class=''></img>",
              "<img src='assets/icons/btn-der.png' class=''></img>"
            ],
    responsive:{
        0:{
            items:2,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
})

$(document).ready(function() {
            /*
            *   Examples - images
            */

            $("a#example1").fancybox();

            
            $("#various1").fancybox({
                'titlePosition'     : 'inside',
                'transitionIn'      : 'none',
                'transitionOut'     : 'none'
            });

            
        });