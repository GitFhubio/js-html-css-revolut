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
