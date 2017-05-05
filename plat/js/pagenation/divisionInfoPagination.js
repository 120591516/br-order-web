$(document).ready(function() {
	$('#departmentInfo_tbody').empty();
	departmentInfoSearch();
})

	
function createTable(currPage, limit, total,dataBack) {
			var showNum = limit;
	    	if(total - (currPage * limit) < 0) showNum = total - ((currPage - 1) * limit);
	    	var datal = dataBack.data.list;
	    	var str = '';
	    	for(var i = 0; i < showNum; i++) {
	    		str += "<tr><td enterpriseDepId='" + datal[i].enterpriseDepId + "'>";
	    		str += "<a href='/plat/pages/business/division/CheckDivisionInfo.shtml?id=" + datal[i].enterpriseId + "' class='padding_4px' title='查看部门信息'><i class='fa fa-eye'></i></a> ";
	    		str += "<a href='/plat/pages/business/division/EditDivisionInfo.shtml?id=" + datal[i].enterpriseId + "' class='padding_4px' title='编辑部门信息'><i class='fa fa-pencil'></i></a> ";
	    		str += "<a href='#' title='删除部门信息' class='padding_4px' onclick='del_departmentInfo(this)'><i class='fa fa-trash-o'></i></a>";
	    		str += "</td>";
	    		str += "<td>" + datal[i].enterpriseFullName + "</td>";
	    		str += "<td>" + datal[i].enterpriseSimpleName + "</td>";
	    		str += "<td>" + datal[i].enterpriseCode + "</td>";
	    		str += "<td>" + datal[i].enterpriseDepName + "</td>";
	    		str += "<td>" + datal[i].enterpriseDepLevel + "</td>";
	    		str+="<td>" + getLocalTime(datal[i].enterpriseDepCreateTime) + "</td>";
	    		if(datal[i].enterpriseDepStatus == 0) {
	    			str += "<td>" + '启用' + "</td>";
	    		} else {
	    			str += "<td>" + '禁用' + "</td>";
	    		}
	    		str += '</tr>';
	    	}
		    	$("#departmentInfo_tbody").append(str);
		    	return false;
			}