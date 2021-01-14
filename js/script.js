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

// il click fa un pò brutto anche se ho messo di chiudere tutti i drop aperti prima di aprirne uno nuovo,proprio a livello di esperienza visitatore penso, passo a mouseenter mouseleave 

    $('.dropdown-item').mouseenter(function() {
        var sottomenu = $(this).find('.dropdown-menu');

            sottomenu.show();

      });
      $('.dropdown-item').mouseleave(function() {
          var sottomenu = $(this).find('.dropdown-menu');

              sottomenu.hide();

        });
      // $('.dropdown-item').mouseleave(function() {
      //     var sottomenu = $(this).find('.dropdown-menu');
      //     if(sottomenu.is(':visible')) {
      //         sottomenu.hide();
      //     } else {
      //         $('.dropdown-menu').hide();
      //         sottomenu.show();
      //     }
      //   });

// Per spegnere e accendere l'hamburger menu
      $('.burger-menu-icon').click(function() {
        $('#hamburger-menu').addClass('active');
      });
      $('i.fas.fa-times').click(function() {
        $('#hamburger-menu').removeClass('active');
      });

});
