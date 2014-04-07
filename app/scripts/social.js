(function() {

    hagenda.Social = {

        toggleTab: function(e) {
            var theTab = $(this).data('social');
            $('.tabcontent, .tab').removeClass('active');
            $(this).addClass('active');
            $('div[data-social="' + theTab + '"]').addClass('active');
        },

        init: function() {
            $('#slide4 .tab').on('click', this.toggleTab);
        }

    }

}());

hagenda.Social.init();