(function() {

    hagenda.Nav = {

        scrollTo: function(e) {
            var theID = $(this).data('nav');
            var scrollBy = $('#' + theID).offset().top - 130;
            if ($(this).html() == 'EVENTS') {
                scrollBy = 1310;
            }
            $('html, body').animate({
                scrollTop: scrollBy
            }, 800);
        },

        init: function() {
            $('nav').on('click', 'li', this.scrollTo);
        }

    }

}());

hagenda.Nav.init();