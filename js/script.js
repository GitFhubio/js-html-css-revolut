// $(document).ready(function() {
//   $('.dropdown-item').click(function() {
//     $(this).find('.dropdown-menu').toggleClass('active');
//   });
// });

$(document).ready(function() {

    $('.dropdown-item').click(function() {
        var sottomenu = $(this).find('.dropdown-menu');
        if(sottomenu.is(':visible')) {
            sottomenu.hide();
        } else {
            $('.dropdown-menu').hide();
            sottomenu.show();
        }

    });


});

$('.burger-menu-icon').click(function() {
  $('#hamburger-menu').addClass('active');
});
$('i.fas.fa-times').click(function() {
  $('#hamburger-menu').removeClass('active');
});
});
