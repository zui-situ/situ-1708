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


        //ajax数据接收
        var pageNo =1;
        var qty =24;
        var $itemWrap = $('.main-right .goods-list');
        var $page=$('.filter-pager .pager');
        $.ajax({
            type:'POST',
            url:'../api/list.php',
            dataType:'json',
            data:{
                    pageNo:pageNo,
                    qty:qty
                },
            success:function(res){
                console.log(res);
                var $lis=res.data.map(function(item){
                    return`
                        <li class="goods-item" data-id="${item.id}">
                           <div class="goods-inner">
                                <a href="details.html?id=${item.id}" class="goods-img"><img src="${item.imgs}" alt="" /></a>
                                <span class="goods-price">￥${item.price}</span>
                                <p class="goods-intro">
                                    <a href="details.html?id=${item.id}">
                                        ${item.name}
                                    </a>
                                </p>
                                <a href="" class="car-btn">加入购物车</a>
                                <div class="shop-name clearfix">
                                   <em></em>
                                   <span><a href="">${item.shop}</a></span>
                                   <i class="country"></i>
                                </div>
                            </div>
                        </li>
                    `
                })
                $itemWrap.html($lis);
                // 处理分页
                var pageQty = Math.ceil(res.total/res.qty);
                var pageInner= `<li><a href="">首页</a></li>`;
                for(var i=1;i<=pageQty;i++){
                    pageInner +=`<li class="page-num"><a href="">${i}</a></li>`
                }
                pageInner +=`
                    <li><a href="">下一页</a></li>
                    <li><a href="">尾页</a></li>
                    <li class="total-page">共<b>${pageQty}</b>页</li>
                    <li class="goto-page">
                        <form action="">
                            到第
                            <input type="text" class="custom-page"/>
                            页
                            <input type="submit" /  class="custom-enter" value="确定">
                        </form>
                    </li>
                `
                $page.html(pageInner);
                console.log($('.filter-pager .pager .page-num'));
                $('.filter-pager .pager .page-num').eq(pageNo-1).children('a').addClass('active');
            }
        })
        $page.on('click','a',function(e){
            var $pageEnd =$('.filter-pager .pager .page-num').last().children('a').text();
            console.log($pageEnd);
            var $this =$(this);
            var $txt =$this.text();
            if($txt==='首页'){
                pageNo=1;
            }else if($txt==='尾页'){
                pageNo=$pageEnd;
            }else if($txt==='下一页'){
                pageNo++;
                pageNo = pageNo>$pageEnd ? $pageEnd : pageNo;
            }else{
                pageNo=$txt*1;
            }
            $.ajax({
                type:'POST',
                url:'../api/list.php',
                dataType:'json',
                data:{
                        pageNo:pageNo,
                        qty:24
                    },
                success:function(res){
                    var $lis=res.data.map(function(item){
                        return`
                            <li class="goods-item" data-id="${item.id}">
                               <div class="goods-inner">
                                    <a href="details.html?id=${item.id}" class="goods-img"><img src="${item.imgs}" alt="" /></a>
                                    <span class="goods-price">￥${item.price}</span>
                                    <p class="goods-intro">
                                        <a href="details.html?id=${item.id}">
                                            ${item.name}
                                        </a>
                                    </p>
                                    <a href="" class="car-btn">加入购物车</a>
                                    <div class="shop-name clearfix">
                                       <em></em>
                                       <span><a href="">${item.shop}</a></span>
                                       <i class="country"></i>
                                    </div>
                                </div>
                            </li>
                        `
                    })
                    $itemWrap.html($lis);
                    $this.parent().siblings().children('a').removeClass('active');
                    $('.filter-pager .pager .page-num').eq(pageNo-1).children('a').addClass('active');
                }
            })
            e.preventDefault();
        })
        $('.custom-enter').on('click',function(){
            e.preventDefault();
            console.log(666);
        })
    })
})