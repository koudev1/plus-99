function lockScroll() {
    if ($('body').hasClass('lock-scroll')) {
        $('body').removeClass('lock-scroll');
    }
    else {
        $('body').addClass('lock-scroll');
    }
};
$('.loop_0').owlCarousel({
    center: true,
    loop:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:5
        },
        1000:{
            items:5
        },
    },
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true
}); 
$('.loop__2').owlCarousel({
    center: true,
    loop:true,
    nav:true,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:5
        },
    },
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true
}); 
$('.loop__3').owlCarousel({
    center: true,
    loop:true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
    }
}); 
$('.loop_5').owlCarousel({
    rtl:true,
    // loop:true,
    // center: true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
    }
}); 


$(function() {
    $('.pop').on('click', function() {
        $('.imagepreview').attr('src', $(this).find('img').attr('src'));
        $('#imagemodal').modal('show');
    });
});


// $('.card_container').hover(
//     function(){ $(".container_card .card_container").addClass('show') },
//     function(){ $(".container_card .card_container").removeClass('show') }
// );

document.getElementsByClassName





