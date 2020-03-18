$(function(){
    var num=60;
        $('#name').blur(function(){
            nameReg=/[a-zA-Z0-9][\u4e00-\u9fa5]+/;
            if(!nameReg.test(name)){
                $('#error1').attr('style','display:block')
            }else{
                $('#error1').html('')
            }
        })
        $('#tel').blur(function(){
            telReg=/^[1][3,5,7,8][0-9]{9}/;
            if(!telReg.test(tel)){
                $('#error2').attr('style','display:block')
            }else if(tel.val() == ''){
                $('#error2').html('手机号不能为空')
            }else{
                $('#error2').html('')
            }
        })
        $('#sur').blur(function(){
            if($('#sur').val() == ''){
                $('#error4').attr('style','display:block')
            }else{
                $('#error4').html('')
            }
        })

        $('#getsur').click(function(){
            $('#getsur').attr('disabled',true);
            var tm = setInterval(function(){
                $('#getsur').val(num);
                num--;
                if(num == 0){
                    $('#error4').html('请求超时');
                    clearInterval(tm);
                    $('#getsur').val('获取验证码');
                    num=5;
                    $('#getsur').attr('disabled',false);
                }
            },1000)
        })
    
})