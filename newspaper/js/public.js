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
        var txt1 = '<aside id="profile">集团简介</aside><section id="profile-content"><div class="content"><a href="./html/media.html"><img src="./images/group-profile.png" alt="集团简介"><article><h3>新华报业传媒集团</h3><p>新华报业传媒集团，为江苏省属大型国有企业。</p></article></a></div></section>'
        var txt2 = '<aside>5G建设</aside><section><div class="content"><a href="./html/fiveG.html"><img src="./images/5G.png" alt="5G建设"><article><h3>“5G：新基建·新动能”，5G全场景赋能百业</h3><p>5G网络，逐渐飞入寻常百姓家</p></article></a></div></section>'
        var txt3 = '<aside>直播</aside><section><div class="content"><video src="./images/broadcast.mp4" controls poster="./images/broadcast.png"></video><article><h3>交汇点直播 | 2020世界工业与能源互联网暨国际工业装备博览会</h3><p>9月16日上午8:30，2020世界工业与能源互联网暨国际工业装备博览会在常州中吴宾馆开幕</p></article></div></section>'
        var txt4 = '<aside>旅游</aside><section><div class="content"><a href="./html/travel.html"><img src="./images/travel.png" alt="旅游"></a><article><a href="./html/travel.html"><h3>打造全域旅游高质量“样板”——“全域旅游看江苏”之大丰篇</h3></a><div class="link"><a href="./html/ticketing.html">立即购票</a></div></article></div></section> '
        $("#group-profile").click(function () {
            $("#add").append(txt1);
        });
        $("#5G").click(function(){
            $("#add").append(txt2);
        });
        $("#broadcast").click(function(){
            $("#add").append(txt3);
        });
        $("#travel").click(function(){
            $("#add").append(txt4);
        });
    })

    $(d).ready(function () {
        // 中华麋鹿园>购票成功>页面跳转
        $("#pur-submit").on('click', function (e) {
            alert('购票成功');
        });
    });
})(Zepto, document, window)
