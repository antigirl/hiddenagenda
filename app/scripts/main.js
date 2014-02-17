var hagenda = hagenda || {};

(function () {

    hagenda.Scrolling = {
        offset: 400,
        scrollFactor: 0.5,

        scrolling: function() {
            $('.parallaxWrap div').each(function(i, slide) {

                if (hagenda.Scrolling.getDocViewBottom() >= hagenda.Scrolling.getThreshold('slide'+(i+1))) {
                    $(slide).css('-webkit-transform', 'translate3d(0, ' + hagenda.Scrolling.getOffset(i) + 'px, 0)');
                }

                //hide next 1 up
                if (hagenda.Scrolling.getDocViewTop() - $('#slide'+(i+1)).offset().top >= 0) {
                      $('.parallaxWrap .img'+(i+2)).css('-webkit-transform', 'translate3d(0, -90000px, 0)');
                }     

                //hide previous ones
                if (hagenda.Scrolling.getDocViewTop() - $('#slide'+(i+2)).offset().top >= 0) {
                      $('.parallaxWrap .img'+(i+1)).css('-webkit-transform', 'translate3d(0, -90000px, 0)');
                }                     
            });

        },

        getThreshold: function(id) {
            var elTop =  $('#'+id).offset().top;
            var thresh = elTop + $('#'+id).height();

            return thresh;
        },

        getOffset: function(i) {
            return hagenda.Scrolling.offset - ($('body').scrollTop() * hagenda.Scrolling.scrollFactor- ((850+500)/2)*i);
        },

        getDocViewTop: function() {
            return $(window).scrollTop();
        },

        getDocViewBottom: function() {
            return hagenda.Scrolling.getDocViewTop() + $(window).height();
        },

        init: function() {
            $(window).on('scroll',this.scrolling);
        }

    };


}());

$(document).ready(function() {
    hagenda.Scrolling.init();
});

