;
(function ($, d, w) {
    var mySwiper = null;
    var music = null;
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

    $(d).ready(function () {
        $("#report").on('click', function (e) {
            location.href = 'report.html'
        });
        $("#js-submit").on('click', function (e) {
            alert('举报成功');
        });
        $('#upload').click(function () {
            $('#filed').click();
        });
        $('#upload-video').click(function () {
            $('#video').click();
        });
        //在input file内容改变的时候触发事件
        $('#filed').change(function () {
            //获取input file的files文件数组;
            //$('#filed')获取的是jQuery对象，.get(0)转为原生对象;
            //这边默认只能选一个，但是存放形式仍然是数组，所以取第一个元素使用[0];
            var file = $('#filed').get(0).files[0];
            //创建用来读取此文件的对象
            var reader = new FileReader();
            //使用该对象读取file文件
            reader.readAsDataURL(file);
            //读取文件成功后执行的方法函数
            reader.onload = function (e) {
                //读取成功后返回的一个参数e，整个的一个进度事件
                //选择所要显示图片的img，要赋值给img的src就是e中target下result里面的base64编码格式的地址
                var element = '';
                element += "<img style='width:1.6rem;height:1.6rem;margin-right: 0.1rem' src='" + e.target.result +
                    "' alt=''/>";
                $('#img-box').append(element);
            }
        })
        $('#video').change(function () {
            var file = $('#video').get(0).files[0];
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (e) {
                var video = '';
                video += "<video style='width:1.6rem;height:1.6rem;margin-right: 0.1rem' controls='controls' src='" + e.target.result +
                    "'/>";
                $('#video-box').append(video);
            }
        })
    });
})(Zepto, document, window)