$('.newArrivels__content').slick({
    infinite: true,
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false,
    dots: false,
    responsive: [{
            breakpoint: 850,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 849,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 749,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});