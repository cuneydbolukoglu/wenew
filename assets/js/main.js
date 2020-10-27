$(document).ready(function () {

    console.log("wenew");

    var owl = $('.owl-carousel')

    owl.owlCarousel({
        loop: true,
        margin: 16,
        responsiveClass: true,
        autoWidth: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 1,
                nav: false,
                loop: false
            },
        }
    });

});