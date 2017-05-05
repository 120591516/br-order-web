//公共ajax
function loading() {
	$(".fakeloader").fakeLoader({
		timeToHide: 1000,
		bgColor: "rgba(0,0,0,0.7)",
		spinner: "spinner2"
	});
}

function httpRequest(httpUrl, httpParam, httpType, async) {
	var reqResult = {
		"result": 1,
		"message": "没有请求服务器或接受到返回值"
	};
	$.ajax({
		url: httpUrl,
		type: httpType,
		async: async,
		data: httpParam,
		contentType: "application/x-www-form-urlencoded;charset=UTF-8",
		dataType: 'json',
		beforeSend: function() {
			loading();
		},
		success: function(msg) {
			if(msg.result == 99) {
				alert(msg.message);
				return false;
			} else if(msg.result == 100) {
				window.location.href = platIp + '/plat/';
				return false;
			}
			reqResult = msg;
			return msg;
		},
		complete: function() {
			$(".fakeloader").fadeOut();
		},
		error: function(data) {
			/**
			 * 此处应为弹出公共提示信息窗口
			 * 提示错误信息
			 * 并返回登录页面
			 */
			window.location.href = platIp + '/plat/pages/system/404.shtml';
			return false;
		}
	});
	return reqResult;
}

var gwIp = 'http://114.215.222.233';
//支付宝退款
var alipayRefundUrl = gwIp + '/br-order-controller/alipayRefund/refund';

var platIp = 'http://114.215.222.233';
var login_logout_url = platIp + '/br-order-controller/logout'; //退出管理系统
var login_verifyCode_url = '/br-order-controller/authImageController/verifyCode'; //验证码
var login_url = 'http://114.215.222.233/br-order-controller/login'; //登录
var footer_getUserPermission_url = platIp + '/br-order-controller/userManage/getUserPermission'; //左侧边栏导航
var userPower_getPermissionList_url = platIp + '/br-order-controller/permissionManager/getPermissionList'; //获取所有权限列表
var userPower_addBrOperation_url = platIp + '/br-order-controller/permissionManager/addBrOperationByPermissionId'; //添加权限
var userPower_getBrOperation_url = platIp + '/br-order-controller/permissionManager/getBrOperationById'; //功能列表基本信息编辑回显
var userPower_getBrPermission_url = platIp + '/br-order-controller/permissionManager/getBrPermissionById'; //获取权限基本信息
var userPower_getBrOperationList_url = platIp + '/br-order-controller/permissionManager/getBrOperationListById'; //获取权限功能列表
var userPower_updateBrOperation_url = platIp + '/br-order-controller/permissionManager/updateBrOperation'; //保存功能列表编辑信息
var userPower_updatePermission_url = '/br-order-controller/permissionManager/updatePermission'; //保存编辑基本信息
var userPower_insertPermission_url = platIp + '/br-order-controller/permissionManager/insertPermission'; //添加基本信息编辑数据

var userAdmin_getUserByPage_url = platIp + '/br-order-controller/userManage/getUserByPage'; //显示所有用户信息
var userAdmin_getCountByUserName_url = platIp + '/br-order-controller/userManage/getCountByUserName'; //校验用户名是否存在
var userAdmin_insertBrUser_url = platIp + '/br-order-controller/userManage/insertBrUser'; //添加新用户
var userAdmin_deleteBrUser_url = platIp + '/br-order-controller/userManage/deleteBrUser'; //删除用户
var userAdmin_getBrUser_url = platIp + '/br-order-controller/userManage/getBrUserById'; //用户详细信息编辑回显
var userAdmin_updateBrUser_url = platIp + '/br-order-controller/userManage/updateBrUser'; //保存对用户信息的修改
var userAdmin_resetPassWord_url = platIp + '/br-order-controller/userManage/resetPassWord'; //重置用户登录密码
//重置密码
var resetOrgUserPwdUrl = platIp + "/br-order-controller/organizationUser/resetOrgUserPwd";

var userRole_getRoles_url = platIp + '/br-order-controller/userManage/getRolesByUserId'; //用户分配角色获取当前用户的角色信息
var userRole_updateUserRole_url = platIp + '/br-order-controller/userManage/updateUserRole'; //编辑用户角色信息并保存

var edit_password_url = platIp + '/br-order-controller/userManage/editPassWord'; //修改用户登录密码

var personalInformation_getEmpInfo_url = platIp + '/br-order-controller/emp/getEmpInfo'; //获取用户个人信息
var personalInformation_updateEmp_url = platIp + '/br-order-controller/emp/updateEmp'; //编辑修改个人信息

var countryMaintenance_countryManage_getList_url = platIp + '/br-order-controller/countryManage/getList'; //字典维护下面   国家列表全部信息显示
var countryMaintenance_addCountry_url = platIp + '/br-order-controller/countryManage/addCountry'; //添加国家信息
var countryMaintenance_deleteCountry_url = platIp + '/br-order-controller/countryManage/deleteCountry'; //删除国家信息
var countryMaintenance_getCountryById_url = platIp + '/br-order-controller/countryManage/getCountryById'; //编辑回显国家详细信息
var countryMaintenance_updateCountry_url = platIp + '/br-order-controller/countryManage/updateCountry'; //保存编辑国家信息的内容
var countryMaintenance_checkCountryName_url = platIp + '/br-order-controller/countryManage/checkCountryName'; //验证国家名称是否存在
var countryMaintenance_checkCountryCode_url = platIp + '/br-order-controller/countryManage/checkCountryCode'; //验证国家代码是否存在
var countryMaintenance_checkCountryInputCode_url = platIp + '/br-order-controller/countryManage/checkCountryInputCode'; //验证国家输入码是否存在
var countryMaintenance_checkCountryLineOrder_url = platIp + '/br-order-controller/countryManage/checkCountryLineOrder'; //验证国家行序是否存在

var areaMaintenance_getAreaByPage_url = '/br-order-controller/dictArea/getAreaByPage'; //字典维护下的地区展示所有地区信息

var bloodType_getAllBloodType_url = platIp + '/br-order-controller/bloodTypeManage/getAllBloodType'; //字典维护下的血型 展示所有血型信息
var bloodType_addBloodType_url = platIp + '/br-order-controller/bloodTypeManage/addBloodType'; //添加血型信息
var bloodType_deleteBloodType_url = platIp + '/br-order-controller/bloodTypeManage/deleteBloodType'; //删除血型信息
var bloodType_getBloodTypeById_url = platIp + '/br-order-controller/bloodTypeManage/getBloodTypeById'; //编辑回显血型详细信息
var bloodType_updateBloodType_url = platIp + '/br-order-controller/bloodTypeManage/updateBloodType'; //保存编辑血型信息内容

