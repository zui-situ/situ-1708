<?php
    require('connect.php');
    $id = isset($_GET['id']) ? $_GET['id'] : null;
    $name = isset($_GET['name']) ? $_GET['name'] : null;
    $price = isset($_GET['price']) ? $_GET['price'] : null;
    $weight = isset($_GET['weight']) ? $_GET['weight'] : null;
    $imgs = isset($_GET['imgs']) ? $_GET['imgs'] : null;
    $qty = isset($_GET['qty']) ? $_GET['qty'] : null;
    $shop = isset($_GET['shop']) ? $_GET['shop'] : null;
    $country = isset($_GET['country']) ? $_GET['country'] : null;
    $tallage = isset($_GET['tallage']) ? $_GET['tallage'] : null;
    // $date = isset($_GET['date']) ? $_GET['date'] : null;
    // 判断同种商品是否已经存在
    $data = $conn->query("select * from buycar where id='$id'");
    if($data->num_rows == 0){
        $sql = "insert into buycar(id,name,price,weight,imgs,qty,shop,country,tallage) values($id,'$name',$price,$weight,'$imgs',$qty,'$shop','$country',$tallage)";
        $res = $conn->query($sql);
    }else{
        $row = $data->fetch_all(MYSQLI_ASSOC);
        $_qty = $row[0]['qty'];
        $_qty =$_qty+$qty;
        $update ="update buycar set qty=$_qty where id='$id'";
        $res =$conn->query($update);
    }
    if($res){
        echo "success";
    }else{
        echo "fail";
    }
?>