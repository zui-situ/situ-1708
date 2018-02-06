require(['config'],function(){
    require(['jquery'],function($){
        // 轮播图部分
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


        // 设置鼠标悬停图片上时，图片上移
        $('.good-up').on('mouseenter',function(){
            $(this).css({
                'marginTop':-5,
                'marginBottom':5
            })
        }).on('mouseleave',function(){
            $(this).css({
                'marginTop':0,
                'marginBottom':0
            })
        })


        // 首页吸顶和楼梯
        var $classify = $('.nav .classify');
        var $height = $('.global-seller').outerHeight(true);
        // 获取滚动条滚动过的距离
        $(window).scroll(function(){
            var $scrollTop = $(window).scrollTop();
            if($scrollTop>=720){
                $('.ceiling').fadeIn();
                $('.stairway').fadeIn();
            }else{
                $('.ceiling').fadeOut();
                $('.stairway').fadeOut();
            }
            var $i = Math.floor(($scrollTop-720)/$height);
            var $idx = $i>0 ? $i : null;
            var $a = $classify.find('a');
            $a.find('i').css({'display':'block'})
            $a.find('span').css({'display':'none'});
            $a.eq($idx).find('i').css({'display':'none'});
            $a.eq($idx).find('span').css({'display':'block'})
        })
        $classify.on('mouseenter','a',function(){
            $(this).find('i').css({'display':'none'});
            $(this).find('span').css({'display':'block'});
        }).on('mouseleave','a',function(){
            $(this).find('i').css({'display':'block'});
            $(this).find('span').css({'display':'none'});
        })
        $classify.on('click','a',function(e){
            var $idx = $(this).index();
            var $scrollTop = $height*$idx+720;
            $('html,body').stop().animate({scrollTop:$scrollTop});
        });
        $('.go-top').on('click',function(e){
            $('html,body').stop().animate({scrollTop:0});
            e.preventDefault();
        })
    })
});