var interpersonalRelation_getDictrelationshipList_url = platIp + '/br-order-controller/dictrelationship/getDictrelationshipList'; //字典维护人际关系全部信息
var interpersonalRelation_addDictrelationship_url = platIp + '/br-order-controller/dictrelationship/addDictrelationship'; //添加人际关系
var interpersonalRelation_deleteDictrelationship_url = platIp + '/br-order-controller/dictrelationship/deleteDictrelationship'; //删除人际关系
var interpersonalRelation_getDictrelationshipById_url = platIp + '/br-order-controller/dictrelationship/getDictrelationshipById'; //查看人际关系详细信息
var interpersonalRelation_updateDictrelationship_url = platIp + '/br-order-controller/dictrelationship/updateDictrelationship'; //保存人际关系修改

var dictNation_getAllNation_url = platIp + '/br-order-controller/dictNationManage/getAllNation'; //字典维护   民族信息全部显示
var dictNation_addNation_url = platIp + '/br-order-controller/dictNationManage/addNation'; //字典维护   民族信息添加
var dictNation_deleteDictNation_url = platIp + '/br-order-controller/dictNationManage/deleteDictNation'; //字典维护   民族信息删除
var dictNation_getNationById_url = platIp + '/br-order-controller/dictNationManage/getNationById'; //字典维护   民族信息回显
var dictNation_updateNation_url = platIp + '/br-order-controller/dictNationManage/updateNation'; //字典维护   民族信息编辑

var departmentType_selectDeptTypeList_url = platIp + '/br-order-controller/dictDeptTypeManage/selectDeptTypeList'; //字典维护 科室信息列表
var departmentType_addDeptType_url = platIp + '/br-order-controller/dictDeptTypeManage/addDeptType'; //添加科室
var departmentType_getDeptTypeById_url = platIp + '/br-order-controller/dictDeptTypeManage/getDeptTypeById'; //查看科室
var departmentType_deleteDeptType_url = platIp + '/br-order-controller/dictDeptTypeManage/deleteDeptType'; //删除科室
var departmentType_updateDeptType_url = platIp + '/br-order-controller/dictDeptTypeManage/updateDeptType'; //保存科室

var examinationOrganizationLevel_getAllOrgLevel_url = platIp + '/br-order-controller/orgLevel/getAllOrgLevel'; //字典维护  体检机构等级
var examinationOrganizationLevel_insertOrgLevel_url = platIp + '/br-order-controller/orgLevel/insertOrgLevel'; //添加机构等级
var examinationOrganizationLevel_deleteOrgLevel_url = platIp + '/br-order-controller/orgLevel/deleteOrgLevel'; //删除机构等级
var examinationOrganizationLevel_geOrgLevelById_url = platIp + '/br-order-controller/orgLevel/geOrgLevelById'; //查看机构等级
var examinationOrganizationLevel_updateOrgLevel_url = platIp + '/br-order-controller/orgLevel/updateOrgLevel '; //更新机构等级

var packageType_getOrgExamSuiteTypeList_url = platIp + '/br-order-controller/orgExamSuiteType/getOrgExamSuiteTypeList'; //套餐类型列表信息
var packageType_addOrgExamSuiteType_url = platIp + '/br-order-controller/orgExamSuiteType/addOrgExamSuiteType'; // 添加套餐类型
var packageType_deleteExamSuiteType_url = platIp + '/br-order-controller/orgExamSuiteType/deleteExamSuiteType'; // 删除套餐类型
var packageType_getExamSuiteTypeById_url = platIp + '/br-order-controller/orgExamSuiteType/getExamSuiteTypeById'; // 查看套餐类型
var packageType_updateExamSuiteType_url = platIp + '/br-order-controller/orgExamSuiteType/updateExamSuiteType'; // 编辑套餐类型

var highIncidenceOfDisease_getHighIncidenceDiseaseList_url = platIp + '/br-order-controller/highIncidenceDisease/getHighIncidenceDiseaseList'; // 高发疾病列表信息
var highIncidenceOfDisease_addhighIncidenceDisease_url = platIp + '/br-order-controller/highIncidenceDisease/addhighIncidenceDisease'; // 添加高发疾病信息
var highIncidenceOfDisease_deleteHighIncidenceDisease_url = platIp + '/br-order-controller/highIncidenceDisease/deleteHighIncidenceDisease'; // 删除高发疾病信息
var highIncidenceOfDisease_gethighIncidenceDiseaseById_url = platIp + '/br-order-controller/highIncidenceDisease/gethighIncidenceDiseaseById'; // 查看高发疾病信息
var highIncidenceOfDisease_updateHighIncidenceDisease_url = platIp + '/br-order-controller/highIncidenceDisease/updateHighIncidenceDisease'; // 更新高发疾病信息

var storeManagement_searchOrganizationBranch_url = platIp + '/br-order-controller/orgBranch/searchOrganizationBranch'; //搜索查询符合条件信息的所有门店信息显示
var storeManagement_insertOrganizationBranch_url = platIp + '/br-order-controller/orgBranch/insertOrganizationBranch'; //添加门店
var storeManagement_deleteOrganizationBranch_url = platIp + '/br-order-controller/orgBranch/deleteOrganizationBranch'; //删除门店
var storeManagement_getOrganizationBranchById_url = platIp + '/br-order-controller/orgBranch/getOrganizationBranchById'; //编辑回显门店
var storeManagement_updateOrganizationBranch_url = platIp + '/br-order-controller/orgBranch/updateOrganizationBranch'; //保存门店编辑信息
var storeManagement_getAvailableOrgs_url = platIp + '/br-order-controller/organization/getAvailableOrgs';

//体检项体征词相关接口
var item_getOrgExamItemValueByPage_url = platIp + '/br-order-controller/orgExamItemValue/getOrgExamItemValueByPage'; //查
var item_insertOrgExamItemValue_url = platIp + '/br-order-controller/orgExamItemValue/insertOrgExamItemValue'; //增
var item_getOrgExamItemValueById_url = platIp + '/br-order-controller/orgExamItemValue/getOrgExamItemValueById'; //看
var item_updateOrgExamItemValue_url = platIp + '/br-order-controller/orgExamItemValue/updateOrgExamItemValue'; //改
var item_deleteOrgExamItemValue_url = platIp + '/br-order-controller/orgExamItemValue/deleteOrgExamItemValue'; //删
var item_list_url = platIp + '/br-order-controller/orgExamItem/getAllOrgExamItem'; //体检项目列表

