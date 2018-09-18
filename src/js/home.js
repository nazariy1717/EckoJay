let home = {

    selectedCell: 0,

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
        // this.newSlider('.product-carousel');
    },

    newSlider: function (selector, options) {
        options = (options !== undefined) ? Object.assign({}, this.slider_options_default, options) : this.slider_options_default;
        let carousel = new Flickity(document.querySelector(selector), options);
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

    }
};


jQuery(function () {
    home.init();
});

