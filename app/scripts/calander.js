var hagenda = hagenda || {};

(function() {

    hagenda.Calendar = {
        days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        dates: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        today: new Date(),

        setupCalendar: function(year, month) {
            var firstDay = new Date(year, month, 1);
            var startingDay = firstDay.getDay();
            var monthLength = this.dates[this.getMonth()];

            if (this.getMonth() == 1) { // Leap Year?
                if ((this.getYear() % 4 == 0 && this.getYear() % 100 != 0) || this.getYear() % 400 == 0) {
                    monthLength = 29;
                }
            }
            var html = '';
            var day = 1;
            for (var i = 0; i < 9; i++) {
                for (var j = 0; j <= 6; j++) {
                    if (day <= monthLength && (i > 0 || j >= startingDay)) {
                        if (day <= 9) {
                            day = '0' + day;
                        }
                        html += '<li>' + day + '<span>' + this.days[j] + '</span></li>';
                        day++;
                    }
                }
                // stop making rows if we've run out of days
                if (day > monthLength) {
                    break;
                } else {
                    html += '';
                }
            }

            console.log(html);
        },

        getMonth: function() {
            return this.today.getMonth();
        },

        getYear: function() {
            return this.today.getFullYear();
        },

        init: function() {
            this.setupCalendar(this.getYear(), this.getMonth());
        }

    };


}());

hagenda.Calendar.init();