var getAllProvince_url = platIp + '/br-order-controller/dictArea/getAllProvince'; //获取省
var getCityByProvinceId_url = platIp + '/br-order-controller/dictArea/getCityByProvinceId'; //获取市
var getDistrictByCityId_url = platIp + '/br-order-controller/dictArea/getDistrictByCityId'; //获取区

var dict_suite_type_view = '/br-order-controller/examSuiteType/getExamSuiteTypeList' //查看套餐类型字典表

var userLogOn_getCustomerRegistByPage_url = platIp + '/br-order-controller/customersRegist/getCustomerRegistByPage'; //注册用户信息列表
var userLogOn_deleteCustomerRegist_url = platIp + '/br-order-controller/customersRegist/deleteCustomerRegist'; //禁用注册用户
var userLogOn_insertCustomerRegist_url = platIp + '/br-order-controller/customersRegist/insertCustomerRegist'; //添加注册用户信息
var userLogOnInfo_getCustomerRegistById_url = platIp + '/br-order-controller/customersRegist/getCustomerRegistById'; //查看注册用户信息
var userLogOnInfo_updateCustomerRegist_url = platIp + '/br-order-controller/customersRegist/updateCustomerRegist'; //保存注册用户信息
var userLogOnInfo_getCustomerInfoByPage_url = platIp + '/br-order-controller/relationship/getCustomerInfoByPage'; //根据注册用户获取家庭成员关系列表

var familyMember_InsertRelationship_url = platIp + '/br-order-controller/relationship/InsertRelationship'; //添加家庭成员
var familyMember_deleteRelationship_url = platIp + '/br-order-controller/relationship/deleteRelationship'; //删除成员信息
var familyMember_getRelationshipByID_url = platIp + '/br-order-controller/relationship/getRelationshipByID'; //查看成员消息
var familyMember_updateCustomerInfo_url = platIp + '/br-order-controller/relationship/UpdateRelationship'; //保存修改好的成员关系
var familyMember_getValidRelationship_url = platIp + '/br-order-controller/dictrelationship/getValidRelationship' //可用人际关系

var company_getEnterprise_url = platIp + '/br-order-controller/enterprise/getEnterpriseByPage'; //获取企业下面的公司的全部信息
var company_deleteEnterprise_url = platIp + '/br-order-controller/enterprise/deleteEnterprise'; //删除企业信息
var company_insertEnterpriseDep_url = platIp + '/br-order-controller/enterprise/insertEnterprise'; //添加企业信息
var company_getEnterpriseById_url = platIp + '/br-order-controller/enterprise/getEnterpriseById'; //查看企业信息
var company_updateEnterprise_url = platIp + '/br-order-controller/enterprise/updateEnterprise'; //编辑保存企业信息
var company_getValidEnterprise_url = platIp + '/br-order-controller/enterprise/getValidEnterprise'; //有效的公司回显

var department_getEnterpriseDep_url = platIp + '/br-order-controller/enterpriseDep/getEnterpriseDepByPage'; //获取企业下面的部门的全部信息
var department_deleteEnterpriseDep_url = platIp + '/br-order-controller/enterpriseDep/deleteEnterpriseDep'; //删除部门信息
var department_insertEnterpriseDep_url = platIp + '/br-order-controller/enterpriseDep/insertEnterpriseDep'; //添加部门信息
var department_getEnterpriseById_url = platIp + '/br-order-controller/enterpriseDep/getEnterpriseDepById'; //查看部门信息
var department_updateEnterpriseDep_url = platIp + '/br-order-controller/enterpriseDep/updateEnterpriseDep'; //保存修改后的部门信息
var department_getValidEnterpriseDep_url = platIp + '/br-order-controller/enterpriseDep/getValidEnterpriseDep'; //可用部门信息回显
var _import_ = platIp + '/br-order-controller/enterpriseDep/import'; //部门导入

var employee_getEnterpriseEmpByPage_url = platIp + '/br-order-controller/enterpriseEmp/getEnterpriseEmpByPage'; //分页显示员工列表
var employee_deleteEnterpriseEmp_url = platIp + '/br-order-controller/enterpriseEmp/deleteEnterpriseEmp'; //删除员工信息
var employee_insertEnterpriseEmp_url = platIp + '/br-order-controller/enterpriseEmp/insertEnterpriseEmp'; //添加员工信息
var employee_getEnterpriseEmpById_url = platIp + '/br-order-controller/enterpriseEmp/getEnterpriseEmpById'; //根据id查询员工信息
var employee_updateEnterpriseEmp_url = platIp + '/br-order-controller/enterpriseEmp/updateEnterpriseEmp'; //保存员工信息的更改

var common_dictSexListByStatus_url = platIp + '/br-order-controller/dictsex/dictSexListByStatus'; //可用性别

/*
 * * 原AjaxOul.js
 */
var userActorList = platIp + '/br-order-controller/roleManage/list'; //角色列表

var init_mec_dele = platIp + '/br-order-controller/organization/deleteOrganization'; //体检中心-删除
var init_addInformation_judgeParam = platIp + '/br-order-controller/orgreview/getOrganizationReviewByOrgId'; //审核信息回显
var init_addInformation_getOrganizationById = platIp + '/br-order-controller/organization/getOrganizationById'; //基本信息回显
var init_addInformation_info_level_data = platIp + '/br-order-controller/orgLevel/getAllOrgLevel'; //基本信息-等级
var init_addInformation_info_province_data = platIp + '//br-order-controller/dictArea/getAllProvince'; //基本信息-级联-省
var init_addInformation_info_city_data = platIp + '/br-order-controller/dictArea/getCityByProvinceId'; //基本信息-级联-市
var init_addInformation_info_district_data = platIp + '/br-order-controller/dictArea/getDistrictByCityId'; //基本信息-级联-区
var init_addInformation_SubmitInform_add = platIp + '/br-order-controller/organization/insertOrganization'; //基本信息-提交-添加
var init_addInformation_SubmitInform_edit = platIp + '/br-order-controller/organization/updateOrganization'; //基本信息-提交-编辑

