$('.close').hide();
$('.mobile-button-part').hide();

$('.open').click(function () {
    $('.mobile-button-part').slideDown();
    $('.close').show();
    $('.open').hide();
})
$('.close').click(function () {
    $('.mobile-button-part').slideUp();
    $('.close').hide();
    $('.open').show();
})



