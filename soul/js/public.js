(function ($, d, w) {
  /* 设置rem的字体 */

  /* ================================================== */
  function getSize() {
    var screenWidth = $("html").width();
    $("html").css("fontSize", screenWidth / (640 / 100) + "px");
  }

  getSize();
  $(w).resize(function (event) {
    getSize();
  });

  $(d).ready(function () {
    //获取当前时间
    function time() {
      var date = new Date();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      var hour =
        date.getHours() > 12
          ? "下午" + (date.getHours() - 12)
          : "上午" + date.getHours();
      var min =
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      var time = month + "-" + day + " " + hour + ":" + min;
      return time;
    }
    $("#time").html(time());
    //显示第二个部分
    setTimeout(function () {
      $("#one").show("slow");
      $("#time2").html(time());
    }, 1000);

    //点击显示
    $("#choose1").on("click", function (e) {
      $(".btn1").show();
      setTimeout(function () {
        $("#look1").show("slow");
        $("#time1").html(time());
      }, 500);
    });
    $("#choose2").on("click", function (e) {
      $(".btn2").show();
      setTimeout(function () {
        $("#look2").show("slow");
        $("#time2").html(time());
      }, 500);
    });
    $("#choose3").on("click", function (e) {
      $(".btn3").show();
      setTimeout(function () {
        $("#look3").show("");
        $("#time3").html(time());
      }, 500);
    });
  });
})(Zepto, document, window);