var init_addContact_judgeParam = platIp + '/br-order-controller/orgConn/getOrgConnByOrgId'; //联系人信息-编辑状态初始化
var init_addContact_postTJ_add = platIp + '/br-order-controller/orgConn/insertOrganizationConn'; //联系人信息-提交-添加
var init_addContact_delete = platIp + '/br-order-controller/orgConn/deleteOrgConn'; //联系人信息-删除
var init_addContact_edit_show = platIp + '/br-order-controller/orgConn/getOrgConnByOrgConnId'; //联系人信息-编辑-显示
var init_addContact_edit = platIp + '/br-order-controller/orgConn/updateOrgConn'; //联系人信息-编辑

var init_addExam_judgeParam = platIp + '/br-order-controller/orgIncome/getOrgIncomeByOrgId'; //体检信息-编辑状态初始化
var init_addExam_postTJ_add = platIp + '/br-order-controller/orgIncome/insertOrgIncome'; //体检信息-提交-添加
var init_addExam_delete = platIp + '/br-order-controller/orgIncome/deleteOrgIncome'; //体检信息-删除
var init_addExam_edit_show = platIp + '/br-order-controller/orgIncome/getOrgIncomeByIncomeId'; //体检信息-编辑-显示
var init_addExam_edit = platIp + '/br-order-controller/orgIncome/updateOrgIncome'; //体检信息-编辑

var init_addsoftware_judgeParam = platIp + '/br-order-controller/orgSoft/getOrgSoftByOrgId'; //软件信息-编辑状态初始化
var init_addsoftware_postTJ_add = platIp + '/br-order-controller/orgSoft/insertOrgSoft'; //软件信息-提交-添加
var init_addsoftware_delete = platIp + '/br-order-controller/orgSoft/deleteOrgSoft'; //软件信息-删除
var init_addsoftware_edit_show = platIp + '/br-order-controller/orgSoft/getOrgSoftBySoftId'; //软件信息-编辑-显示
var init_addsoftware_edit = platIp + '/br-order-controller/orgSoft/updateOrgSoft'; //软件信息-编辑

var init_addInvest_judgeParam = platIp + '/br-order-controller/orgInvest/getOrgInvestByOrgId'; //投资信息-编辑状态初始化
var init_addInvest_postTJ_add = platIp + '/br-order-controller/orgInvest/insertOrgInvest'; //投资信息-提交-添加
var init_addInvest_delete = platIp + '/br-order-controller/orgInvest/deleteOrgInvest'; //投资信息-删除
var init_addInvest_edit_show = platIp + '/br-order-controller/orgInvest/getOrgInvestByInvestId'; //投资信息-编辑-显示
var init_addInvest_edit = platIp + '/br-order-controller/orgInvest/updateOrgInvest'; //投资信息-编辑

var init_addVist_judgeParam = platIp + '/br-order-controller/orgVisit/getOrgVisitByOrgId'; //拜访信息-编辑状态初始化
var init_addVist_postTJ_add = platIp + '/br-order-controller/orgVisit/insertOrgVisit'; //拜访信息-提交-添加
var init_addVist_delete = platIp + '/br-order-controller/orgVisit/deleteOrgVisit'; //拜访信息-删除
var init_addVist_edit_show = platIp + '/br-order-controller/orgVisit/getOrgVisitByVisitId'; //拜访信息-编辑-显示
var init_addVist_edit = platIp + '/br-order-controller/orgVisit/updateOrgVisit'; //拜访信息-编辑

var init_addCooperation_show = platIp + '/br-order-controller/orgCooperation/getOrgCooperationByOrgId'; //合作意向信息
var init_addCooperation_edit = platIp + '/br-order-controller/orgCooperation/updateOrgCooperation'; //合作意向修改
var init_addWarp_show = platIp + '/br-order-controller/orgWeb/getOrgWebByOrgId'; //公共账号信息
var init_addCooperation_save = platIp + '/br-order-controller/orgWeb/updateOrgWeb'; //公共账号保存信息
var init_checkorginform_show = platIp + '/br-order-controller/organization/getOrgAllInfoById'; //查看所有信息

var user_actor_list = platIp + '/br-order-controller/roleManage/list'; //角色列表全部信息
var user_actor_delete = platIp + '/br-order-controller/roleManage/deleteBrRole'; //角色列表-删除
var user_actor_postTJ = platIp + '/br-order-controller/roleManage/addBrRole'; //角色列表-添加
var user_actor_edit_show = platIp + '/br-order-controller/roleManage/getRoleOne'; //角色列表-编辑-显示
var user_actor_edit = platIp + '/br-order-controller/roleManage/updateBrRole'; //角色列表-编辑

var actorPower_getBrpermissionIdList_url = platIp + '/br-order-controller/permissionManager/getBrOperationListByIdAndOpen'; //角色分配权限
var actorPower_getBrroleIdList_url = platIp + '/br-order-controller/roleManage/getPermissionAndOperationByIdAndOpen'; //角色分配权限-页面加载
var actorPower_submitCheck_url = platIp + '/br-order-controller/roleManage/savePermission'; //角色分配权限--选中提交

var mec_check_edit = platIp + '/br-order-controller/organization/reviewOrganization'; //体检中心-修改审核信息
var mecSearchOul = platIp + '/br-order-controller/organization/getOrganizationByPage'; //体检机构-多条件搜索 

var sex_getDictSexList_url = platIp + '/br-order-controller/dictsex/getDictsexList'; //字典表性别-显示
var sex_addDictSexLIST_url = platIp + '/br-order-controller/dictsex/addDictsex'; //字典表性别列表-添加
var sex_getDictSexById_url = platIp + '/br-order-controller/dictsex/getDictsexById'; //字典表性别列表-查看
var sex_updateDictSex_url = platIp + '/br-order-controller/dictsex/updateDictsex'; //字典表性别列表-修改
var sex_deleteDictSex_url = platIp + '/br-order-controller/dictsex/deleteDictsex'; //字典表性别列表-删除

