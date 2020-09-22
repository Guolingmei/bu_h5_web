;(function ($,d,w) {
    function getSize() {
        var screenWidth = $('html').width();
        $('html').css('fontSize', screenWidth / (640 / 100) + 'px');
    }

    getSize();
    $(w).resize(function (event) {
        getSize();
    });
    $(d).ready(function(){
        //获取当前时间
        function time(){
            var date = new Date();
            var hour =date.getHours()>12?("下午"+" "+(date.getHours()-12)):("上午"+" "+ date.getHours());
            var min = date.getMinutes()<10?("0"+date.getMinutes()):date.getMinutes();
            var time = hour+":"+min;
            return time;
        }
        $("#time").html(time());
        $("#btn").on('click',function(){
            $("#mask").css('display','block');
            $("#introduce").css('display','block');
        })
        $("#return").on('click',function(){
            $("#mask").css('display','none');
            $("#introduce").css('display','none');
        })  
        $("#photo").on('click',function(){
            $("#photo").css('display','none');
        }) 
        $("#submit").on('click',function(){
            $("#mask").css('display','block');
            $("#success").css('display','block');
        })
    })
})(Zepto, document,window)
