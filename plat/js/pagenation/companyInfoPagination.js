$(document).ready(function() {
	$('#companyInfo_tbody').empty();
	companyInfoSearch();
})

	
function createTable(currPage, limit, total,dataBack) {
			var showNum = limit;
	    	if(total - (currPage * limit) < 0) showNum = total - ((currPage - 1) * limit);
	    	var datal = dataBack.data.list;
	    	var str = '';
	    	for(var i = 0; i < showNum; i++) {
	    		str += "<tr><td enterpriseId='" + datal[i].enterpriseId + "'>";
	    		str += "<a href='/plat/pages/business/company/CheckCompanyInfo.shtml?id=" + datal[i].enterpriseId + "' class='padding_4px' title='查看公司信息'><i class='fa fa-eye'></i></a> ";
	    		str += "<a href='/plat/pages/business/company/EditCompanyInfo.shtml?id=" + datal[i].enterpriseId + "' class='padding_4px' title='编辑公司信息'><i class='fa fa-pencil'></i></a> ";
	    		str += "<a href='#' title='删除公司信息' class='padding_4px' onclick='del_company(this)'><i class='fa fa-trash-o'></i></a>";
	    		str += "</td>";
	    		str += "<td>" + datal[i].enterpriseSimpleName + "</td>";
	    		str += "<td>" + datal[i].enterpriseFullName + "</td>";
	    		str += "<td>" + nullformat(datal[i].enterpriseCode) + "</td>";
	    		str += "<td>" + datal[i].enterpriceLicenseNo + "</td>";
	    		str += "<td>" + nullformat(datal[i].enterpriceLicensePerson) + "</td>";
	    		str += "<td>" + nullformat(datal[i].enterpriseAddress) + "</td>";
	    		str+="<td>" + getLocalTime(datal[i].enterpriseCreateTime) + "</td>";
	    		if(datal[i].enterpriseStatus == 0) {
	    			str += "<td>" + '启用' + "</td>";
	    		} else {
	    			str += "<td>" + '禁用' + "</td>";
	    		}
	    		str += '</tr>';
	    	}
		    	$("#companyInfo_tbody").append(str);
		    	return false;
			}