var ageunit_getAllDictageunit_url = platIp + '/br-order-controller/dictAgeUnitManage/getAllDictageunit'; //年龄单位-获取全都列表内容显示
var ageunit_addDictAgeUnit_url = platIp + '/br-order-controller/dictAgeUnitManage/addDictAgeUnit'; //年龄单位-添加
var ageunit_deleteDictageunit_url = platIp + '/br-order-controller/dictAgeUnitManage/deleteDictageunit'; //年龄单位-删除
var ageunit_updateDictageunit_url = platIp + '/br-order-controller/dictAgeUnitManage/updateDictageunit'; //年龄单位-修改
var ageunit_getDictAgeUnitById_url = platIp + '/br-order-controller/dictAgeUnitManage/getDictAgeUnitById'; //年龄单位-回显

var receiptType_getDictreceipttypeList_url = platIp + '/br-order-controller/dictreceipttype/getDictreceipttypeList'; //发票类型页面-查看
var receiptType_addDictreceipttype_url = platIp + '/br-order-controller/dictreceipttype/addDictreceipttype'; //发票类型页面-添加
var receiptType_getDictreceipttypeById_url = platIp + '/br-order-controller/dictreceipttype/getDictreceipttypeById'; //发票类型页面-回显
var receiptType_updateDictreceipttype_url = platIp + '/br-order-controller/dictreceipttype/updateDictreceipttype'; //发票类型页面-编辑
var receiptType_deleteDictreceipttype_url = platIp + '/br-order-controller/dictreceipttype/deleteDictreceipttype'; //发票类型页面-删除

var payWay_getDictpaywayList_url = platIp + '/br-order-controller/dictpayway/getDictpaywayList'; //支付方式-查看所有
var payWay_addDictpayway_url = platIp + '/br-order-controller/dictpayway/addDictpayway'; //支付方式-添加页面信息
var payWay_deleteDictpayway_url = platIp + '/br-order-controller/dictpayway/deleteDictpayway'; //支付方式-删除
var payWay_getDictpaywayById_url = platIp + '/br-order-controller/dictpayway/getDictpaywayById'; //支付方式-回显
var payWay_updateDictpayway_url = platIp + '/br-order-controller/dictpayway/updateDictpayway'; //支付方式-编辑

var jobClass_addJobClass_url = platIp + '/br-order-controller/jobclassManage/addJobClass'; //职业类别-添加
var jobClass_deleteJobClass_url = platIp + '/br-order-controller/jobclassManage/deleteJobClass'; //职业类别-删除
var jobClass_getJobClassById_url = platIp + '/br-order-controller/jobclassManage/getJobClassById'; //职业类别-回显
var jobClass_getJobClassList_url = platIp + '/br-order-controller/jobclassManage/getJobClassList'; //职业类别-查看
var jobClass_updateJobClass_url = platIp + '/br-order-controller/jobclassManage/updateJobClass'; //职业类别-编辑

var maritalStatus_addMarriage_url = platIp + '/br-order-controller/marriageManage/addMarriage'; //婚姻状况-添加
var maritalStatus_deleteMarriage_url = platIp + '/br-order-controller/marriageManage/deleteMarriage'; //婚姻状况-删除
var maritalStatus_getMarriageById_url = platIp + '/br-order-controller/marriageManage/getMarriageById'; //婚姻状况-回显
var maritalStatus_getMarriageList_url = platIp + '/br-order-controller/marriageManage/getMarriageList'; //婚姻状况-查看
var maritalStatus_updateMarriage_url = platIp + '/br-order-controller/marriageManage/updateMarriage'; //婚姻状况-编辑

var education_addEducation_url = platIp + '/br-order-controller/educationManage/addEducation'; //教育程度-添加
var education_deleteEducation_url = platIp + '/br-order-controller/educationManage/deleteEducation'; //教育程度-删除
var education_getEducationById_url = platIp + '/br-order-controller/educationManage/getEducationById'; //教育程度-回显
var education_getEducationList_url = platIp + '/br-order-controller/educationManage/getEducationList'; //教育程度-查看
var education_updateEducation_url = platIp + '/br-order-controller/educationManage/updateEducation'; //教育程度-编辑

var ageGroup_addDictAgeGroup_url = platIp + '/br-order-controller/dictagegroup/addDictAgeGroup'; //职业分组-添加
var ageGroup_deleteDictagegroup_url = platIp + '/br-order-controller/dictagegroup/deleteDictagegroup'; //职业分组-删除
var ageGroup_getAllDictagegroup_url = platIp + '/br-order-controller/dictagegroup/getAllDictagegroup'; //职业分组-查看
var ageGroup_getDictAgeGroupById_url = platIp + '/br-order-controller/dictagegroup/getDictAgeGroupById'; //职业分组-回显
var ageGroup_updateDictagegroup_url = platIp + '/br-order-controller/dictagegroup/updateDictagegroup'; //职业分组-编辑

//数据字典
var checkItemType_getAllOrgExamItemType_url = platIp + '/br-order-controller/orgExamItemType/getAllOrgExamItemType'; //检查项列表
var checkItemType_insertOrgExamItemType_url = platIp + '/br-order-controller/orgExamItemType/insertOrgExamItemType'; //添加检查项
var checkItemType_getOrgExamItemTypeById_url = platIp + '/br-order-controller/orgExamItemType/getOrgExamItemTypeById'; //查看检查项
var checkItemType_updateOrgExamItemType_url = platIp + '/br-order-controller/orgExamItemType/updateOrgExamItemType'; //保存检查项类型
var checkItemType_deleteOrgExamItemType_url = platIp + '/br-order-controller/orgExamItemType/deleteOrgExamItemType'; //删除检查项

var conclusionWordType_getConclusionTypeList_url = platIp + '/br-order-controller/dictConclusionType/getConclusionTypeList'; //结论词类型
var conclusionWordType_addConclusionType_url = platIp + '/br-order-controller/dictConclusionType/addConclusionType'; //添加结论词类型
var conclusionWordType_deleteConclusionType_url = platIp + '/br-order-controller/dictConclusionType/deleteConclusionType'; //删除结论词类型
var conclusionWordType_getConclusionTypeById_url = platIp + '/br-order-controller/dictConclusionType/getConclusionTypeById'; //查看结论词类型
var conclusionWordType_updateConclusionType_url = platIp + '/br-order-controller/dictConclusionType/updateConclusionType'; //保存结论词类型

