$('.modal').on('shown.bs.modal', function () {
    $('body').addClass('modal-open').css("padding-right", "17px");
});

$('.day_month').click(function() {
    let day = $(this).data('filter');
    $('.day-item').hide();
    $(day).show();
});



