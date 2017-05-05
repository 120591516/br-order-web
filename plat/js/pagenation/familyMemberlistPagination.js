$(document).ready(function() {
	sex();
	$('#familyMember_tbody').empty();
	familyMemberSearch();
})

	
function createTable(currPage, limit, total,dataBack) {
			var showNum = limit;
	    	if(total - (currPage * limit) < 0) showNum = total - ((currPage - 1) * limit);
	    	var datal = dataBack.data.list;
	    	var str = '';
	    	for(var i = 0; i < showNum; i++) {
	    		str += "<tr><td customerInfoId='" + datal[i].customerInfoId + "'>";
	    		str += "<a href='/plat/pages/examination/personal/CheckFamilyMember.shtml?id=" + datal[i].customerInfoId + "' class='padding_4px' title='查看家庭成员信息'><i class='fa fa-eye'></i></a> ";
	    		str += "<a href='/plat/pages/examination/personal/EditFamilyMember.shtml?id=" + datal[i].customerInfoId + "' class='padding_4px' title='编辑家庭成员信息'><i class='fa fa-pencil'></i></a> ";
	    		str += "<a href='#' title='删除家庭成员信息' class='padding_4px' onclick='del_familyMember(this)'><i class='fa fa-trash-o'></i></a>";
	    		str += "</td>";
	    		str += "<td>" + datal[i].customerInfoName + "</td>";
	    		str += "<td>" + datal[i].sex + "</td>";
	    		str += "<td>" + datal[i].customerInfoIdentityNumber + "</td>";
	    		str += "<td>" + datal[i].customerInfoPhone + "</td>";
	    		str += "<td>" + datal[i].customerInfoEmail + "</td>";
	    		str += "<td>" + datal[i].relationName + "</td>";
	    		if(datal[i].register==0){
		        		str+="<td>" + '是 '+ "</td>";
		        	}else{
		        		str+="<td>" + '否' + "</td>";
		        	}
	    		str+="<td>" + getLocalTime(datal[i].createtime) + "</td>";
	    		str += '</tr>';
	    	}
		    	$("#familyMember_tbody").append(str);
		    	return false;
			} 