var conclusionWordType_getConclusionDeptTypeList_url = platIp + '/br-order-controller/dictConclusionDeptType/getConclusionDeptTypeList'; //结论词科室类型
var conclusionWordType_addConclusionDeptType_url = platIp + '/br-order-controller/dictConclusionDeptType/addConclusionDeptType'; //添加结论词科室类型
var conclusionWordType_deleteConclusionDeptType_url = platIp + '/br-order-controller/dictConclusionDeptType/deleteConclusionDeptType'; //删除结论词科室类型
var conclusionWordType_getConclusionDeptTypeById_url = platIp + '/br-order-controller/dictConclusionDeptType/getConclusionDeptTypeById'; //查看结论词科室类型
var conclusionWordType_updateConclusionDeptType_url = platIp + '/br-order-controller/dictConclusionDeptType/updateConclusionDeptType'; //保存结论词科室类型

var conclusionWordType_getConclusionResultClassList_url = platIp + '/br-order-controller/dictConclusionResultClass/getConclusionResultClassList'; //结论词分组
var conclusionWordType_addConclusionResultClass_url = platIp + '/br-order-controller/dictConclusionResultClass/addConclusionResultClass'; //添加结论词分组
var conclusionWordType_deleteConclusionResultClass_url = platIp + '/br-order-controller/dictConclusionResultClass/deleteConclusionResultClass'; //删除结论词分组
var conclusionWordType_getConclusionResultClassById_url = platIp + '/br-order-controller/dictConclusionResultClass/getConclusionResultClassById'; //查看结论词分组
var conclusionWordType_updateConclusionResultClass_url = platIp + '/br-order-controller/dictConclusionResultClass/updateConclusionResultClass'; //保存结论词分组

var conclusionWordType_getConclusionGroupList_url = platIp + '/br-order-controller/dictConclusionGroup/getConclusionGroupList'; //结论词结果
var conclusionWordType_addConclusionGroup_url = platIp + '/br-order-controller/dictConclusionGroup/addConclusionGroup'; //添加结论词结果
var conclusionWordType_deleteConclusionGroup_url = platIp + '/br-order-controller/dictConclusionGroup/deleteConclusionGroup'; //删除结论词结果
var conclusionWordType_getConclusionGroupById_url = platIp + '/br-order-controller/dictConclusionGroup/getConclusionGroupById'; //查看结论词结果
var conclusionWordType_updateConclusionGroup_url = platIp + '/br-order-controller/dictConclusionGroup/updateConclusionGroup'; //保存结论词结果

var conclusionWordType_getConclusionList_url = platIp + '/br-order-controller/dictConclusion/getConclusionList'; //结论词
var conclusionWordType_addConclusion_url = platIp + '/br-order-controller/dictConclusion/addConclusion'; //添加结论词
var conclusionWordType_deleteConclusion_url = platIp + '/br-order-controller/dictConclusion/deleteConclusion'; //删除结论词
var conclusionWordType_getConclusionById_url = platIp + '/br-order-controller/dictConclusion/getConclusionById'; //查看结论词
var conclusionWordType_updateConclusion_url = platIp + '/br-order-controller/dictConclusion/updateConclusion'; //保存结论词

var conclusionWordType_getConclusionType_url = platIp + '/br-order-controller/dictConclusionType/getConclusionType'; //结论词科室类型全部信息
var conclusionWordType_getConclusionDeptType_url = platIp + '/br-order-controller/dictConclusionDeptType/getConclusionDeptType'; //结论词科室类型全部信息
var conclusionWordType_getConclusionGroup_url = platIp + '/br-order-controller/dictConclusionGroup/getConclusionGroup'; //结论词分组全部信息
var conclusionWordType_getConclusionResultClass_url = platIp + '/br-order-controller/dictConclusionResultClass/getConclusionResultClass'; //结论词结果全部信息

var signWord_getConclusionType_url = platIp + '/br-order-controller/orgExamItemValue/getOrgExamItemValueByPage'; //体征词列表信息
var signWord_insertOrgExamItemValue_url = platIp + '/br-order-controller/orgExamItemValue/insertOrgExamItemValue'; //添加体征词信息
var signWord_deleteOrgExamItemValue_url = platIp + '/br-order-controller/orgExamItemValue/deleteOrgExamItemValue'; //删除体征词信息
var signWord_getOrgExamItemValueById_url = platIp + '/br-order-controller/orgExamItemValue/getOrgExamItemValueById'; //获取体征词信息
var signWord_updateOrgExamItemValue_url = platIp + '/br-order-controller/orgExamItemValue/updateOrgExamItemValue'; //保存修改后的体征词信息

//所有检查项
signWord_getExamItemName_url = platIp + '/br-order-controller/orgExamItemValue/getExamItemName'; //获取所有检查项

var packAgeSearchOul = platIp + '/br-order-controller/orgExamSuite/getOrgExamSuite'; //套餐列表
var packAge_Dele = platIp + '/br-order-controller/orgExamSuite/delectOrgExamSuite'; //删除套餐
var packAge_Add = platIp + '/br-order-controller/orgExamSuite/addOrgExamSuite'; //添加套餐
var packAge_show = platIp + '/br-order-controller/orgExamSuite/getOrgExamSuiteById'; //套餐内容显示
var packAge_edit = platIp + '/br-order-controller/orgExamSuite/updateOrgExamSuite'; //套餐内容编辑
var uploadImagesUrl = platIp + '/br-order-org-controller/uploadImg/uploadImg'; //上传图片路径

var packAge_SelectPackage = platIp + '/br-order-controller/orgBranchSuite/insertOrgBranchSuite'; //门店选择套餐
var packAge_DelePackage = platIp + '/br-order-controller/orgBranchSuite/delectOrgBranchSuiteById'; //门店选择套餐删除
var StorePack_init_show = platIp + '/br-order-controller/orgBranchSuite/getOrgBranchSuiteList'; //门店套餐管理页面——列表
var storePack_select_suites = platIp + '/br-order-controller/orgBranchSuite/getSelectSuiteByBranchId'; //门店已选择的套餐

var branch_rest_by_branchId = platIp + '/br-order-controller/orgRest/getOrganizationRestById'; //门店休息日列表
var branch_rest_add = platIp + '/br-order-controller/orgRest/insertOrganizationRest'; //门店休息日添加
var branch_rest_del = platIp + '/br-order-controller/orgRest/deleteOrganizationRestById'; //门店休息日删除
var branch_rest_update = platIp + '/br-order-controller/orgRest/updateOrganizationRest'; //门店休息日更新

