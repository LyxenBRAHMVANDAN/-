$(document).ready(function(){
    const $splashScreen = $('#splashScreen');
    setTimeout(() => {
        $splashScreen.hide();
    }, 2000);

    // AJAX form submission to stay on the same page
    const $form = $('#contactForm');
    const $successMessage = $('#successMessage');

    $form.on('submit', function(e) {
        e.preventDefault();
        const $submitBtn = $('#submitBtn');
        $submitBtn.prop('disabled', true).text('Sending...');

        $.ajax({
            url: $form.attr('action'),
            method: 'POST',
            data: $form.serialize(),
            dataType: 'json',
            success: function(response) {
                $form.fadeOut(300, function() {
                    $successMessage.fadeIn(300);
                });
            },
            error: function(err) {
                $form.fadeOut(300, function() {
                    $successMessage.fadeIn(300);
                });
            }
        });
    });
});