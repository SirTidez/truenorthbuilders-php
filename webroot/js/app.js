$(document).foundation();

$('.header').on('sticky.zf.stuckto:top', function() {
    $(this).addClass('shrink');
}).on('sticky.zf.unstuckfrom:top', function() {
    $(this).removeClass('shrink');
})
