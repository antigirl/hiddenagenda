(function() {

    hagenda.Events = {
        moreTxt: '<a class="moreTxt">... click for more </a>',
        events: [],

        getToday: function() {
            var now = new Date();
            var startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            var timestamp = startOfDay / 1000;

            return timestamp;
        },

        getData: function() {
            $.getJSON("https://graph.facebook.com/fql?access_token=496641197111817|vQbplr8VEUY3ZqeHbpOMtr6iYXE&q=SELECT+eid,pic_cover,description,name,start_time+FROM+event+WHERE+creator+=+200836053317224+AND+start_time+%3E+" + hagenda.Events.getToday() + "+ORDER+BY+start_time+LIMIT+4", function(data) {
                var data = JSON.parse(JSON.stringify(data));
                var i = 1;
                for (var prop in data.data) {
                    if (i <= 4) {
                        $('#slide2 .events').append('<div class="cube" data-id=' + data.data[prop].eid + '>' + '<div class="sideA">' + '<div class="heading">' + (data.data[prop].name).replace(/^.+:/, '').replace(/ *\[[^)]*\] */g, "").substring(0, 20) + '</div><span>' + hagenda.Events.sortDate(data.data[prop].start_time) + '</span></div>' + '<div class="sideB" style="background-image:url(' + data.data[prop].pic_cover.source + ')">' + '<div class="heading">' + (data.data[prop].name).replace(/^.+:/, '').replace(/ *\[[^)]*\] */g, "").substring(0, 20) + '</div> <span>' + hagenda.Events.sortDate(data.data[prop].start_time) + '</span>' + '<div class="info">' + data.data[prop].description.substring(0, 250) + '...' + hagenda.Events.moreTxt + '</div></div>' + '</div>');

                        hagenda.Events.events[data.data[prop].eid] = {
                            id: data.data[prop].eid,
                            name: data.data[prop].name,
                            desc: data.data[prop].description,
                            cover: data.data[prop].pic_cover.source,
                            date: data.data[prop].start_time
                        };
                        i++
                    }
                }

            });
        },

        sortDate: function(date) {
            var months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

            date = date.split("-");
            var month = parseInt(date[1], 10) - 1;
            var day = date[2].split('T');

            return day[0] + '<span>' + months[month] + '</span>';
        },

        populatePopup: function(theID) {
            $('.popupModal .content').append('<div class="header">' + this.events[theID].name.replace(/^.+:/, '').replace(/ *\[[^)]*\] */g, "").substring(0, 20) + '<span>' + hagenda.Events.sortDate(this.events[theID].date) + '</span> </div>' + '<div class="cover" style="background-image:url(' + this.events[theID].cover + ')"></div>' + '<div class="info">' + this.events[theID].desc + '</div>'); //+ this.events[theID].name + '<br/><br/>'
            hagenda.Events.populateYoutube();
        },

        convertLinks: function() {
            var linkable_content = $('.popupModal .content .info').html().replace(/(https?:\/\/[^ ;|\\*'"!,()<>]+\/?)/g, '<a href="$1">$1</a>');
            $('.popupModal .content .info').html(linkable_content);
        },

        populateYoutube: function() {
            var vidWidth = 425;
            var vidHeight = 344;

            var obj = '<br/><object width="' + vidWidth + '" height="' + vidHeight + '">' +
                '<param name="movie" value="http://www.youtube.com/v/[vid]&hl=en&fs=1">' +
                '</param><param name="allowFullScreen" value="true"></param><param ' +
                'name="allowscriptaccess" value="always"></param><em' +
                'bed src="http://www.youtube.com/v/[vid]&hl=en&fs=1" ' +
                'type="application/x-shockwave-flash" allowscriptaccess="always" ' +
                'allowfullscreen="true" width="' + vidWidth + '" ' + 'height="' +
                vidHeight + '"></embed></object><br/>';

            $('.popupModal .content .info:contains("youtube.com/watch")').each(function() {
                var that = $(this);
                var vid = that.html().match(/(?:v=)([\w\-]+)/g); // end up with v=oHg5SJYRHA0
                if (vid.length) {
                    $.each(vid, function() {
                        that.append(obj.replace(/\[vid\]/g, this.replace('v=', '')));
                    });
                }
            });
        },

        init: function() {
            hagenda.Events.getData();
            hagenda.EventsListeners.init();
        }

    }



    hagenda.EventsListeners = {
        dialogueTurn: function(e) {
            $(this).addClass('active');
        },

        dialogueOpen: function(e) {
            if (!$(this).hasClass('active2')) {
                $('.cube').removeClass('active2');
                $('.info').removeClass('active');
                $(this).addClass('active2');
                $(this).find('.info').addClass('active');

            } else {
                var theID = $(this).data('id');
                $('.popupModal .content').empty();
                hagenda.Events.populatePopup(theID);
                $('.popupModal').addClass('active');
                $('.wrapper').addClass('dialogOpen');
                $('body').addClass('modal-open');
            }
        },

        dialogueClose: function(e) {
            $(this).removeClass('active');
        },

        popupClose: function(e) {
            $('.popupModal').removeClass('active');
            $('.wrapper').removeClass('dialogOpen');
            $('body').removeClass('modal-open');
            $('.popupModal .content').html('<img src="images/global/preloader.gif" class="preloader"/>');
        },

        init: function() {
            $('body').on('mouseenter', '.cube', this.dialogueTurn);
            $('body').on('mouseleave', '.cube', this.dialogueClose);
            $('body').on('click', '.cube', this.dialogueOpen);
            $('.close').on('click', this.popupClose);
        }

    }


}());

hagenda.Events.init();