/**
 * Created by tkolstrom on 1/31/17.
 */

$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});



$(document).ready(function(){



    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

        $('.navbar-toggle').click();



        if (this.has !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate( {
                scrollTop: $(hash).offset().top
            }, 900, function() {
                window.location.hash = hash;
            });
        }

    });





    $('.btn').on('click', function() {

        $(this).find('#gArrow').toggleClass('glyphicon-triangle-top', 'glyphicon-triangle-bottom');
        // $(this).animateCss('bounce');




    });


    $('.collapse').on('show.bs.collapse', function() {

        // $(this).collapse();
        //
        // $('.collapse').each(function(index) {
        //     if(!$(this).isCollapsed()){
        //       $(this).collapse();
        //     }
        // });

        $(this).animateCss('fadeInDown');

    });





});


