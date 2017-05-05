//分页当前页码
var page_curr = 1;
// 每页记录条数
var count_curr = 10;
// 记录总条数
var total_count = 0;
// limit
var limit = 10;

function callBackPagination(dataBack) {
	var totalCount = dataBack.data.total;
	var showCount = 5;
	var limit = 10;
	createTable(1, limit, totalCount, dataBack);
}
//获取参数值
function getParamValue(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return decodeURIComponent(r[2]);
	return null;
}
//动态加载js
function artJs() {
	var oHead = $("body").remove("script[role='reload']");
	$("<scri" + "pt>" + "</scr" + "ipt>").attr({
		role: 'reload',
		src: '/plat/js/plugins/fileinput.js'
	}).appendTo(oHead);
	$("<scri" + "pt>" + "</scr" + "ipt>").attr({
		role: 'reload',
		src: '/plat/js/plugins/fileinput_locale_zh.js'
	}).appendTo(oHead);
}
// 机构等级初始化信息
function init_org_info_level_data(GradeId) {
	$(GradeId).empty();
	var thisURL = document.URL;
	var otype = "GET"
	var osync = false;
	var param = null;
	var reqResult = httpRequest(init_addInformation_info_level_data, param, otype, osync);
	if(thisURL.indexOf("?") != -1) {
		var strNature = "";
	} else {
		var strNature = "<option value=''>全部</option>";
	}
	for(var i = 0; i < reqResult.data.length; i++) {
		strNature += "<option value='" + reqResult.data[i].orgLevelId + "'>" + reqResult.data[i].orgLevelName + "</option>";
	}
	$(GradeId).append(strNature);
}
// 套餐类型初始化信息
function init_suite_type_info_data(typeId) {
	$(typeId).empty();
	var otype = "GET"
	var osync = false;
	var param = null;
	var reqResult = httpRequest(dict_suite_type_view_all, param, otype, osync);
	var strNature = "<option value='please'>全部</option>";
	if(reqResult.result == 0 && reqResult.data != null) {
		for(var i = 0; i < reqResult.data.length; i++) {
			strNature += "<option value='" + reqResult.data[i].examTypeId + "'>" + reqResult.data[i].examTypeName + "</option>";
		}
	}
	$(typeId).append(strNature);
}
// 时间转换
function getLocalTime(timeStamp) {
	var date = new Date(parseInt(timeStamp));
	var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
	var currentDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
	return date.getFullYear() + "-" + month + "-" + currentDate;
}
//时间转换到秒
function getDate(now) {
	var date = new Date(parseInt(now));
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var dateInfo = date.getDate();
	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();
	return year + "-" + month + "-" + dateInfo + " " + hour + ":" + minute + ":" + second;
}
// 空字符格式
function nullformat(str) {
	return str == null ? "" : str;
}

// 后退
function storeManagementBack() {
	history.go(-1);
	return false;
}

