//zepto scrollTop
$.fn.scrollTo =function(options){
    var defaults = {
        toT : 0,    //滚动目标位置
        durTime : 300,  //过渡动画时间
        delay : 30,     //定时器时间
        callback:null   //回调函数
    };
    var opts = $.extend(defaults,options),
        timer = null,
        _this = this,
        curTop = _this.scrollTop(),//滚动条当前的位置
        subTop = opts.toT - curTop,    //滚动条目标位置和当前位置的差值
        index = 0,
        dur = Math.round(opts.durTime / opts.delay),
        smoothScroll = function(t){
            index++;
            var per = Math.round(subTop/dur);
            if(index >= dur){
                _this.scrollTop(t);
                window.clearInterval(timer);
                if(opts.callback && typeof opts.callback == 'function'){
                    opts.callback();
                }
                return;
            }else{
                _this.scrollTop(curTop + index*per);
            }
        };
    timer = window.setInterval(function(){
        smoothScroll(opts.toT);
    }, opts.delay);
    return _this;
};
;(function ($, d) {

    $(d).ready(function (){
        //获取当前时间
        function time(){
            var date = new Date();
            var month = date.getMonth()+1;
            var day = date.getDate();
            var hour =date.getHours()>12?("下午"+(date.getHours()-12)):("上午"+date.getHours());
            var min = date.getMinutes()<10?("0"+date.getMinutes()):date.getMinutes();
            var time = month+"-"+day+" "+hour+":"+min;
            return time;
        }
        $("#time1").html(time());
        //显示第二个部分
        setTimeout(function(){
            scrolBottom();
            $("#one").show("slow");
            $("#time2").html(time());
        },1000);
        //点击显示
        $("#choose").on('click',function(){
            setTimeout(function(){
                scrolBottom();
                $(".clearfix").show("slow");
            },1000);
            setTimeout(function(){
                scrolBottom();
                $("#two").show("slow");
                $("#time3").html(time());
            },2000);
            setTimeout(function(){
                scrolBottom();
                $("#three").show("slow");
                $("#time4").html(time());
            },3000);    
        });

        //保持显示最下方内容
        function scrolBottom(){
            $("html, body").scrollTo({durTime: 500, toT: $(document).height()});
        }

        //跳转第二屏
        $('#record').on('click', function(){
            location.href='./html/fireRecord.html';
        });
        //跳转第三屏
        $('#notice').on('click', function(){
            location.href='./html/fireNotice.html';
        });
    })
})(Zepto,document)