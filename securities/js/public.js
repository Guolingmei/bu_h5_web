
;
(function ($, d, w) {
    /* 设置rem的字体 */

    /* ================================================== */
    function getSize() {
        var screenWidth = $('html').width();
        if (screenWidth <= 320) {
            $('html').css('fontSize', '50px');
        } else if (screenWidth >= 800) {
            $('html').css('fontSize', '125px');
        } else {
            $('html').css('fontSize', screenWidth / (640 / 100) + 'px');
        }
    }

    getSize();
    $(w).resize(function (event) {
        getSize();
    });

    $(d).ready(function () {
        function time(){
            var date = new Date();
            var hour =date.getHours()>12?("下午 "+(date.getHours()-12)):("上午 "+date.getHours());
            var min = date.getMinutes()<10?("0"+date.getMinutes()):date.getMinutes();
            var time =" "+hour+":"+min;
            return time;
        };
        $("aside").text(time);
        $("#get-time").text(time());
        $("#control").click(function(){
            var audios=$("#audio")[0];
            if(audios.paused){
                $("#control").attr("src","./images/play.png")
                audios.play();
            }else{
                $("#control").attr("src","./images/pause.png")
                audios.pause()
            }
        });
    });
})(Zepto, document, window)

