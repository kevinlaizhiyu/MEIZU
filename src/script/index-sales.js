class Sales {
    constructor() {
        this.phoneLi = $('#phone .main li');
        this.phoneImg = $('#phone .main li img');
        this.phoneName = $('#phone .main li .phone-name');
        this.phoneDesc = $('#phone .main li .phone-desc');
        this.phonePrice = $('#phone .main li .phone-price');

    }
    init() {
        $.ajax({
            url: 'http://localhost/MEIZU/php/meizu-data.php',
            dataType: 'json',
        }).done((data) => {
            // this.phoneImg.prop('src',)
            $.each(function(index, element) {
                console.log(index)
            })
        })
    }
}
export {
    Sales
}