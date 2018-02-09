require(['config'],function(){
    require(['jquery'],function($){
        var id = window.location.search.slice(-1);
        console.log(id);
        var $product = $('.details-main .product-essential');
        var $name =$('.breadcrumbs .category');
        $.ajax({
            url:'../api/details.php',
            dataType:'json',
            data:{
                    id:id
                },
            success:function(data){
                console.log(data);
                var country=(`${data.country}`).slice(0,2);
                var productName = `<h2>${data.name}</h2>`;
                $name.html(productName);
                var content = `
                    <div class="product-img">
                        <div class="product-zoom">
                            <img src="${data.imgs}" alt="" />
                        </div>
                        <div class="more-views">
                            <ul class="clearfix">
                                <li>
                                    <img src="../img/zoom1.jpg" alt="" />
                                </li>
                                <li>
                                    <img src="../img/zoom2.jpg" alt="" />
                                </li>
                                <li>
                                    <img src="../img/zoom3.jpg" alt="" />
                                </li>
                                <li>
                                    <img src="../img/zoom4.jpg" alt="" />
                                </li>
                            </ul>
                        </div>
                        <div class="bdshare-btn">
                            <span>分享:</span>
                            <a href=""></a>
                            <a href=""></a>
                            <a href=""></a>
                            <a href=""></a>
                            <a href=""></a>
                        </div>
                    </div>
                    <div class="product-info">
                        <div class="product-name">
                            <h3 class="ch-name">${data.name}</h3>
                            <div class="country">
                                <span class="way-de">${country}<i></i></span>
                                <span class="v-bar">|</span>
                                <a href="" class="brand">${data.brand}</a>
                            </div>
                            <p class="product-content">
                                ${data.description}
                            </p>
                        </div>
                        <div class="product-promotion">
                            <div class="line">
                                <label>价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格</label>
                                <em class="rmb-price">￥${data.price}</em>
                            </div>
                            <div class="line">
                                <label>限时折扣</label>
                                <span>
                                    <b>${data.original_price}</b>
                                </span>
                            </div>
                            <div class="line">
                                <label>进口关税</label>
                                <i>￥${data.tallage}</i>
                                <span>（商家承担）</span>
                            </div>
                        </div>
                        <div class="product-options">
                            <label>服&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;务</label>
                            <span>${data.country}</span>
                        </div>
                        <div class="product-add">
                            <label for="qty">数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;量</label>
                            <div class="qty-block">
                                <a href="" class="sub"></a>
                                <input type="text" name="qty" id="qty" value="${data.qty}" title="数量"/>
                                <a href="" class="add"></a>
                            </div>
                        </div>
                        <a href="" class="buy-car">
                            加入购物车
                        </a>
                        <img src="../img/server.png" alt="" />
                    </div>
                    <div class="supplier">
                        <img src="../img/haituncun.jpg" alt="" class="logo"/>
                        <h2 class="title">${data.shop}</h2>
                        <p class="intro">
                            海豚村全球精品，源自世界优质大牌直供。并以建立海外专属直邮物流渠道，为您提供全新便捷的海外购物体验。
                        </p>
                        <div class="product-alike">
                            <p>看了又看</p>
                            <div class="alike-show">
                                <ul class="alike-list">
                                    <li class="alike-li">
                                        <a href="" class="single">
                                            <img src="../img/goods20.jpg" alt="" />
                                            <span class="price">￥17.50</span>
                                            <span class="name">Zymafluor 诺华 D500 维生素D 钙片 90片（每天一片）</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <a href="" class"btn-left"></a>
                            <span class="page-num"></span>
                            <a href="" class="btn-right"></a>
                        </div>
                    </div>
                `
                $product.html(content);
                console.log($('.qty-block a'));
                var $qty = $('#qty').val();
                $('.product-add').on('click','.add',function(e){
                    $qty++;
                    $('#qty').val($qty);
                    e.preventDefault();
                }).on('click','.sub',function(e){
                    $qty--;
                    $qty =$qty<=0 ? 1:$qty;
                    $('#qty').val($qty);
                    e.preventDefault();
                })
                $('.buy-car').click(function(e){
                    $.ajax({
                        url:'../api/buyCarsql.php',
                        data:{
                            id:data.id,
                            name:data.name,
                            price:data.price,
                            weight:data.weight,
                            imgs:data.imgs,
                            qty:$qty,
                            shop:data.shop,
                            country:data.country,
                            tallage:data.tallage
                        },
                        success:function(res){
                            console.log(res);
                        }
                    })
                    e.preventDefault();
                })
            }
        });
    })
})