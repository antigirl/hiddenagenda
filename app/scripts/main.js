// //A very simple parallax effect
// window.addEventListener('scroll', function() {

//     [].forEach.call(document.querySelectorAll('article'), function(row) {

//         var theSpeed = row.getAttribute("data-speed");
//         var yPos = - ((window.pageYOffset-row.offsetTop) / theSpeed);
//         var coords = '50% '+ yPos + 'px';
//         row.style.backgroundPosition = coords ;

//     });

// });


// $(window).on('scroll', function(){  
// 	var theSpeed = 2;
// 	var yPos =  ($('body').scrollTop() / theSpeed);
//      $('article').css('-webkit-transform',  'translate3d(0,'+ parseInt($('body').scrollTop() * 0.8,10) + 'px, 0)');
// }); 

$(function() {
    var offset = 0;
    var message = '';
    $(window).bind("scroll", function(event) {
    	offset =  parseInt($('body').scrollTop() * 0.1,	10)
        $('.parallaxWrapper img:nth-child(1)').css('-webkit-transform','translate3d(0,'+  offset +'px,0)');
        // $(".blocks:below-the-fold").each(function() {
        //  	 message = $(this).attr("id");
        // });

        	//var windows = document.documentElement.scrollTop;

    	var eleOffset = $('#second').offset().top;
    	var img2 = eleOffset + $('#second').height();

    	var docViewTop = $(window).scrollTop();
  		var docViewBottom = docViewTop + $(window).height();
    	 	// console.log(windows);
    	if(docViewBottom >= img2) {
        	//console.log('start moving third parallax image');
        		var offset2 =  $(window).height() - parseInt($('body').scrollTop() * 0.6, 10);
        	$('.parallaxWrapper img:nth-child(2)').css('-webkit-transform','translate3d(0,'+  offset2 +'px,0)');
       	}

       	if(docViewTop - eleOffset >= 0 ) {
       		// $('.parallaxWrapper img:nth-child(1)').css('-webkit-transform','translate3d(0,-90000px,0)');
       		//console.log('-9000px 2nd parallax image')
       	}


    	var eleOffset3 = $('#third').offset().top;
    	var img3 = eleOffset3 + $('#third').height();

    	if(docViewBottom >= img3) {
        	console.log('start moving third parallax image');
        		var offset3 =  $(window).height()  - parseInt($('body').scrollTop() * 0.3, 10);
        	$('.parallaxWrapper img:nth-child(3)').css('-webkit-transform','translate3d(0,'+  offset3 +'px,0)');
       	}

       	if(docViewTop - eleOffset3 >= 0 ) {
       		// $('.parallaxWrapper img:nth-child(1)').css('-webkit-transform','translate3d(0,-90000px,0)');
       	}       	

    });
});
