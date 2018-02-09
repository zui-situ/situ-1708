require(['config'],function(){
    require(['jquery'],function($){
        console.log(666);
        function carBody(data){
            var total =0;
            var weight =0;
            var tallage =0;
            var res = data.map(function(item){
                sTotal =item.price *item.qty;
                total +=sTotal;
                weight +=item.weight *item.qty;
                tallage +=item.tallage*1;
                return`
                    <ul class="product-info clearfix" data-id="${item.id}">
                        <li class="checkbox">
                            <input type="checkbox" />
                        </li>
                        <li class="product">
                            <a href="../html/details.html?id=${item.id}" class="product-img">
                                <img src="${item.imgs}" alt="" />
                            </a>
                            <a href="../html/details.html?id=${item.id}" class="product-name">${item.name}</a>
                        </li>
                        <li class="weight">${item.weight}g</li>
                        <li class="unit-price">￥${item.price}</li>
                        <li class="qty">
                            <a href="" class="sub"></a>
                            <input type="text" name="qty" id="qty" value="${item.qty}" title="数量"/>
                            <a href="" class="add"></a>
                        </li>
                        <li class="subtotal">￥${sTotal}</li>
                        <li class="operation"><a href="" class="delete">删除</a></li>
                    </ul>
                `
            });
            res +=`
                <div class="product-tfoot clearfix">
                    <div class="product-total">
                        <span class="product-all-price">商品金额合计：￥${total}</span>
                        <span class="product-all-weight">重量：${weight}g</span>
                        <span class="product-all-shipping-cost">运费：￥35.00 <a href="http://www.haituncun.com/helper/faq/shipping-costs/" class="shipping-cost-list" title="查看运费计算表"></a></span>
                        <span class="product-all-tax">关税：￥${tallage}（商家承担）</span>
                    </div> 
                </div>
            `
            $('.cart-body .product-list').html(res);
            var infos=`
                <div class="control clearfix">
                    <div class="cell checkbox"><input class="foot-check-all" type="checkbox"> 全选</div>
                    <div class="cell delete-link">
                        <a href="javascript:void(0)" class="delete">删除选中商品</a>
                        <a href="javascript:void(0)" class="delete-useless">清除失效商品</a>
                        <a href="http://www.haituncun.com">继续购物</a>
                    </div>
                </div>
                <div class="total-infos clearfix">
                    <button class="submit-all" type="submit">去结算</button>
                    <div class="infos-wrap">
                        <p class="total">
                            已选商品
                            <span class="total-quantity">1</span>件　　合计：
                            <span class="symbol">￥</span><span class="integer">${total}.
                            </span>
                            <span class="decimal">00</span>
                        </p>
                        <p class="all-meta-infos">商品总价：￥<span class="total-product-price">${total}</span> + 运费总计：￥<span class="total-shipping-cost">35.00</span> + 税费总计：￥<span class="total-tax">${total+35}</span> - 运费总优惠：￥<span class="total-shipping-coupon">35.00</span>
                        </p>
                    </div>
                </div>
            `
            $('.cart-foot').html(infos);
        }
        $.ajax({
            url:'../api/buyCar.php',
            dataType:'json',
            success:function(data){
                console.log(data);
                // var res = data.map(function(item){
                //     sTotal =item.price *item.qty;
                //     total +=sTotal;
                //     weight +=item.weight *item.qty;
                //     tallage +=item.tallage*1;
                //     return`
                //         <ul class="product-info clearfix" data-id="${item.id}">
                //             <li class="checkbox">
                //                 <input type="checkbox" />
                //             </li>
                //             <li class="product">
                //                 <a href="../html/details.html?id=${item.id}" class="product-img">
                //                     <img src="${item.imgs}" alt="" />
                //                 </a>
                //                 <a href="../html/details.html?id=${item.id}" class="product-name">${item.name}</a>
                //             </li>
                //             <li class="weight">${item.weight}g</li>
                //             <li class="unit-price">￥${item.price}</li>
                //             <li class="qty">
                //                 <a href="" class="sub"></a>
                //                 <input type="text" name="qty" id="qty" value="${item.qty}" title="数量"/>
                //                 <a href="" class="add"></a>
                //             </li>
                //             <li class="subtotal">￥${sTotal}</li>
                //             <li class="operation"><a href="" class="delete">删除</a></li>
                //         </ul>
                //     `
                // });
                // res +=`
                //     <div class="product-tfoot clearfix">
                //         <div class="product-total">
                //             <span class="product-all-price">商品金额合计：￥${total}</span>
                //             <span class="product-all-weight">重量：${weight}g</span>
                //             <span class="product-all-shipping-cost">运费：￥35.00 <a href="http://www.haituncun.com/helper/faq/shipping-costs/" class="shipping-cost-list" title="查看运费计算表"></a></span>
                //             <span class="product-all-tax">关税：￥${tallage}（商家承担）</span>
                //         </div> 
                //     </div>
                // `
                // $('.cart-body .product-list').html(res);
                // var infos=`
                //     <div class="control clearfix">
                //         <div class="cell checkbox"><input class="foot-check-all" type="checkbox"> 全选</div>
                //         <div class="cell delete-link">
                //             <a href="javascript:void(0)" class="delete">删除选中商品</a>
                //             <a href="javascript:void(0)" class="delete-useless">清除失效商品</a>
                //             <a href="http://www.haituncun.com">继续购物</a>
                //         </div>
                //     </div>
                //     <div class="total-infos clearfix">
                //         <button class="submit-all" type="submit">去结算</button>
                //         <div class="infos-wrap">
                //             <p class="total">
                //                 已选商品
                //                 <span class="total-quantity">1</span>件　　合计：
                //                 <span class="symbol">￥</span><span class="integer">${total}.
                //                 </span>
                //                 <span class="decimal">00</span>
                //             </p>
                //             <p class="all-meta-infos">商品总价：￥<span class="total-product-price">${total}</span> + 运费总计：￥<span class="total-shipping-cost">35.00</span> + 税费总计：￥<span class="total-tax">${total+35}</span> - 运费总优惠：￥<span class="total-shipping-coupon">35.00</span>
                //             </p>
                //         </div>
                //     </div>
                // `
                // $('.cart-foot').html(infos);
                carBody(data);
            }
        })
        $('.product-list').on('click','.add',function(e){
            var $this = $(this);
            var $val = $this.siblings('#qty').val()*1;
            var $id =$this.parents('.product-info').data('id');
            console.log($id);
            var $qty = ++$val;
            console.log($qty);
            $.ajax({
                url:'../api/buyCar.php',
                dataType:'json',
                data:{
                    id:$id,
                    qty:$qty
                },
                success:function(data){
                    console.log(data);
                    // var res = data.map(function(item){
                    //     sTotal =item.price *item.qty;
                    //     total +=sTotal;
                    //     weight +=item.weight *item.qty;
                    //     tallage +=item.tallage*1;
                    //     return`
                    //         <ul class="product-info clearfix" data-id="${item.id}">
                    //             <li class="checkbox">
                    //                 <input type="checkbox" />
                    //             </li>
                    //             <li class="product">
                    //                 <a href="../html/details.html?id=${item.id}" class="product-img">
                    //                     <img src="${item.imgs}" alt="" />
                    //                 </a>
                    //                 <a href="../html/details.html?id=${item.id}" class="product-name">${item.name}</a>
                    //             </li>
                    //             <li class="weight">${item.weight}g</li>
                    //             <li class="unit-price">￥${item.price}</li>
                    //             <li class="qty">
                    //                 <a href="" class="sub"></a>
                    //                 <input type="text" name="qty" id="qty" value="${item.qty}" title="数量"/>
                    //                 <a href="" class="add"></a>
                    //             </li>
                    //             <li class="subtotal">￥${sTotal}</li>
                    //             <li class="operation"><a href="" class="delete">删除</a></li>
                    //         </ul>
                    //     `
                    // });
                    // res +=`
                    //     <div class="product-tfoot clearfix">
                    //         <div class="product-total">
                    //             <span class="product-all-price">商品金额合计：￥${total}</span>
                    //             <span class="product-all-weight">重量：${weight}g</span>
                    //             <span class="product-all-shipping-cost">运费：￥35.00 <a href="http://www.haituncun.com/helper/faq/shipping-costs/" class="shipping-cost-list" title="查看运费计算表"></a></span>
                    //             <span class="product-all-tax">关税：￥${tallage}（商家承担）</span>
                    //         </div> 
                    //     </div>
                    // `
                    // $('.cart-body .product-list').html(res);
                    // var infos=`
                    //     <div class="control clearfix">
                    //         <div class="cell checkbox"><input class="foot-check-all" type="checkbox"> 全选</div>
                    //         <div class="cell delete-link">
                    //             <a href="javascript:void(0)" class="delete">删除选中商品</a>
                    //             <a href="javascript:void(0)" class="delete-useless">清除失效商品</a>
                    //             <a href="http://www.haituncun.com">继续购物</a>
                    //         </div>
                    //     </div>
                    //     <div class="total-infos clearfix">
                    //         <button class="submit-all" type="submit">去结算</button>
                    //         <div class="infos-wrap">
                    //             <p class="total">
                    //                 已选商品
                    //                 <span class="total-quantity">1</span>件　　合计：
                    //                 <span class="symbol">￥</span><span class="integer">${total}.
                    //                 </span>
                    //                 <span class="decimal">00</span>
                    //             </p>
                    //             <p class="all-meta-infos">商品总价：￥<span class="total-product-price">${total}</span> + 运费总计：￥<span class="total-shipping-cost">35.00</span> + 税费总计：￥<span class="total-tax">${total+35}</span> - 运费总优惠：￥<span class="total-shipping-coupon">35.00</span>
                    //             </p>
                    //         </div>
                    //     </div>
                    // `
                    // $('.cart-foot').html(infos);
                    carBody(data);
                }
            })
            e.preventDefault();
        }).on('click','.sub',function(e){
            var $this = $(this);
            var $val = $this.siblings('#qty').val()*1;
            var $id =$this.parents('.product-info').data('id');
            console.log($id);
            var $qty = --$val;
            $qty = $qty <=1 ? 1: $qty; 
            console.log($qty);
            $.ajax({
                url:'../api/buyCar.php',
                dataType:'json',
                data:{
                    id:$id,
                    qty:$qty
                },
                success:function(data){
                    carBody(data);
                }
            })
            e.preventDefault();
        }).on('click','.delete',function(e){
            var $this = $(this);
            var $id =$this.parents('.product-info').data('id');
            $.ajax({
                url:'../api/buyCar.php',
                dataType:'json',
                data:{
                    id:$id,
                    isdel:true
                },
                success:function(data){
                    carBody(data);
                }
            })
            e.preventDefault();

        })
    })
});