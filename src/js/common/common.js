/**
 * Created by szatpig on 2017/9/18.
 */
define(function () {
    return{
        GetQueryString:function (name){
            var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if(r!=null)return  unescape(r[2]); return null;
        },
        checkAll:function (str){
            $('body').append('<div class="tips"></div>');
            str = str || '发生未知错误，请多刷新再试'
            var length=str.length;
            if(length>0&length<12||length===12){
                $('.tips').css({'width':'4rem'});
            }
            if(length>12&length<35){
                $('.tips').css({'width':'6rem','font-size':'0.26rem'});
            }
            $(".tips").html(str);
            setTimeout(function () {
                $(".tips").hide(8000).remove();
            },1000)
        },
    }
})