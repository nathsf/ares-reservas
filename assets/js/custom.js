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
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
})