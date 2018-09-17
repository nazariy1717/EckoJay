let search = {

    init: function () {
        this.events();
    },



    events: function () {
        let self = this;

        $( "#slider-bedrooms" ).slider({
            range: true,
            min: 0,
            max: 10,
            values: [ 0, 6 ],
            create: function() {
                $( "#bedrooms-handle1" ).find('span').text('0' );
                $( "#bedrooms-handle2" ).find('span').text('6' );
            },
            slide: function( event, ui ) {
                $( "#bedrooms-handle1" ).find('span').text(ui.values[ 0 ] );
                $( "#bedrooms-handle2" ).find('span').text(ui.values[ 1 ] );
            }
        });

        $( "#slider-bathrooms" ).slider({
            range: true,
            min: 0,
            max: 10,
            values: [ 0, 10 ],
            create: function() {
                $( "#bathrooms-handle1" ).find('span').text('0' );
                $( "#bathrooms-handle2" ).find('span').text('10' );
            },
            slide: function( event, ui ) {
                $( "#bathrooms-handle1" ).find('span').text(ui.values[ 0 ] );
                $( "#bathrooms-handle2" ).find('span').text(ui.values[ 1 ] );
            }
        });

        $( "#slider-price" ).slider({
            range: true,
            min: 0,
            max: 1000000,
            values: [ 0, 900000 ],
            create: function() {
                $( "#price-handle1" ).find('span').text( "$" + '0' );
                $( "#price-handle2" ).find('span').text( "$" + '900000' );
            },
            slide: function( event, ui ) {
                $( "#price-handle1" ).find('span').text( "$" + ui.values[ 0 ] );
                $( "#price-handle2" ).find('span').text( "$" + ui.values[ 1 ] );
            }
        });

        $(document).on('click', '.js-list-grid-link', function () {
            $('.search-filter__link').removeClass('active');
            $(this).addClass('active');
            $('.search-product-content').addClass('js-grid-view');

        });

        $(document).on('click', '.js-list-view-link', function () {
            $('.search-filter__link').removeClass('active');
            $(this).addClass('active');
            $('.search-product-content').removeClass('js-grid-view');
        });



    }
};



jQuery(function () {
    search.init();
});