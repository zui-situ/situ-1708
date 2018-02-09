require(['config'],function(){
    require(['jquery'],function($){
        console.log(666);
        $('.submit').on('click',function(){
            $.ajax({
                url:'../api/login.php',
                data:{
                    phone:$('#phone').val(),
                    password:$('.password').val()
                },
                success:function(data){
                    console.log(data);
                    if(data === 'success'){
                        location.href = '../index.html';
                    }else if(data === 'fail'){
                        $('#phone').parent().addClass('has-error');
                    }
                }
            })
            
        })
    })
});