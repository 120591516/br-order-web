$(document).ready(function() {
	$('#userInfo_tbody').empty();
	userInfoSearch();
})

	
function createTable(currPage, limit, total,dataBack) {
			var showNum = limit;
	    	if(total - (currPage * limit) < 0) showNum = total - ((currPage - 1) * limit);
	    	var datal = dataBack.data.list;
	    	var str = '';
	    	for(var i = 0; i < showNum; i++) {
	    		str += "<tr><td customerRegistId='" + datal[i].customerRegistId + "' orgid='" + datal[i].orgId + "'>";
	    		str += "<a href='/plat/pages/users/CheckUserLogOnInfo.shtml?id=" + datal[i].customerRegistId + "' class='padding_4px storeManagement_check_info' title='查看用户信息'><i class='fa fa-eye'></i></a> ";
	    		str += "<a href='/plat/pages/users/EditUserLogOnInfo.shtml?id=" + datal[i].customerRegistId + "' class='padding_4px storeManagement_edit_info' title='编辑用户信息'><i class='fa fa-pencil'></i></a> ";
	    		str += "<a href='#' title='删除用户信息' style='margin-right:5px' class='padding_4px' onclick='del_userInfo(this)'><i class='fa fa-trash-o'></i></a>";
	    		str += "<a href='/plat/pages/personal/familyMemberList.shtml?id=" + datal[i].customerRegistId + "' title='用户家庭成员关系' style='margin-right:5px' class='padding_4px'><i class='fa fa-group'></i></a>";
	    		str += "</td>";
	    		str += "<td>" + nullformat(datal[i].customerInfoName) + "</td>";
	    		str += "<td>" + nullformat(datal[i].enterpriseFullName) + "</td>";
	    		str += "<td>" + nullformat(datal[i].customerInfoSex) + "</td>"; 
	    		str += "<td>" + nullformat(datal[i].customerInfoIdentityNumber) + "</td>";
	    		str += "<td>" + nullformat(datal[i].customerInfoPhone) + "</td>";
	    		str += "<td>" + nullformat(datal[i].customerInfoEmail) + "</td>";
	    		str += "<td>" + nullformat(datal[i].customerInfoAddress) + "</td>";
	    		if(datal[i].customerInfoStatus == 0) {
	    			str += "<td>" + '启用' + "</td>";
	    		} else {
	    			str += "<td>" + '禁用' + "</td>";
	    		}
	    		str += '</tr>';
	    	}
		    	$("#userInfo_tbody").append(str);
		    	return false;
	    }
