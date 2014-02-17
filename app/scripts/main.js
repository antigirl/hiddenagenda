var hagenda = hagenda || {};

(function () {

    hagenda.Scrolling = {
        offset: 400,
        scrollFactor: 0.5,

        scrolling: function() {
            var _this = this;
            $(window).on('scroll',  function() {
                $('.parallaxWrap div').each(function(i, slide) {

                    if (_this.getDocViewBottom() >= _this.getThreshold('slide'+(i+1))) {
                        $(slide).css('-webkit-transform', 'translate3d(0, ' + hagenda.Scrolling.getOffset(i) + 'px, 0)');
                    }

                    //hide next 1 up
                    if (_this.getDocViewTop() - _this.getElOffsetTop('slide'+(i+1)) >= 0) {
                        $('.parallaxWrap .img'+(i+2)).css('-webkit-transform', 'translate3d(0, -90000px, 0)');
                    }     

                    //hide previous ones
                    if (_this.getDocViewTop() - _this.getElOffsetTop('slide'+(i+2)) >= 0) {
                        $('.parallaxWrap .img'+(i+1)).css('-webkit-transform', 'translate3d(0, -90000px, 0)');
                    }                     
                });
            });
        },

        getThreshold: function(id) {
            var elTop =  this.getElOffsetTop(id);
            var thresh = elTop + $('#'+id).height();

            return thresh;
        },

        getElOffsetTop: function(id) {
            return $('#'+id).offset().top;
        },

        getOffset: function(i) {
            return this.offset - ($('body').scrollTop() * this.scrollFactor - ((850 + 500) / 2) * i);
        },

        getDocViewTop: function() {
            return $(window).scrollTop();
        },

        getDocViewBottom: function() {
            return this.getDocViewTop() + $(window).height();
        },

        init: function() {
            this.scrolling();
        }

    };


}());

$(document).ready(function() {
    hagenda.Scrolling.init();
});

