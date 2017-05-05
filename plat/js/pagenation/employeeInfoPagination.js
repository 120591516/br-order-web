$(document).ready(function() {
	$('#employeeInfo_tbody').empty();
	employeeInfoSearch();
})

	
function createTable(currPage, limit, total,dataBack) {
			var showNum = limit;
	    	if(total - (currPage * limit) < 0) showNum = total - ((currPage - 1) * limit);
	    	var datal = dataBack.data.list;
	    	var str = '';
	    	for(var i = 0; i < showNum; i++) {
	    		str += "<tr><td customerInfoId='" + datal[i].customerInfoId + "'>";
	    		str += "<a href='/plat/pages/examination/personal/CheckFamilyMember.shtml?id=" + datal[i].customerInfoId + "' class='padding_4px' title='查看员工信息'><i class='fa fa-eye'></i></a> ";
	    		str += "<a href='/plat/pages/examination/personal/EditFamilyMember.shtml?id=" + datal[i].customerInfoId + "' class='padding_4px' title='编辑员工信息'><i class='fa fa-pencil'></i></a> ";
	    		str += "<a href='#' title='删除员工信息' class='padding_4px' onclick='del_employeeInfo(this)'><i class='fa fa-trash-o'></i></a>";
	    		str += "</td>";
	    		str += "<td>" + nullformat([i].enterpriseFullName) + "</td>";
	    		str += "<td>" + nullformat(datal[i].enterpriseCode) + "</td>";
	    		str += "<td>" + nullformat(datal[i].enterpriseDepName) + "</td>";
	    		str += "<td>" + nullformat(datal[i].customerInfoName) + "</td>";
	    		str += "<td>" + nullformat(datal[i].customerInfoSex) + "</td>";
	    		str += "<td>" + nullformat(datal[i].customerInfoIdentityNumber) + "</td>";
	    		str += "<td>" + nullformat(datal[i].customerInfoPhone) + "</td>";
	    		str += "<td>" + nullformat(datal[i].customerInfoEmail) + "</td>";
	    		str += '</tr>';
	    	}
		    	$("#employeeInfo_tbody").append(str);
		    	return false;
			}