// 机构
function org_info(org, num) {
	var otype = "get";
	var osync = false;
	var reqResult = httpRequest(storeManagement_getAvailableOrgs_url, null, otype, osync);
	if(reqResult.result == 0) {
		var datal = reqResult.data;
		var provSelect = $('.org');
		if(num == 0) {
			var html = "<option selected='selected' value=''>全部</option>";
		} else {
			var html = "<option selected='selected' value=''>无</option>";
		}
		for(var i = 0; i < datal.length; i++) {
			html += "<option value= '" + datal[i].orgId + "'>" + datal[i].orgShortName + "</option>";
		}
		$(org).empty().append(html);

	} else {

		$(org).val('');
	}
}
// 性别
function sex(sex, num) {
	var otype = "get";
	var osync = false;
	var reqResult = httpRequest(common_dictSexListByStatus_url, null, otype, osync);
	if(reqResult.result == 0) {
		var datal = reqResult.data;
		if(num == 0) {
			var html = "<option selected='selected' value=''>全部</option>";
		} else {
			var html = "<option selected='selected' value=''>无</option>";
		}
		for(var i = 0; i < datal.length; i++) {
			html += "<option value= '" + datal[i].idSex + "'>" + datal[i].sexName + "</option>";
		}
		$(sex).empty().append(html);

	} else {

		$(sex).val('');
	}
}
//有效公司回显
function company_info(company, num) {
	var otype = "get";
	var osync = false;
	var reqResult = httpRequest(company_getValidEnterprise_url, null, otype, osync);
	if(reqResult.result == 0) {
		var datal = reqResult.data;
		if(num == 0) {
			var html = "<option selected='selected' value=''>全部</option>";
		} else {
			var html = "<option selected='selected' value=''>无</option>";
		}
		for(var i = 0; i < datal.length; i++) {
			html += "<option value= '" + datal[i].enterpriseId + "'>" + datal[i].enterpriseFullName + "</option>";
		}
		$(company).empty().append(html);

	} else {

		$(company).val('');
	}
}
//有效部门回显
function division_info(division, num) {
	var otype = "get";
	var osync = false;
	var reqResult = httpRequest(department_getValidEnterpriseDep_url, null, otype, osync);
	if(reqResult.result == 0) {
		var datal = reqResult.data;
		var provSelect = $('.division');
		if(num == 0) {
			var html = "<option selected='selected' value=''>全部</option>";
		} else {
			var html = "<option selected='selected' value=''>无</option>";
		}
		for(var i = 0; i < datal.length; i++) {
			html += "<option value= '" + datal[i].enterpriseDepId + "'>" + datal[i].enterpriseDepName + "</option>";
		}
		$(division).empty().append(html);

	} else {

		$(division).val('');
	}
}
//关系回显
function relationship_info() {
	var otype = "get";
	var osync = false;
	var reqResult = httpRequest(familyMember_getValidRelationship_url, null, otype, osync);
	if(reqResult.result == 0) {
		var datal = reqResult.data;
		var provSelect = $('.relationship');
		var html = "<option selected='selected' value=''>全部</option>";
		for(var i = 0; i < datal.length; i++) {
			html += "<option value= '" + datal[i].dictRelationId + "'>" + datal[i].dictRelationName + "</option>";
		}
		$(".relationship").empty().append(html);

	} else {

		$(".relationship").val('');
	}
}

