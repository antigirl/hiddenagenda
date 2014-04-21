(function() {

    hagenda.Social = {

        toggleTab: function(e) {
            var theTab = $(this).data('social');
            $('.tabcontent, .tab').removeClass('active');
            $(this).addClass('active');
            $('div[data-social="' + theTab + '"]').addClass('active');
            //hagenda.Social.populateTab(theTab);
        },

        populateTab: function(tab) {
            if (tab == 'facebook') {
                // ugh
            } else if (tab == 'twitter') {
                //  $('div.tabcontent[data-social="' + tab + '"]').append("<a class='twitter-timeline' width='750' height='850' href='https://twitter.com/HIDDEN_AGENDA_' data-widget-id='453151065098055680' data-chrome='transparent'>Tweets by @HIDDEN_AGENDA_</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','twitter-wjs');</script>");
            }
        },

        init: function() {
            $('#slide4 .tab').on('click', this.toggleTab);
        }

    }

}());

hagenda.Social.init();