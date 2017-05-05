/**
 * 用户退出登录
 */
function logout() {
	if(confirm("您确定要退出吗?")) {
		var param = null;
		var type = "get";
		var reqResult = httpRequest(login_logout_url, param, type, false);
		if(reqResult.result == 0) {
			window.location.href = platIp + '/plat';
		} else {
			/**
			 * 此处应为弹出公共提示信息窗口
			 * 提示错误信息
			 */
			alert(reqResult.message);
		}
	}
}

/*
 * 左侧菜单遍历功能
 */
$(document).ready(function() {
	var param = null;
	var type = "get";
	var reqResult = httpRequest(footer_getUserPermission_url, param, type, false);
	if(reqResult.result == 0) {
		/**
		 * 加载用户信息
		 */
		$('#top-name').html(reqResult.userRole.userName);
		var userRoles = "";
		$(reqResult.userRole.roles).each(function() {
			userRoles += this.roleName + "&nbsp";
		})
		$('#top-text').html(userRoles);
		/**
		 * 加载权限目录信息
		 */
		var per = reqResult.data.permissions;
		var leful = document.getElementById('left_ul');
		var secondul = document.getElementById('second_ul');
		var str = '';
		for(var i = 0; i < per.length; i++) {
			str += '<li class="treeview">';
			if(per[i].permissionParentId == 0) {
				str += '<a href="#"><i class="fa ' + per[i].permissionDescribe + '"></i><span class=' + "lef_css" + '>' + per[i].permissionName + '</span><i class="fa fa-angle-left pull-right"></i></a>'
				if(per[i].childrens) {
					str += '<ul class="treeview-menu" id="pjaxUrl">';
					var perChild = per[i].childrens
					for(var j = 0; j < perChild.length; j++) {
						str += '<li><a href="' + perChild[j].permissionUrl + '" data-pjax=true><i class="fa fa-circle-o"></i> ' + perChild[j].permissionName + '</a></li>';
					}
					str += '</ul>';
				}
			}
			str += '</li>';
		}
		leful.innerHTML = str;
		return false;
	} else {
		alert(reqResult.message + ",请重新登录。");
		window.location.href = platIp + "/plat";
	}

})