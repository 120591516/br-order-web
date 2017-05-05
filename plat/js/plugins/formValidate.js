//			phone验证
function checkphone() {
	var phone = $('.check_userphone_validate');
	if($(".check_userphone_validate").val() == "") {
		$(".userlist_checkphone").html("<font class='font'>手机号码不能为空，请重新输入！</font>");
		$(".check_userphone_validate").focus(function() {
			$(".userlist_checkphone").html("");
		});
		return false;
	} else if(!phone.val().match(/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/)) {
		$(".userlist_checkphone").html("<font class='fontphone'>手机号码格式不正确！请重新输入</font>");
		return false;
	} else {
		$(".userlist_checkphone").html("");
	}
}
//邮箱校验
function checkmail() {
	var email = $(".check_usermail_validate").val();
	if($(".check_usermail_validate").val() == "") {
		$(".userlist_checkmail").html("<font class='font'>邮箱不能为空，请重新输入！</font>");
		return false;
	} else if(!email.match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/)) {
		$(".userlist_checkmail").html("<font class='fontmail'>邮箱格式不正确，请重新输入！</font>");
		//			$(".check_usermail_validate").focus();
		return false;
	} else {
		$(".userlist_checkmail").html("");
	}
}
//验证字符串是否为空
function nullFormat(str) {
	return str == null ? "" : str;
}