//上级科室
function SuperiorDepartment(branchId, dept, num) {
	var otype = "get";
	var osync = false;
	var param = {
		"branid": branchId
	};
	var reqResult = httpRequest(departmentType_getOrgDeptByBranid_url, param, otype, osync);
	if(reqResult.result == 0) {
		if(num == 0) {
			var str = "<option value='0'>全部</option>";
		} else {
			var str = "<option value='0'>无</option>";
		}
		if(reqResult.data != '') {
			var datal = reqResult.data;
			for(var i = 0; i < datal.length; i++) {
				str += "<option value= '" + datal[i].deptId + "'>" + datal[i].deptName + "</option>";
			}
		}
		$(dept).empty().append(str);
	}
}
//科室负责人
function getOrgUserByBranchId(orgId,branchId,deptName,num) {
	var otype = "get";
	var osync = false;
	var param = {
		"orgId":orgId,
		"branchId": branchId
	};
	var reqResult = httpRequest(dept_getOrgUserByBranchId_url, param, otype, osync);
	if(reqResult.result == 0) {
		if(num == 0) {
			var str = "<option value='0'>全部</option>";
		} else {
			var str = "<option value='0'>无</option>";
		}
		if(reqResult.data != '') {
			var datal = reqResult.data;
			for(var i = 0; i < datal.length; i++) {
				str += "<option value= '" + datal[i].id + "'>" + datal[i].name + "</option>";
			}
		}
		$(deptName).empty().append(str);
	}
}
//科室类型  
function departmentType() {
	var otype = "get";
	var osync = false;
	var param = {
		'page': 1,
		'rows': 100
	};
	var reqResult = httpRequest(departmentType_selectDeptTypeList_url, param, otype, osync);
	if(reqResult.result == 0) {
		var html = "<option selected='selected' value='-1'>---请选择---</option>";
		var datal = reqResult.data.list;
		for(var i = 0; i < datal.length; i++) {
			html += "<option value= '" + datal[i].dictDeptTypeId + "'>" + datal[i].dictDeptTypeName + "</option>";
		}
		$(".dictDeptTypeId").empty().append(html);
	} else {
		$(".dictDeptTypeId").empty();
	}
}
//获取门店或者套餐图片的列表信息
function branchSuitPicture(id, type) {
	var otype = "get";
	var osync = false;
	var param = {
		'id': id,
		'type': type
	};
	var reqResult = httpRequest(pictureShow_getImgById_url, param, otype, osync);
	if(reqResult.result == 0) {
		var html = "";
		var datal = reqResult.data;
		for(var i = 0; i < datal.length; i++) {
			html += "<li class='liCss'><img class='imgCss' src='" + platIp + datal[i].imgLocation + "' id='" + datal[i].imgId + "'><h4 title='"+datal[i].imgName+"'>" + datal[i].imgName.substring(0, 9) + "...</h4></li>";
		}
		if(type == 1) {
			$(".branchPicture").empty().append(html);
		} else if(type == 2) {
			$(".SuitPicture").empty().append(html);
		}
	} else {
		$(".picture").empty();
	}
}
//结论词类型
function conclusionType() {
	var otype = "get";
	var osync = false;
	var reqResult = httpRequest(conclusionWordType_getConclusionType_url, null, otype, osync);
	if(reqResult.result == 0) {
		var html = "<option selected='selected' value=''>全部</option>";
		var datal = reqResult.data;
		for(var i = 0; i < datal.length; i++) {
			html += "<option value= '" + datal[i].id + "'>" + datal[i].name + "</option>";
		}
		$(".conclusionType").empty().append(html);
	} else {
		$(".conclusionType").empty();
	}
}
//结论词科室类型
function conclusionDeptType() {
	var otype = "get";
	var osync = false;
	var reqResult = httpRequest(conclusionWordType_getConclusionDeptType_url, null, otype, osync);
	if(reqResult.result == 0) {
		var html = "<option selected='selected' value=''>全部</option>";
		var datal = reqResult.data;
		for(var i = 0; i < datal.length; i++) {
			html += "<option value= '" + datal[i].id + "'>" + datal[i].name + "</option>";
		}
		$(".conclusionDeptType").empty().append(html);
	} else {
		$(".conclusionDeptType").empty();
	}
}
//结论词分组
function conclusionGroup() {
	var otype = "get";
	var osync = false;
	var reqResult = httpRequest(conclusionWordType_getConclusionGroup_url, null, otype, osync);
	if(reqResult.result == 0) {
		var html = "<option selected='selected' value=''>全部</option>";
		var datal = reqResult.data;
		for(var i = 0; i < datal.length; i++) {
			html += "<option value= '" + datal[i].id + "'>" + datal[i].name + "</option>";
		}
		$(".conclusionGroup").empty().append(html);
	} else {
		$(".conclusionGroup").empty();
	}
}
//结论词结果
function conclusionResult() {
	var otype = "get";
	var osync = false;
	var reqResult = httpRequest(conclusionWordType_getConclusionResultClass_url, null, otype, osync);
	if(reqResult.result == 0) {
		if(reqResult.data != '') {
			var html = "<option selected='selected' value=''>全部</option>";
			var datal = reqResult.data;
			for(var i = 0; i < datal.length; i++) {
				html += "<option value= '" + datal[i].id + "'>" + datal[i].name + "</option>";
			}
			$(".conclusionResult").empty().append(html);
		}
	} else {
		$(".conclusionResult").empty();
	}
}