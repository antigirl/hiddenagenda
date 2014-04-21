var hagenda = hagenda || {};

(function() {

    hagenda.Scrolling = {
        offset: 400,
        scrollFactor: 0.5,

        scrolling: function() {
            var _this = this;
            $(window).on('scroll', function() {
                $('.parallaxWrap div.imgs').each(function(i, slide) {

                    if (_this.getDocViewBottom() >= _this.getThreshold('slide' + (i + 1))) {
                        $(slide).css('-webkit-transform', 'translate3d(0, ' + hagenda.Scrolling.getOffset(i) + 'px, 0)');
                    }
                    //hide next 1 up
                    if (_this.getDocViewTop() - _this.getElOffsetTop('slide' + (i + 1)) >= 0) {
                        $('.parallaxWrap .img' + (i + 2)).css('-webkit-transform', 'translate3d(0, -90000px, 0)');

                        if ((i + 1) == 2) { //if slide 2 is in view, pause the video
                            $('nav').addClass('fixed');
                            _this.actionVideo('pause');
                        }
                    }
                    //hide previous ones
                    if (_this.getDocViewTop() - _this.getElOffsetTop('slide' + (i + 2)) >= 0) {
                        $('.parallaxWrap .img' + (i + 1)).css('-webkit-transform', 'translate3d(0, -90000px, 0)');
                    }
                    //if slide 1 is in view, play the video
                    if (_this.getDocViewTop() - _this.getElOffsetTop('slide2') <= 0) {
                        $('nav').removeClass('fixed');
                        _this.actionVideo('play');
                    }


                });
            });
        },

        actionVideo: function(action) {
            if (action == 'play') {
                if ($("video").get(0).paused) {
                    $('video').get(0).play();
                }
            } else {
                if (!$("video").get(0).paused) {
                    $('video').get(0).pause();
                }
            }

        },

        getThreshold: function(id) {
            var elTop = this.getElOffsetTop(id);
            var thresh = elTop + $('#' + id).height();

            return thresh;
        },

        getElOffsetTop: function(id) {
            if ($('#' + id).length >= 1) {
                return $('#' + id).offset().top;
            }
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