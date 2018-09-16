let search = {

    init: function () {
        this.events();
    },



    events: function () {
        let self = this;


        $( function() {
            var handle = $( "#custom-handle" );
            $( "#slider" ).slider({
                min: 0,
                max: 1000000,
                create: function() {
                    handle.text( $( this ).slider( "value" ) );
                },
                slide: function( event, ui ) {
                    handle.text( ui.value );
                }
            });
        } );



    }
};



jQuery(function () {
    search.init();
});