var getOrgExamFeeItemByPageUrl = platIp + '/br-order-controller/OrgExamFeeItem/getOrgExamFeeItemByPage'; //分页获取收费项目列表
var getOrgExamFeeItemByIdUrl = platIp + '/br-order-controller/OrgExamFeeItem/getOrgExamFeeItemById'; //根据id获取收费项信息
var updateOrgExamFeeItemUrl = platIp + '/br-order-controller/OrgExamFeeItem/updateOrgExamFeeItem'; //更新收费项信息
var insertOrgExamFeeItemUrl = platIp + '/br-order-controller/OrgExamFeeItem/insertOrgExamFeeItem'; //新增收费项信息
var deleteOrgExamFeeItemByIdUrl = platIp + '/br-order-controller/OrgExamFeeItem/deleteOrgExamFeeItemById'; //删除收费项信息
var insertOrgExamFeeItemDetailUrl = platIp + '/br-order-controller/orgExamFeeItemDetail/insertOrgExamFeeItemDetail'; //将收费项与多条检查项建立关联
var insertOrgExamFeeItemSuiteUrl = platIp + '/br-order-controller/orgExamFeeItemSuite/batchInsertOrgExamFeeItemSuite'; //将套餐与收费项建立关联
var org_exam_feeItem_suite_delete = platIp + '/br-order-controller/orgExamFeeItemSuite/deleteOrgExamFeeItemSuite' //套餐绑定收费项
var org_exam_feeItem_detail_delete = platIp + '/br-order-controller/orgExamFeeItemDetail/deleteOrgExamFeeItemDetail' //收费项删除绑定的检查项	

var getOrgUserAllUrl = platIp + '/br-order-controller/organizationUser/getOrgUserAll'; //获取全部机构员工信息
var addOrgUserUrl = platIp + '/br-order-controller/organizationUser/addOrgUser'; //添加机构员工信息  
var updateOrgUserUrl = platIp + '/br-order-controller/organizationUser/updateOrgUser'; //编辑机构员工信息
var deleteOrgUserUrl = platIp + '/br-order-controller/organizationUser/deleteOrgUser'; //删除机构员工信息
var getOrgUserByFidUrl = platIp + '/br-order-controller/organizationUser/getOrgUserByFid'; //根据id获取机构员工信息列表
var getOrgUserByIdUrl = platIp + '/br-order-controller/organizationUser/getOrgUserById'; //根据id获取机构员工信息对象   回显列表信息
var getOrgUserListUrl = platIp + '/br-order-controller/organizationUser/getOrgUserList'; //分页查询机构员工信息   获取全部列表信息
var getOrgDeptAllUrl = platIp + '/br-order-controller/OrgDept/getOrgDeptAll'; //获取全部科室名称信息

var getOrgExamItemByPageUrl = platIp + '/br-order-controller/orgExamItem/getOrgExamItemByPage'; //分页获取体检项列表
var getOrgExamItemByIdUrl = platIp + '/br-order-controller/orgExamItem/getOrgExamItemById'; //根据id获取体检项信息回显
var updateOrgExamItemUrl = platIp + '/br-order-controller/orgExamItem/updateOrgExamItem'; //更新体检项信息
var insertOrgExamItemUrl = platIp + '/br-order-controller/orgExamItem/insertOrgExamItem'; //新增体检项信息
var deleteOrgExamItemUrl = platIp + '/br-order-controller/orgExamItem/deleteOrgExamItem'; //删除体检项
var getUserUrl = platIp + '/br-order-controller/orgExamItem/getUserByItemId'; //根据体检项查询医生信息
var org_exam_item_user_save = platIp + '/br-order-controller/orgExamItemUser/saveOrgExamItemUser'; //医生绑定检查项id
var org_exam_item_user_view = platIp + '/br-order-controller/orgExamItemUser/getOrgExamItemUser' //获取医生绑定检查项id
var org_exam_item_user_del = platIp + '/br-order-controller/orgExamItemUser/deleteOrgExamItemUser' //获取医生绑定检查项id

var getAllOrgExamItemTypeUrl = platIp + '/br-order-controller/orgExamItemType/getAllOrgExamItemType'; //获取所有体检项目类型
var getOrgExamFeeItemBySIdUrl = platIp + '/br-order-controller/OrgExamFeeItem/getOrgExamFeeItemBySId'; //根据套餐id获得该套餐的收费项信息
var getOrgExamItemByFeeItemUrl = platIp + '/br-order-controller/orgExamFeeItemDetail/getOrgExamFeeItemDetailByPage'; //根据收费项id获得该收费项下的检查项信息
var getAllOrgExamItemByFeeItemUrl = platIp + '/br-order-controller/orgExamItem/getAllOrgExamItemByFeeItem'; //获取所有体检项并根据收费项id所属体检项打钩
var getOrgExamFeeItemBySuitIdUrl = platIp + '/br-order-controller/orgExamSuite/getOrgExamFeeItemBySuitId'; //获取所有收费项并根据套餐id所属收费项打钩

var dict_hid_view = platIp + '/br-order-controller/highIncidenceDisease/getHighIncidenceDiseaseList' //查看高发疾病表
var dict_hid_view_all = platIp + '/br-order-controller/highIncidenceDisease/getHighIncidenceDiseases' //查看高发疾病不分页
var dict_suite_type_view = platIp + '/br-order-controller/examSuiteType/getExamSuiteTypeList' //查看套餐类型字典表	
var dict_suite_type_view_all = platIp + '/br-order-controller/examSuiteType/getExamSuiteTypes' //查看套餐类型字典表	不分页

var getOrgUserByFidUrl = platIp + '/br-order-controller/organizationUser/getOrgUserByFid'; //根据id获取机构员工信息列表  
var getOrgUserByIdUrl = platIp + '/br-order-controller/organizationUser/getOrgUserById'; //根据id获取机构员工信息对象  回显
var getOrgUserListUrl = platIp + '/br-order-controller/organizationUser/getOrgUserList'; //分页查询机构员工信息   查看页面所有内容
var getOrgDeptAll = platIp + '/br-order-controller/OrgDept/getOrgDeptAll'; //获取科室名称

/*
 * * 原AjaxAddr.js
 */

