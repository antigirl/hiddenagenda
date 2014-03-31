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
           // this.setupCalendar(this.getYear(), this.getMonth());
           var myScroll = new IScroll('#dayStrip',  { scrollX: true, scrollY: false, mouseWheel: false, bounce: false });
          
         
        }

    };



    hagenda.Timer = {
        sec: 1000,
        min: 0,
        hrs: 0,
        day:0,
        timer:0,
        end:0,
        idx: 'newcountdown',

        countDown: function(date) {
            this.end = new Date(date);
            this.min = this.sec * 60;
            this.hrs = this.min * 60;
            this.day = this.hrs * 24;
            this.timer = setInterval(this.showRemaining, 1000);
        },

        showRemaining: function() {
         var _this = hagenda.Timer;
         var now = new Date();
            var distance = _this.end - now;
            if (distance < 0) {
                clearInterval(_this.timer);
                console.log('expired');
                return;
            }
 
            var days = _this.appendZero(Math.floor(distance / _this.day));
            var hours = _this.appendZero(Math.floor((distance % _this.day) / _this.hrs));          
            var minutes = _this.appendZero(Math.floor((distance % _this.hrs) / _this.min));        
            var seconds = _this.appendZero(Math.floor((distance % _this.min) /_this.sec));
 
            $('.timer li:nth-child(1) span:nth-child(1)').html(days);
            $('.timer li:nth-child(2) span:nth-child(1)').html(hours);
            $('.timer li:nth-child(3) span:nth-child(1)').html(minutes);
            $('.timer li:nth-child(4) span:nth-child(1)').html(seconds);
        },

        appendZero: function(val) {
            if(val <= 9) {
                return '0' + val;
            } else {
                return val;
            }
        },

        init: function(){
           this.countDown('02/28/2014 10:00 AM');
        }

    }

}());

hagenda.Calendar.init();
hagenda.Timer.init();

