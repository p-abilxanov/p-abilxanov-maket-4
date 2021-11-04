$('.bestJewellery__carousel').slick({
    infinite: true,
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    pauseOnHover: true,
    arrows: false,
    dots: true,
    responsive: [{
        breakpoint: 749,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
        }
    }]
});