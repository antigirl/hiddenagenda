(function() {

    hagenda.Photos = {
        el: '',

        dialogueOpen: function(e) {
            hagenda.Photos.el = $(this);
            $(this).addClass('active');
            $('.popupModal').addClass('active');
            $('.wrapper').addClass('dialogOpen');
            $('body').addClass('modal-open');
        },


        dialogueClose: function(e) {
            hagenda.Photos.el.removeClass('active');
            $('.popupModal').removeClass('active');
            $('.wrapper').removeClass('dialogOpen');
            $('.popupModal .content').html('<img src="images/global/preloader.gif" class="preloader"/>');
            $('body').removeClass('modal-open');
        },

        getData: function(e) {
            var albumID = $(this).data('id');
            $('.popupModal .content').append('<script id="photo-template" type="text/x-handlebars-template">{{#with data.[0]}}   <div class="fullImage"><img src="{{images.[0].source}}"></div> {{/with}}   <div class="thumbWrapper"> {{#data}} <img class="thumb" src="{{picture}}" data-full="{{images.[0].source}}"> {{/data}} </div> </script>');
            hagenda.Photos.dialogueOpen();

            $.ajax({
                url: 'https://graph.facebook.com/' + albumID + '/photos?limit=122',
                dataType: 'jsonp',
                success: function(images) {
                    var source = $("#photo-template").html();
                    var template = Handlebars.compile(source);
                    var context = images;

                    $('.popupModal .content').html(template(images));
                }
            });
        },

        fullImage: function(e) {
            var fullImage = $(this).data('full');
            $('.fullImage').html('<img src="' + fullImage + '"/>');
            console.log(fullImage);
        },

        init: function() {
            $('ul.photos li').on('click', this.getData);
            $('body').on('click', '.thumb', this.fullImage);
            $('.close').on('click', this.dialogueClose);
        }

    }

}());

hagenda.Photos.init();