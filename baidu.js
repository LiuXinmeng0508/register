$(function(){
    (function register(){
        $('#name').blur(function(){
            nameReg=/^[A-Za-z0-9]{7}$/;
            if(!(this).val()){
                $('#error1').html("用户名格式不正确");
                $('#error1').attr('style',"display:block");
                return;
            }else{
                $('#error1').attr('style',"display:none");
            }
        })
        $('#tel').blur(function(){
            telReg=/^[1][3,5,7,8][0-9]{9}$/;
            if(!(this).val()){
                $('#error2').html("手机号码格式不正确");
                $('#error2').attr('style',"display:block");
                return;
            }else{
                $('#error2').attr('style',"display:none");
            }
        })
        $('#sur').blur(function(){
            if($('#sur').val() == ''){
                $('#error4').html("验证码不正确");
                $('#error4').attr('style',"display:block");
                return;
            }else{
                $('#error4').attr('style',"display:none");
            }
        })
        $('#getsur').click(function(){
            $('#getsur').attr('disabled',true);
            var tm = setInterval(function(){
                $('#getsur').val(num);
                num--;
                if(num == 0){
                    $('#error4').html("请求超时");
                    clearInterval(tm);
                    $('#getsur').val('获取验证码');
                    num=60;
                    $('#getsur').attr('disabled',false);
                }
            },1000)
        })
    })
})