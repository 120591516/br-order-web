$(document).ready(function() {
	org_info();
	$('#storeManagement_tbody').empty();
	var thisURL = document.URL;
	if(thisURL.indexOf("?")!=-1){
	var getval = thisURL.split('?')[1];
	var showval = getval.split("=")[1];
	$('#store_orgName').val(showval);
	}
	storeSearch();
})

	
function createTable(currPage, limit, total,dataBack) {
			var showNum = limit;
	    	if(total - (currPage * limit) < 0) showNum = total - ((currPage - 1) * limit);
	    	var datal = dataBack.data.list;
	    	var str = '';
	    	for(var i = 0; i < showNum; i++) {
	    		str += "<tr><td storeid='" + datal[i].branchId + "' orgid='" + datal[i].orgId + "'>";
	    		str += "<a href='/plat/pages/examination/store/CheckstoreManagementInfo.shtml?id=" + datal[i].branchId + "' class='padding_4px storeManagement_check_info' title='查看门店信息'><i class='fa fa-eye'></i></a> ";
	    		str += "<a href='/plat/pages/examination/store/EditstoreManagementInfo.shtml?id=" + datal[i].branchId + "' class='padding_4px storeManagement_edit_info' title='编辑门店信息'><i class='fa fa-pencil'></i></a> ";
	    		str += "<a href='#' title='删除门店信息' style='margin-right:5px' class='padding_4px' onclick='del_store(this)'><i class='fa fa-trash-o'></i></a>";
	    		str += "<a title='科室信息' style='margin-right:5px' href='#' dept_status='"+datal[i].status+"'onclick='deptMsg(this)'><i class='fa fa-share-alt-square'></i></a>";
	    		str +="<a href='StorePackageManagement.shtml?branchId=" + datal[i].branchId + "' title='添加套餐信息' class='padding_4px'><i class='fa fa-plus-square'></i></a>";
	    		str += "</td>";
	    		str += "<td>" + datal[i].branchName + "</td>";
	    		str += "<td>" + datal[i].branchCode + "</td>"; 
	    		str += "<td>" + datal[i].branchArea + "</td>";
	    		str += "<td>" + datal[i].orgShortName + "</td>";
	    		if(datal[i].splitSuite == 0) {
	    			str += "<td>" + '是' + "</td>";
	    		} else {
	    			str += "<td>" + '否' + "</td>";
	    		}
	    		str += "<td>" + datal[i].examStartTime + '-' + datal[i].examEndTime + "</td>";
	    		if(datal[i].status == 0) {
	    			str += "<td>" + '启用' + "</td>";
	    		} else {
	    			str += "<td>" + '禁用' + "</td>";
	    		}
	    		str += '</tr>';
	    	}
		    	$("#storeManagement_tbody").append(str);
		    	return false;
	    }
function deptMsg(deptMsg){
			var dept_status=$(deptMsg).attr('dept_status');
			var orgId=$(deptMsg).parent().attr('orgid');
			var branchId=$(deptMsg).parent().attr('storeid');
			if(dept_status==0){
				window.location.href='/plat/pages/examination/department/departments.shtml?orgId='+orgId+'&&branchId='+branchId+'';
			}else{
				confirm('该门店状态未启用！');
			}
		}
