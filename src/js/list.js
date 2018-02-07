require(['config'],function(){
    require(['jquery'],function($){
        // logo轮播图
        var $logoPackage =$('.logo-package');
        $logoPackage.children().eq(0).clone(true).appendTo($logoPackage);
        var $width = $logoPackage.children().eq(0).outerWidth(true);
        var $len = $logoPackage.children().length;
        $logoPackage.css({width:$width*$len});
        var $btnLeft=$('.logo-page .page-left');
        var $btnRight = $('.logo-page .page-right');
        var idx=0;
        $btnRight.on('click',function(e){
            idx++;
            if(idx>=$len){
                $logoPackage.css({left:0});
                idx=1;
            }
            var target =-$width*idx;
            $logoPackage.stop().animate({left:target});
            e.preventDefault();
        });
        $btnLeft.on('click',function(e){
            idx--;
            if(idx<=-1){
                $logoPackage.css({left:-$width*($len-1)});
                idx=$len-2;
            }
            var target = -$width*idx;
            $logoPackage.stop().animate({left:target});
            e.preventDefault();
        });
        $('.vendor-name').on('mouseenter',function(){
            $('.droplist').show();
        }).on('mouseleave',function(){
            $('.droplist').hide();
        })
        $('.goods-list').on('mouseenter','.goods-item',function(){
            var $this = $(this);
            $this.css({borderColor:'#FF4444'});
            $this.find('.goods-price').stop().animate({marginTop:-28,marginBottom:28},200);
            $this.find('.goods-intro').stop().animate({marginTop:-28,marginBottom:28},200);
            $this.find('.car-btn').stop().fadeIn();
        }).on('mouseleave','.goods-item',function(){
            var $this = $(this);
            $this.css({borderColor:'#F6F6F6'});
            $this.find('.goods-price').stop().animate({marginTop:0,marginBottom:0},200);
            $this.find('.goods-intro').stop().animate({marginTop:0,marginBottom:0},200);
            $this.find('.car-btn').stop().fadeOut();
        })
    })
})