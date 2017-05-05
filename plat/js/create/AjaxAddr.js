//获取可用体检机构下拉框(orgid 机构的select id)
function getOrgList(orgid) {
	var otype = "get";
	var osync = false;
	var reqResult = httpRequest(storeManagement_getAvailableOrgs_url, null, otype, osync);
	if(reqResult.result == 0) {
		var html = "<option value=''>---请选择---</option>";
		var datal = reqResult.data;
		for(var i = 0; i < datal.length; i++) {
			html += "<option value= '" + datal[i].orgId + "'>" + datal[i].orgShortName + "</option>";
		}
		$(orgid).empty().append(html);
	} else {
		$(orgid).empty();
	}
}
//首页展示添加套餐或门店时  -- 获取机构下拉框（orgid 机构的select id）
function getOrganization(orgid) {
	var otype = "get";
	var osync = false;
	var reqResult = httpRequest(getOrganizationListUrl, null, otype, osync);
	if(reqResult.result == 0) {
		var html = "<option selected='selected' value=''>---请选择---</option>";
		var datal = reqResult.data.list;
		for(var i = 0; i < datal.length; i++) {
			html += "<option value= '" + datal[i].orgId + "' >" + datal[i].orgShortName + "</option>";
		}
		$(orgid).empty().append(html);
	} else {
		$(orgid).empty();
	}
}
//门店下拉框
function brands(brands,num){
	var otype = "get";
	var osync = false;
	var reqResult = httpRequest(getOrganizationBranchAllUrl, null, otype, osync);
	if(reqResult.result == 0) {
		var datal = reqResult.data;
		if(num==0){
			var html = "<option selected='selected' value='-1'>全部</option>";
		}else{
			var html = "<option selected='selected' value='-1'>无</option>";
		}
		for(var i = 0; i < datal.length; i++) {
			html += "<option value= '" + datal[i].branchId + "'>" + datal[i].branchName + "</option>";
		}
		$(brands).empty().append(html);
	} else {
		$(brands).val('');
	}
}
//上级科室下拉框
function departPs() {
	var otype = "get";
	var osync = false;
	var reqResult = httpRequest(getOrgDeptAll, null, otype, osync);
	if(reqResult.result == 0) {
		var datal = reqResult.data;
		var provSelect = $('.departPs');
		var html = "<option selected='selected' value='-1'>全部</option>";
		for(var i = 0; i < datal.length; i++) {
			html += "<option value= '" + datal[i].orgDeptId + "'>" + datal[i].departName + "</option>";
		}
		$(".departPs").empty().append(html);
	} else {
		$(".departPs").val('');
	}
}
//负责人下拉框
function departMs() {
	var otype = "get";
	var osync = false;
	var reqResult = httpRequest(getOrgUserAll, null, otype, osync);
	if(reqResult.result == 0) {
		var datal = reqResult.data;
		var html = "<option selected='selected' value='-1'>全部</option>";
		for(var i = 0; i < datal.length; i++) {
			html += "<option value= '" + datal[i].userId + "'>" + datal[i].userName + "</option>";
		}
		$(".departMs").empty().append(html);
	} else {
		$(".departMs").val('');
	}
}


