/**
 * Created by tkolstrom on 1/31/17.
 */

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




    $('.btn').on('click', function(event) {

        $(this).find('#gArrow').toggleClass('glyphicon-triangle-top', 'glyphicon-triangle-bottom');


    });






});


