


$('.aboutSlider').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dots :true,
    autoplay: true,
    autoplayTimeout :3000,
    navText:['<i class="fa-regular fa-circle-left"></i>' ,'<i class="fa-regular fa-circle-right"></i>'],
  

    responsive:{
        0:{
            items:1,
            nav: true,
            dots :false,
          

        },
        600:{
            items:2,
            nav :false
        },
        1000:{
            items:3,
            dots :false
        }
    }
})

    

