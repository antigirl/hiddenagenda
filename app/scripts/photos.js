(function() {

hagenda.Photos = {
        el: '',

        dialogueOpen: function(e) {
            hagenda.Photos.el = $(this);
            $(this).addClass('active');
            $( '.photoModal').addClass('active');
            $('.wrapper').addClass('dialogOpen');
        },


        dialogueClose: function (e) {
            hagenda.Photos.el.removeClass('active');
           $('.photoModal').removeClass('active');
           $('.wrapper').removeClass('dialogOpen');
        },

        init: function(){
           $('ul.photos li').on('click', this.dialogueOpen);
            $('.close').on('click', this.dialogueClose);
        }

    }

}());

hagenda.Photos.init();
