
;(function ($, w) {
    /* 设置rem的字体 */

    /* ================================================== */
    function getSize() {
        var screenWidth = $('html').width();
        $('html').css('fontSize', screenWidth / (640 / 100) + 'px');
    }

    getSize();
    $(w).resize(function (event) {
        getSize();
    });
})(Zepto,window)