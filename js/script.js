// $(document).ready(function() {
//   $('.dropdown-item').click(function() {
//     $(this).find('.dropdown-menu').toggleClass('active');
//   });
// });

$(document).ready(function() {
    //
    // $('.dropdown-item').click(function() {
    //     var sottomenu = $(this).find('.dropdown-menu');
    //     if(sottomenu.is(':visible')) {
    //         sottomenu.hide();
    //     } else {
    //         $('.dropdown-menu').hide();
    //         sottomenu.show();
    //     }
    //   });
    //

// Il click fa un pò brutto anche se ho messo l'opzione per chiudere tutti i drop aperti prima di aprirne uno nuovo,proprio a livello di esperienza visitatore penso, passo a mouseenter mouseleave

    $('.dropdown-item').mouseenter(function() {
        var sottomenu = $(this).find('.dropdown-menu');

            sottomenu.show();

      });
      $('.dropdown-item').mouseleave(function() {
          var sottomenu = $(this).find('.dropdown-menu');

              sottomenu.hide();

        });

// Per aprire chiudere l'hamburger menu(jquery mobile+++?)
      $('.burger-menu-icon').click(function() {
        $('#hamburger-menu').addClass('active');
      });
      $('i.fas.fa-times').click(function() {
        $('#hamburger-menu').removeClass('active');
      });

});
