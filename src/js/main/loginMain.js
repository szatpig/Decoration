/**
 * Created by szatpig on 2017/9/18.
 */
requirejs.config({
   baseUrl:'/js',
    paths:{
       'zepto':'lib/zepto.min'
    },
    shim:{
       
    }
});

requirejs(['zepto'],function () {
    require(['login/login'])
})