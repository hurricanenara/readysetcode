    if ((!isIPadPro && !isiPad) && $(window).width() < 1025) {
        console.log('screenWidth');
        $('body').append(`<div class="expand-screen-message">Please make the window size a touch bigger!</div>`);
        $('.desktop').remove();
        $('.expand-screen-message').show();
        window.addEventListener('resize', () => {
            if ((!isIPadPro && !isiPad) && $(window).width() >= 1025) {
                console.log('elsif')
                $('.expand-screen-message').remove();
                // $('.desktop').show();
                this.location.reload();
            } 
        });
    } else if ((!isIPadPro && !isiPad) && $(window).width() >= 1025) {
        window.addEventListener('resize', () => {
            if ((!isIPadPro && !isiPad) && $(window).width() < 1025) {
                $('.desktop').remove();
                $('body').append(`<div class="expand-screen-message">Please make the window size a touch bigger!</div>`);
            } else if ((!isIPadPro && !isiPad) && $(window).width() >= 1025) {
                $('.expand-screen-message').remove();
                // $('.desktop').show();
                this.location.reload();
            }
        });
    }