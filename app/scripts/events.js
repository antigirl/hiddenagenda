(function() {

    hagenda.Events = {

        dialogueTurn: function(e) {
            $(this).addClass('active');
        },

        dialogueOpen: function(e) {

            $(this).addClass('active2');
        },


        dialogueClose: function(e) {
            $(this).removeClass('active');
        },

        init: function() {
            $('.cube').on('mouseenter', this.dialogueTurn);
            $('.cube').on('mouseleave', this.dialogueClose);
            $('.cube').on('click', this.dialogueOpen);
        }

    }

}());

hagenda.Events.init();