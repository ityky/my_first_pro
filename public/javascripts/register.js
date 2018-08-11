/**
 * 注册表单校验
 * @param registerForm 传入的form表单
 * @returns {boolean}  校验通过返回ture,反之flas
 */
function validate_form(registerForm) {
    var flag = true;
    //手机号码和邮箱验证
    var user = registerForm.user.value;
    var mobileReg = new RegExp(/^1[3|4|5|7|8][0-9]{9}$/);
    var emailReg = new RegExp(/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/);
    if(mobileReg.test(user)){
        $("#isMobileOrEmail").val("mobile");
        $("#userError").html("");
    }
    if(emailReg.test(user)){
        $("#isMobileOrEmail").val("email");
        $("#userError").html("");
    }
    if(!mobileReg.test(user) && !emailReg.test(user)){
        $('#userError').html("手机或者邮箱输入错误");
        flag = false;
    }
    //昵称校验
    var name = registerForm.name.value;
    if(name != null && name.length > 3 && name.length < 8){
        $("#nameError").html("");
    }else{
        $("#nameError").html("昵称长度不能小于3大于8");
        flag = false
    }
    //密码
    var password = registerForm.password.value;
    if(password != null && password.length>3 && password.length < 8){
        $("#passwordError").html();
    }else{
        $("#passwordError").html("密码长度不能小于3大于8")
        flag = false;
    }
    //确认密码
    var repeat = registerForm.repeat_password.value;
    if(repeat != null && repeat == password){
        $("#repeat_password").html();
    }else{
        $("#repeat_password").html("两次密码不一致");
        flag = false
    }
    return flag;
}