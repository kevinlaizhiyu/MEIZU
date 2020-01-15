class Tab {
    constructor() {

    }
    init() {
        $('.tab-title a').on('click', function() {
            $(this).addClass('title-login').siblings().removeClass('title-login');
            console.log($(this).index('a'));
            $('.info').eq($(this).index('.tab-title a')).show().siblings('.info').hide();
        })

    }
}
export {
    Tab
}