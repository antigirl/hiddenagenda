
















$(function() {
    var offset1 = 0;
    var offset2 = 0;
    var offset3 = 0;


    $(window).bind("scroll", function(event) {

        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var eleOffset1 = $('#first').offset().top;
        var img1 = eleOffset1 + $('#first').height();

        offset1 = 400 - ($('body').scrollTop() * 0.5);
        $('.parallaxWrapper .img1').css('-webkit-transform', 'translate3d(0,' + offset1 + 'px,0)');


        if (docViewTop - eleOffset1 >= 0) {
            $('.parallaxWrapper .img2').css('-webkit-transform', 'translate3d(0,-90000px,0)');
        }


        var eleOffset2 = $('#second').offset().top;
        var img2 = eleOffset2 + $('#second').height();


        if (docViewBottom >= img2) {
            offset2 = 400 - (($('body').scrollTop() * 0.5) - ((850+500)/2));
            $('.parallaxWrapper .img2').css('-webkit-transform', 'translate3d(0,' + offset2 + 'px,0)');
        }

        if (docViewTop - eleOffset2 >= 0) {
             $('.parallaxWrapper .img3').css('-webkit-transform', 'translate3d(0,-90000px,0)');
        }


        var eleOffset3 = $('#third').offset().top;
        var img3 = eleOffset3 + $('#third').height();

        if (docViewBottom >= img3) {
            offset3 = 400 - (($('body').scrollTop() * 0.5) - ((850+500+850+500)/2));
            $('.parallaxWrapper .img3').css('-webkit-transform', 'translate3d(0,' + offset3 + 'px,0)');
        }

        if (docViewTop - eleOffset3 >= 0) {
            $('.parallaxWrapper .img4').css('-webkit-transform', 'translate3d(0,-90000px,0)');
        }
    });
});



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

// $(".blocks:below-the-fold").each(function() {
//     message = $(this).attr("id");
// });

//var windows = document.documentElement.scrollTop;


// offset = parseInt($('body').scrollTop() * 0.1, 10)
// $('.parallaxWrapper img:nth-child(1)').css('-webkit-transform', 'translate3d(0,' + offset + 'px,0)');


// var eleOffset = $('#second').offset().top;
// var img2 = eleOffset + $('#second').height();

// var docViewTop = $(window).scrollTop();
// var docViewBottom = docViewTop + $(window).height();

// if (docViewBottom >= img2) {

//     //  console.log('second image is in view');
//     var offset2 = $(window).height() - parseInt($('body').scrollTop() * 0.5, 10);
//     var offset2a = -(($('body').scrollTop() - $('#second').offset().top) - 100) * 0.2;
//     offset3a = offset3a - 1;
//     console.log(offset3a);
//     offsetz = -parseInt($('body').scrollTop() * 0.1, 10)
//     $('.parallaxWrapper img:nth-child(2)').css('-webkit-transform', 'translate3d(0,' + offsetz + 'px,0)');
// }

// if (docViewTop - eleOffset >= 0) {
//     $('.parallaxWrapper img:nth-child(1)').css('-webkit-transform', 'translate3d(0,-90000px,0)');
//     //    console.log('second image is reached head');
// }


// var eleOffset3 = $('#third').offset().top;
// var img3 = eleOffset3 + $('#third').height();
// var offset3a = -(($('body').scrollTop() - $('#third').offset().top) - 100) * 0.2;
// if (docViewBottom >= img3) {
//     offsetz = -parseInt($('body').scrollTop() * 0.1, 10)
//     $('.parallaxWrapper img:nth-child(3)').css('-webkit-transform', 'translate3d(0,' + offsetz + 'px,0)');
// }

// if (docViewTop - eleOffset3 >= 0) {
//     $('.parallaxWrapper img:nth-child(2)').css('-webkit-transform', 'translate3d(0,-90000px,0)');
// }