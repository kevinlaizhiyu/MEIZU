class Stair {
    constructor() {

    }
    init() {
        $('#stair li').not('.last').on('click', function() {
            $(this).addClass('active').siblings('li').removeClass('active')
        })
        $('#stair li').not('.last').on('click', function() {
            let $top = $('.floor').eq($(this).index()).offset().top;
            $('html').animate({
                scrollTop: $top
            })
        })
        $('#stair li').on('mousemove', function() {
            $(this).addClass('active').siblings('li').removeClass('active');
        })
        $('#stair .last').on('click', function() {
            $(this).addClass('active').siblings('li').removeClass('active')
            $('html').animate({
                scrollTop: 0
            })
        })
        $(window).on('scroll', function() {
            let $top = $(window).scrollTop()
            if ($(this).scrollTop() > 600) {
                $('#stair').show();
            } else {
                $('#stair').hide();
            }
            $('.floor').each(function(index, element) {
                let $ltop = $('.floor').eq(index).offset().top + $('.floor').eq(index).height();

                if ($ltop > $top) {
                    $('#stair li').eq(index).addClass('active').siblings('li').removeClass('active');
                    return false;
                }
            })
        })
    }
}
export {
    Stair
}