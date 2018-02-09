require(['config'],function(){
    require(['jquery'],function($){
        // console.log(666);
        // var reg_tel = /\b1[34578]\d{9}\b/g;
        // var pPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
        // console.log($('#phone'));
        var $phoneVal;
        // $('#phone').blur(function(){
        //     $phoneVal = $('#phone').val();
        //     console.log($phoneVal);
        //     if(!reg_tel.test($phoneVal)){
        //         $('.notice').css({color:"#f00"});
        //     }else{
        //         $('.notice').css({color:"#fff"});
        //     }
        // });
        $('.submit').on('click',function(){
            $phoneVal = $('#phone').val();
            console.log($phoneVal);
            $.ajax({
                url:'../api/reg.php',
                data:{
                    phone:$phoneVal,
                    password:$('#password').val()
                },
                success:function(data){
                    console.log(data);
                    if(data === 'success'){
                        location.href = 'login.html';
                    }else if(data === 'fail'){
                        $('#username').addClass('danger');
                    }
                }
            })
        })
    })
})