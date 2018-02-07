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


        // 小轮播图无缝滚动
        // 复制第一组到最后
        var $mbMain = $('#classify-mb .carousel .carousel-main');
        var $hnMain = $('#classify-hn .carousel .carousel-main');
        var $beMain = $('#classify-beauty .carousel .carousel-main');
        var $pcMain = $('#classify-pc .carousel .carousel-main');
        var $gfMain = $('#classify-gf .carousel .carousel-main');
        var $hkMain = $('#classify-hk .carousel .carousel-main');
        var $cMain = $('.carousel .carousel-main');
        var $mbfirst=$mbMain.children().eq(0).clone(true).appendTo($mbMain);
        var $hnfirst=$hnMain.children().eq(0).clone(true).appendTo($hnMain);
        var $befirst=$beMain.children().eq(0).clone(true).appendTo($beMain);
        var $pcfirst=$pcMain.children().eq(0).clone(true).appendTo($pcMain);
        var $gffirst=$gfMain.children().eq(0).clone(true).appendTo($gfMain);
        var $hkfirst=$hkMain.children().eq(0).clone(true).appendTo($hkMain);
        var $len = $mbMain.children().length;
        var $width = $mbMain.children().eq(0).outerWidth(true);

        var $mbPage = $('#classify-mb .carousel .carousel-page');
        var $hnPage = $('#classify-hn .carousel .carousel-page');
        var $bePage = $('#classify-beauty .carousel .carousel-page');
        var $pcPage = $('#classify-pc .carousel .carousel-page');
        var $hkPage = $('#classify-hk .carousel .carousel-page');
        var $gfPage = $('#classify-gf .carousel .carousel-page');
        var $cPage = $('.carousel .carousel-page');
        $mbPage.children().eq(0).css({background:'#7F7F7F'});
        $hnPage.children().eq(0).css({background:'#7F7F7F'});
        $bePage.children().eq(0).css({background:'#7F7F7F'});
        $pcPage.children().eq(0).css({background:'#7F7F7F'});
        $hkPage.children().eq(0).css({background:'#7F7F7F'});
        $gfPage.children().eq(0).css({background:'#7F7F7F'});

        $mbMain.css({'width':$width*$len});
        $hnMain.css({'width':$width*$len});
        $beMain.css({'width':$width*$len});
        $pcMain.css({'width':$width*$len});
        $gfMain.css({'width':$width*$len});
        $hkMain.css({'width':$width*$len});
        var i = 0;
        function carAuto(){
            i++;
            cShow();
        }
        var cTimer = setInterval(carAuto,5000);
        $cPage.on('click','a',function(e){
            i = $(this).index();
            cShow();
            e.preventDefault();
        })
        $cMain.on('mouseenter',function(){
            clearInterval(cTimer);
        }).on('mouseleave',function(){
            cTimer = setInterval(carAuto,5000);
        });
        function cShow(){
            if(i>=$len){
                $cMain.css({left:0});
                i=1;
            }
            $cPage.children().css({background:'#CCCCCC'})

            if(i<$len-1){
                $mbPage.children().eq(i).css({background:'#7F7F7F'});
                $hnPage.children().eq(i).css({background:'#7F7F7F'});
                $bePage.children().eq(i).css({background:'#7F7F7F'});
                $pcPage.children().eq(i).css({background:'#7F7F7F'});
                $hkPage.children().eq(i).css({background:'#7F7F7F'});
                $gfPage.children().eq(i).css({background:'#7F7F7F'});

            }else{
                $mbPage.children().eq(0).css({background:'#7F7F7F'});
                $hnPage.children().eq(0).css({background:'#7F7F7F'});
                $bePage.children().eq(0).css({background:'#7F7F7F'});
                $pcPage.children().eq(0).css({background:'#7F7F7F'});
                $hkPage.children().eq(0).css({background:'#7F7F7F'});
                $gfPage.children().eq(0).css({background:'#7F7F7F'});
            }
            var target = -$width*i;
            $cMain.stop().animate({left:target})
        }


        // brand部分轮播图
        var $billList = $('.bill-show .bill-list');
        var $billFirst = $billList.children().eq(0).clone(true).appendTo($billList);
        var $bWidth = $billList.children().eq(0).outerWidth(true);
        var $bLen = $billList.children().length;
        var $leftNum = $('.bill-top .bill-page .bill-change');
        var $rightNum = $('.bill-top .bill-page .bill-num');
        $rightNum.html($bLen-1);
        $billList.css({width:$bWidth*$bLen});
        var bIdx = 0;
        function bAuto(){
            bIdx++;
            bShow();
        }
        var bTimer = setInterval(bAuto,10000);
        $billList.on('mouseenter',function(){
            clearInterval(bTimer);
        }).on('mouseleave',function(){
            bTimer = setInterval(bAuto,10000);
        });

        function bShow(){
            if(bIdx>=$bLen){
                $billList.css({left:0});
                bIdx=1;
            }
            if(bIdx<$bLen-1){
                $leftNum.html(bIdx+1);
            }else{
                $leftNum.html(1);
            }
            var target = -$bWidth*bIdx;
            $billList.stop().animate({left:target})
        }

        $('.bill-top .bill-page .arrow-left').on('click',function(){
            bIdx--;
            console.log(bIdx);
            console.log($billList.css('left'));
            if(bIdx<0){
                $billList.css({left:-$bWidth*($bLen-1)});
                bIdx=$bLen-2;
            }
            if(bIdx>-1){
                $leftNum.html(bIdx+1);
            }else{
                $leftNum.html($bLen-1);
            }
            var target = -$bWidth*bIdx;
            $billList.stop().animate({left:target})
        })
        $('.bill-top .bill-page .arrow-right').on('click',function(){
            bIdx++;
            bShow();
        });
    })
});

