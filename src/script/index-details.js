class HeadDetails {
    constructor() {
        this.$HeadNav = $('.hd-nav ');
        this.$HeadLi = $('#header ul li');
        this.$HeadA = $('#header ul li a');
        this.$Head = $('#header');
        this.$HeadDetails = $('#head-details');
        this.$HeadDetailsCenter = $('#head-details center');
        this.$HeadLogo = $('#header .header_center .logo .icon-meizu')
    }
    init() {
        this.$HeadNav.on('mouseover', () => {
            this.$Head.css({
                background: 'white',
            })
            this.$HeadA.css({
                color: '#474747',
            })
            this.$HeadLogo.css({
                color: '#00b9f2',
            })
            this.$HeadDetails.stop(true).animate({
                height: 260
            })

        })
        this.$HeadNav.on('mouseout', () => {
            this.$HeadDetails.stop(true, true).animate({
                height: 0,
            }, 0)
            this.$Head.css({
                background: 'transparent',
            })
            this.$HeadA.css({
                color: '#fff',
            })
            this.$HeadLogo.css({
                color: '#fff',
            })

            //鼠标移动效果
            this.$HeadLi.on('mouseover', function() {
                $(this).children(0).css({
                    color: '#00b9f2',
                })

            })
            this.$HeadLi.on('mouseout', function() {
                $(this).children(0).css({
                    color: '#fff',
                })

            })

        })
    }
}
export {
    HeadDetails
};