//科室页面departments.shtml
var addOrgDeptUrl = platIp + '/br-order-controller/OrgDept/addOrgDept'; //添加
var deleteOrgDeptUrl = platIp + '/br-order-controller/OrgDept/deleteOrgDept'; //删除
var updateOrgDeptUrl = platIp + '/br-order-controller/OrgDept/updateOrgDept'; //编辑
var getOrgDeptByBranidUrl = platIp + '/br-order-controller/OrgDept/getOrgDeptByBranid'; //根据门店ID获取科室下拉框
var organizationUser_getDeptNameByOrgId_url = platIp + '/br-order-controller/OrgDept/getOrgDeptByBranid'; //根据门店获取科室
var getOrgDeptByIdUrl = platIp + '/br-order-controller/OrgDept/getOrgDeptById'; //回显
var getOrgDeptByOrgidUrl = platIp + '/br-order-controller/OrgDept/getOrgDeptByOrgid';
var getOrgDeptListUrl = platIp + '/br-order-controller/OrgDept/getOrgDeptList'; //获取列表
var getOrgDeptAll = platIp + '/br-order-controller/OrgDept/getOrgDeptAll'; //获取科室下拉框
var getOrgUserAll = platIp + '/br-order-controller//organizationUser/getOrgUserAll'; //获取负责人下拉框
var getOrgBranchAllByOrgIdUrl = platIp + '/br-order-controller/orgBranch/getOrganizationBranchAllByOrgId'; //通过体检机构ID获取可用门店
var dept_getOrgUserByBranchId_url=platIp +'/br-order-controller/organizationUser/getOrgUserByBranchId'; //科室负责人

//机构员工页面organzitionUser.shtml
var getAvailableOrgsUrl = platIp + '/br-order-controller/organization/getAvailableOrgs'; //获取机构下拉框内容--机构员工页面
var getOrganizationBranchAllUrl = platIp + '/br-order-controller/orgBranch/getOrganizationBranchAll'; //获取门店下拉框内容--机构员工页面
var addInformation_getCountByUserName_url = platIp + '/br-order-controller/organization/getCountByUserName'; //重名校验

//首页内容展示页面
var getOrganizationListUrl = platIp + '/br-order-controller/firstData/getOrganizationList'; //首页展示查询机构名称
var getOrgbanchListByOrgUrl = platIp + '/br-order-controller/firstData/getOrgbanchListByOrg'; //根据机构id查询门店
var showFirstDataUrl = platIp + '/br-order-controller/firstData/showFirstData'; //分页展示数据
var getSuiteListByOrgUrl = platIp + '/br-order-controller/firstData/getSuiteListByOrg'; //根据机构id查询套餐
var deleteShowFirstDataUrl = platIp + '/br-order-controller/firstData/deleteShowFirstData'; //删除
var saveShowFirstDataurl = platIp + '/br-order-controller/firstData/saveShowFirstData'; //编辑保存图片

//首页 图片展示
var pictureShow_getImgById_url = platIp + '/br-order-controller/firstImgData/getImgById'; //获取所有图片
var pictureShow_getImgIndex_url = platIp + '/br-order-controller/firstImgData/getImgIndex'; //获取门店图片位置
var pictureShow_addFirstImgData_url = platIp + '/br-order-controller/firstImgData/addFirstImgData'; //新增图片接口
var pictureShow_showFirstImgDataList_url = platIp + '/br-order-controller/firstImgData/showFirstImgDataList'; //获取图片列表信息
var pictureShow_getFirstImgDataById_url = platIp + '/br-order-controller/firstImgData/getFirstImgDataById'; //查看图片详细信息
var pictureShow_deleteFirstImgData_url = platIp + '/br-order-controller/firstImgData/deleteFirstImgData'; //删除图片信息
var pictureShow_updateFirstImgData_url = platIp + '/br-order-controller/firstImgData/updateFirstImgData'; //保存修改图片信息

//阀值设置
var liminal_value_branch = platIp + '/br-order-controller/liminalValue/getOrganizationBranchLimitPeople'; //门店阀值列表
var liminal_value_branch_setting = platIp + '/br-order-controller/liminalValue/updateOrgBranchLimitPeople'; //门店阀值修改
var liminal_value_suite = platIp + '/br-order-controller/liminalValue/getOrgExamSuiteLimitPeople'; //套餐阀值列表
var liminal_value_suite_setting = platIp + '/br-order-controller/liminalValue/updateOrgExamSuiteLimitPeople' //套餐阀值修改
	//科室
var departmentType_getOrgDeptByBranid_url = platIp + '/br-order-controller/OrgDept/getOrgDeptByBranid'; //上级科室
var departmentType_selectDeptTypeList_url = platIp + '/br-order-controller/dictDeptTypeManage/selectDeptTypeList'; //科室类型
//订单
var getCustomerOrderByPageUrl = platIp + '/br-order-controller/customerOrder/getCustomerOrderByPage'; //分页展示列表
var updateStartExamStatusUrl = platIp + '/br-order-controller/customerOrder/updateStartExamStatus'; //开始体检
var updateEndExamStatusUrl = platIp + '/br-order-controller/customerOrder/updateEndExamStatus'; //体检完成
var getCustomerOrderUrl = platIp + '/br-order-controller/customerOrder/getCustomerOrder'; //查看列表
var getCustomerOrderListUrl = platIp + '/br-order-controller/customerOrder/getCustomerOrderStatusList'; //订单状态
var getSuiteListByOrgIdUrl = platIp + '/br-order-controller/orgExamSuite/getSuiteListByOrgId'; //根据机构查询套餐
var orderListInfo_export_url = platIp + '/br-order-controller/customerOrder/export'; //订单导出

//消费记录
var recordsOfConsumption_getCustomerOrderPayInfoByPage_url = platIp + '/br-order-controller/payInfo/getPayInfoByPage'; //消费记录列表
var recordsOfConsumption_getCustomerOrderPayInfo_url = platIp + '/br-order-controller/payInfo/getPayInfo'; //查看消费记录
var recordsOfConsumption_export_url = platIp + '/br-order-controller/payInfo/export'; //支付导出

var getOrgUserByDeptUrl = platIp + '/br-order-controller/organizationUser/getOrgUserByDept'; //根据科室获取医生信息
//系统设置
var getSystemUrl = platIp + '/br-order-controller/orgSystem/getSystem'; //查看系统设置信息
var editRedisSystemUrl = platIp + '/br-order-controller/orgSystem/editRedisSystem'; //编辑缓存信息
var editSearchSystemUrl = platIp + '/br-order-controller/orgSystem/editSearchSystem'; //编辑搜索引擎信息
//个人信息
var personalInforUrl = platIp + '/br-order-controller/userManage/personalInfor'; //个人信息展示