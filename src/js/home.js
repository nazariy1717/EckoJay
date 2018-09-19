let home = {

    selectedCell: 0,
    home_carousel: '',
    featured_carousel: '',
    listing_carousel: '',
    testimonials_carousel: '',

    slider_options_default: {
        wrapAround: true,
        pageDots: false,
        prevNextButtons: true,
        autoPlay: false,
        cellAlign: 'left',
        contain: true,
        imagesLoaded: true,
        hash: true
    },

    init: function () {
        this.events();
        this.home_carousel = this.newSlider('.app-home__carousel', { prevNextButtons: false});
        this.featured_carousel = this.newSlider('.app-featured__carousel', { prevNextButtons: false});
        this.listing_carousel = this.newSlider('.app-listing__carousel');
        this.testimonials_carousel = this.newSlider('.testimonials-quote__carousel',{ prevNextButtons: false});
    },

    newSlider: function (selector, options) {
        options = (options !== undefined) ? Object.assign({}, this.slider_options_default, options) : this.slider_options_default;
        return new Flickity(document.querySelector(selector), options);
    },

    events: function () {
        let self = this;

        $('.js-scroll-down').on('click',function(){
            $('html,body').animate(
                {
                    scrollTop: $(".app-featured").offset().top
                });
        });
        $('.app-home__prev').on( 'click', function() {
            self.home_carousel.previous();
        });
        $('.app-home__next').on( 'click', function() {
            self.home_carousel.next();
        });

        $('.app-featured__prev').on( 'click', function() {
            self.featured_carousel.previous();
        });
        $('.app-featured__next').on( 'click', function() {
            self.featured_carousel.next();
        });

        $('.app-testimonials__prev').on( 'click', function() {
            self.testimonials_carousel.previous();
        });
        $('.app-testimonials__next').on( 'click', function() {
            self.testimonials_carousel.next();
        });

    }
};


jQuery(function () {
    home.init();
});

