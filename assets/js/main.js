/*Carousel*/
$('.hero-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: [
              "<img src='assets/icons/boton-izquierda.png' class=''></img>",
              "<img src='assets/icons/boton-derecha.png' class=''></img>"
            ],
    
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})