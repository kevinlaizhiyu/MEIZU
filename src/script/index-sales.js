class Sales {
    constructor() {


    }
    init() {
        $.ajax({
            url: "http://10.31.152.65/MEIZU/php/meizu-data.php",
            dataType: "json",
        }).done((data) => {
            for (let value in data) {
                if (value.sid <= 2) {

                } else {

                }
            }
        })
    }
}
export {
    Sales
}