//检查项获取项目类型下拉框
function getExamItemType() {
	var otype = "get";
	var osync = false;
	var reqResult = httpRequest(getAllOrgExamItemTypeUrl, null, otype, osync);
	if(reqResult.result == 0) {
		var html = "<option selected='selected' value='-1'>---请选择---</option>";
		var datal = reqResult.data;
		for(var i = 0; i < datal.length; i++) {
			html += "<option value= '" + datal[i].examItemTypeId + "'>" + datal[i].examItemTypeName + "</option>";
		}
		$(".getEitemId").empty().append(html);
	} else {
		$(".getEitemId").empty();
	}
}
function examItemType() {
	var otype = "get";
	var osync = false;
	var reqResult = httpRequest(getAllOrgExamItemTypeUrl, null, otype, osync);
	if(reqResult.result == 0) {
		var html = "<option selected='selected' value=''>全部</option>";
		var datal = reqResult.data;
		for(var i = 0; i < datal.length; i++) {
			html += "<option value= '" + datal[i].examItemTypeId + "'>" + datal[i].examItemTypeName + "</option>";
		}
		$(".getEitem").empty().append(html);
	} else {
		$(".getEitem").empty();
	}
}
//收费项获取科室下拉框
function feeItemDept() {
	var otype = "get";
	var osync = false;
	var reqResult = httpRequest(getOrgDeptAllUrl, null, otype, osync);
	if(reqResult.result == 0) {
		var datal = reqResult.data;
		var html = "<option selected='selected' value=''>---请选择---</option>";
		for(var i = 0; i < datal.length; i++) {
			html += "<option value= '" + datal[i].orgDeptId + "'>" + datal[i].departName + "</option>";
		}
		$(".feeItemDept").empty().append(html);
	} else {
		$(".feeItemDept").val('');
	}
}
//科室页面根据机构id获取对应门店（orgid机构select id值， branchid门店select id值）
function getBranch(orgid, branchid, deptid,num) {
	var orgidVal = $(orgid + " option:selected").val();
	var otype = "get";
	var osync = false;
	var param = {
		"orgid": orgidVal
	};
	var reqResult = httpRequest(getOrgBranchAllByOrgIdUrl, param, otype, osync);
	if(reqResult.result == 0) {
		if(num==0){
			var html = "<option selected='selected' value=''>全部</option>";
		}else{
			var html = "<option selected='selected' value=''>无</option>";
		}
		var datal = reqResult.data;
		for(var i = 0; i < datal.length; i++) {
			html += "<option value= '" + datal[i].branchId + "'>" + datal[i].branchName + "</option>";
		}
		$(deptid).empty();
		$(branchid).empty().append(html);
	} else {
		$(deptid).empty();
		$(branchid).empty();
	}

}
//科室页面根据门店id获取对应科室（branchid门店select id值,deptid科室select id值 ）
function getDeptInfo(branchid, deptid) {
	var otype = "get";
	var osync = false;
	var param = {
		"branid": branchid
	};
	var reqResult = httpRequest(organizationUser_getDeptNameByOrgId_url, param, otype, osync);
	if(reqResult.result == 0) {
		var html = "<option selected='selected' value='-1'>---请选择---</option>";
		var datal = reqResult.data;
		for(var i = 0; i < datal.length; i++) {
			html += "<option value= '" + datal[i].deptId + "'>" + datal[i].deptName + "</option>";
		}
		$(deptid).empty().append(html);
	}
}
//根据机构id获取套餐列表\首页根据机构查询套餐信息
function getSuiteByOrg(orgid, suiteid) {
	var orgidVal = $(orgid + " option:selected").val();
	var otype = "get";
	var osync = false;
	var param = {
		"orgId": orgidVal
	};
	var reqResult = httpRequest(getSuiteListByOrgIdUrl, param, otype, osync);
	if(reqResult.result == 0) {
		var html = "<option selected='selected' value=''>---请选择---</option>";
		var datal = reqResult.data;
		for(var i = 0; i < datal.length; i++) {
			html += "<option value= '" + datal[i].suiteId + "' examSuiteName= '" + datal[i].suiteName + "'>" + datal[i].suiteName + "</option>";
		}
		$(suiteid).empty().append(html);
	} else {
		$(suiteid).empty();
	}

}
//首页展示添加门店，根据机构id获取对应门店信息下拉框（orgid机构select id值， branchid门店select id值）
function getBranchByOrg(orgid, branchid) {
	var orgidVal = $(orgid + " option:selected").val();
	var otype = "get";
	var osync = false;
	var param = {
		"orgId": orgidVal
	};
	var reqResult = httpRequest(getOrgbanchListByOrgUrl, param, otype, osync);
	if(reqResult.result == 0) {
		var html = "<option selected='selected' value='-1'>---请选择---</option>";
		var datal = reqResult.data.list;
		for(var i = 0; i < datal.length; i++) {
			html += "<option value= '" + datal[i].branchId + "' note= '" + datal[i].note + "' storeImgURL= '" + datal[i].imgURL + "' storeImgId= '" + datal[i].imgId + "' storeName= '" + datal[i].branchName + "'>" + datal[i].branchName + "</option>";
		}
		$(branchid).empty().append(html);
	} else {
		$(branchid).empty();
	}

}
//首页展示添加套餐，根据机构id获取对应门店信息下拉框（orgid机构select id值， branchid门店select id值）
//function getBranch(orgid, branchid, examsuiteid) {
//	var orgidVal = $(orgid + " option:selected").val();
//	var otype = "get";
//	var osync = false;
//	var param = {
//		"orgId": orgidVal
//	};
//	var reqResult = httpRequest(getOrgbanchListByOrgUrl, param, otype, osync);
//	if(reqResult.result == 0) {
//		var html = "<option selected='selected' value='-1'>---请选择---</option>";
//		var datal = reqResult.data.list;
//		for(var i = 0; i < datal.length; i++) {
//			html += "<option value= '" + datal[i].branchId + "'>" + datal[i].branchName + "</option>";
//		}
//		$(examsuiteid).empty();
//		$(branchid).empty().append(html);
//	} else {
//		$(examsuiteid).empty();
//		$(branchid).empty();
//	}
//}
//首页展示添加套餐，根据门店id查询对应套餐下拉框（branchid门店select id值,examsuiteid科室select id值）
function getDept(branchid, examsuiteid) {
	var branchidVal = $(branchid).val();
	var otype = "get";
	var osync = false;
	var param = {
		"branchId": branchidVal
	};
	var reqResult = httpRequest(getSuiteListByBranchUrl, param, otype, osync);
	if(reqResult.result == 0) {
		var html = "<option selected='selected' value='-1'>---请选择---</option>";
		var datal = reqResult.data.list;
		for(var i = 0; i < datal.length; i++) {
			html += "<option value= '" + datal[i].examSuiteId + "' examSuiteNote= '" + datal[i].examSuiteNote + "' suitImgId= '" + datal[i].imgId + "' examSuiteImgUrl= '" + datal[i].examSuiteImgUrl + "' examSuiteName= '" + datal[i].examSuiteName + "'>" + datal[i].examSuiteName + "</option>";
		}
		$(examsuiteid).empty().append(html);
	}
}
//根据机构id获取套餐
function suitInfo(orgId,suitIdInfo) {
	var otype = "get";
	var osync = false;
	var param = {
		"orgId ": orgId 
	};
	var reqResult = httpRequest(getSuiteListByOrgUrl, param, otype, osync);
	if(reqResult.result == 0) {
		var html = "<option selected='selected' value='-1'>---请选择---</option>";
		var datal = reqResult.data.list;
		for(var i = 0; i < datal.length; i++) {
			html += "<option value= '" + datal[i].orgId + "'>" + datal[i].orgName + "</option>";
		}
		$(suitIdInfo).empty().append(html);
	}
}
//获取所有支付状态
function orderedStatus(){
	var otype = "get";
	var osync = false;
	var reqResult = httpRequest(getCustomerOrderListUrl, null, otype, osync);
	if(reqResult.result == 0) {
		var datal = reqResult.data;
		var html = "<option selected='selected' value=''>--请选择--</option>";
		for(var i = 0; i < datal.length; i++) {
			html += "<option value= '" + datal[i].statusId + "' statusName = '" + datal[i].statusName + "'>" + datal[i].statusName + "</option>";
		}
		$(".orderedStatus").empty().append(html);
	} else {
		$(".orderedStatus").val('');
	}
}
//获取参数值
function getParamValue(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return decodeURIComponent(r[2]);
	return null;
}

