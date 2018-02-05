require(['config'],function(){
    require(['jquery'],function($){
        // 显示第一张
        $('.banner .images li').eq(0).show();
        $('.banner .page li').eq(0).children().addClass('action');
        var idx =0;
        var timer=setInterval(autoPlay,5000);
        // 自动向右播放
        function autoPlay(){
            idx++;
            idx=idx>4? 0:idx;
            $('.banner .images li').eq(idx).fadeIn(500).siblings().fadeOut(500);
            $('.banner .page li').eq(idx).children().addClass('action').parent().siblings().children().removeClass('action')
        }
        function leftPlay(){
            idx--;
            idx=idx<0? 4:idx;
            $('.banner .images li').eq(idx).fadeIn(500).siblings().fadeOut(500);
            $('.banner .page li').eq(idx).children().addClass('action').parent().siblings().children().removeClass('action')
        }
        var $page = $('.banner .page');
        $page.on('click','a',function(e){
            e.preventDefault();
        })
        $('.banner').on('mouseenter',function(){
            $('.btn .btn-left').stop().animate({marginLeft:0});
            $('.btn .btn-right').stop().animate({marginRight:0});
        })
        $('.banner').on('mouseleave',function(){
            $('.btn .btn-left').stop().animate({marginLeft:-60});
            $('.btn .btn-right').stop().animate({marginRight:-60});
        })
        // 鼠标放入小点移动
        $page.on('mouseenter','a',function(){
            idx = $(this).parent().index();
            $(this).addClass('action').parent().siblings().children().removeClass('action');
            $('.banner .images li').eq(idx).fadeIn(500).siblings().fadeOut(500);
        })
        // 向左移动
        $('.btn .btn-left').on('click',function(e){
            leftPlay();
            e.preventDefault();
        })
        $('.btn .btn-right').on('click',function(e){
            autoPlay();
            e.preventDefault();
        })
    })
});

