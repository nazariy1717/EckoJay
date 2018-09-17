let front = {
    hamburger: $('.hamburger'),
    nav: $('.header-list'),


    init: function () {
        this.events();
    },

    toogleNav: function(){
        if (!this.hamburger.hasClass('is-active')) {
            this.hamburger.addClass("is-active");
            this.nav.toggleClass('js-show');
        }
        else {
            this.hamburger.removeClass("is-active");
            this.nav.toggleClass('js-show');
        }
    },


    openTab: function (element, tabName, parent) {
        let i, tab_content, tab_links;

        tab_content = $(element).closest(parent).find('.tabs-wrap').find('.tab-content');
        for (i = 0; i < tab_content.length; i++) {
            tab_content[i].style.display = "none";
        }

        tab_links = $(element).closest('.tabs-ul').find('.tab-links');

        for (i = 0; i < tab_links.length; i++) {
            tab_links[i].className = tab_links[i].className.replace(" active", "");
        }

        document.getElementById(tabName).style.display = "block";
        $(element).addClass('active');
    },


    events: function () {
        let self = this;

        $(document).on('click', '.header-list__btn', function () {
            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                console.log('dasd');
                $(this).toggleClass('active');
                $(this).parent().find('.header-sublist').toggleClass('active');
            }
        });

        $(document).on('click', '.hamburger', function () {
            self.toogleNav();
        });




    }
};



jQuery(function () {
    front.init();
});