//收费项查询体检项信息搜索列表
//机构
//function feeItemGetOrg(orgid,branchid,deptid,userid) {
//	var otype = "get";
//	var osync = false;
//	var reqResult = httpRequest(getOrganizationListUrl, null, otype, osync);
//	if(reqResult.result == 0) {
//		var html = "<option selected='selected' value='-1'>---请选择---</option>";
//		var datal = reqResult.data.list;
//		for(var i = 0; i < datal.length; i++) {
//			html += "<option value= '" + datal[i].orgId + "' >" + datal[i].orgShortName + "</option>";
//		}
//		$(orgid).empty().append(html);
//	} else {
//		$(orgid).empty();
//	}
//}
//根据机构id获取门店信息
function feeItemGetBranch(orgid, branchid, deptid,userid) {
	var orgidVal = $(orgid + " option:selected").val();
	var otype = "get";
	var osync = false;
	var param = {
		"orgId": orgidVal
	};
	var reqResult = httpRequest(getOrgbanchListByOrgUrl, param, otype, osync);
	if(reqResult.result == 0) {
		var html = "<option selected='selected' value='-1'>---请选择---</option>";
		var datal = reqResult.data.list;
		for(var i = 0; i < datal.length; i++) {
			html += "<option value= '" + datal[i].branchId + "'>" + datal[i].branchName + "</option>";
		}
		$(deptid).empty();
		$(userid).empty();
		$(branchid).empty().append(html);
	} else {
		$(deptid).empty();
		$(userid).empty();
		$(branchid).empty();
	}
}
//根据门店id获取科室信息
function feeItemGetDept(branchid, deptid,userid) {
	var branchidVal = $(branchid).val();
	var otype = "get";
	var osync = false;
	var param = {
		"branid": branchidVal
	};
	var reqResult = httpRequest(getOrgDeptByBranidUrl, param, otype, osync);
	if(reqResult.result == 0) {
		var html = "<option selected='selected' value='-1'>---请选择---</option>";
		var datal = reqResult.data;
		for(var i = 0; i < datal.length; i++) {
			html += "<option value= '" + datal[i].deptId + "'>" + datal[i].deptName + "</option>";
		}
		$(deptid).empty().append(html);
		$(userid).empty();
	}
}
//根据科室id获取医生员工信息
function feeItemGetUser(deptid, userid) {
	var deptidVal = $(deptid).val();
	var otype = "get";
	var osync = false;
	var param = {
		"orgBranchDeptId": deptidVal
	};
	var reqResult = httpRequest(getOrgUserByDeptUrl, param, otype, osync);
	if(reqResult.result == 0) {
		var html = "<option selected='selected' value=''>---请选择---</option>";
		var datal = reqResult.data;
		for(var i = 0; i < datal.length; i++) {
			html += "<option value= '" + datal[i].userId + "'>" + datal[i].userLoginName + "</option>";
		}
		$(userid).empty().append(html);
	}else{
		$(userid).empty();
	}
}
//获取所有检查项
function getExamItemName() {
	var otype = "get";
	var osync = false;
	var reqResult = httpRequest(signWord_getExamItemName_url, null, otype, osync);
	if(reqResult.result == 0) {
		var html = "<option selected='selected' value=''>全部</option>";
		var datal = reqResult.data;
		for(var i = 0; i < datal.length; i++) {
			html += "<option value= '" + datal[i].id + "'>" + datal[i].name + "</option>";
		}
		$('.ItemName').empty().append(html);
	}else{
		$('.ItemName').empty();
	}
}