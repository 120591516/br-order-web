$(document).ready(function(){
	$('#actor').children('tbody').empty();
	//areaSearch();
	mecSearch();
})
	
	function mecSearch(){
		//1.采集参数数据
		var param = initParam();
		//2.获取当前分页数据
		
		//3.请求后台
		var otype = "post";
		var osync = false;
		var reqResult = httpRequest(mecSearchOul, param, otype, osync);
		if(reqResult.result == 0) {
			//4.展示数据
			total_count = reqResult.data.total;
			createTable(page_curr, limit, total_count, reqResult);
			//5.初始化分页
			init_pager();
			return false;
		}
	}
	
	function initParam(){
		var orgShortName=$('#orgShortName').val().trim();
		var orgNature=$('#orgNature').val().trim();
		var orgLevelId=$('#orgLevelId').val().trim();
		var orgStatus=$('#orgStatus').val().trim();
		var areaId=$('#areaId').val();		
		$('#mainContent').empty();
		var param={
			"page":page_curr,
			"rows":count_curr		
		};		
		if(orgShortName){
			param.orgShortName=orgShortName;
		}
		if(orgNature!="please"){
			param.orgNature=orgNature;
		}
		if(orgLevelId!="please"){
			param.orgLevelId=orgLevelId;
		}
		if(orgStatus!="please"){
			param.orgStatus=orgStatus;
		}
		if(areaId){
			param.areaId=areaId;
		}
		return param;
	}
	
	function init_pager(){
		$('#callBackPager').extendPagination({
			totalCount: total_count,
			showCount: count_curr,
			limit: limit,
			callback: function(curr, limit, totalCount) {
//				alert("callBackPager_callback");
				page_curr = curr;
				total_count = totalCount;
				mecSearch();
			}
		});
	}
	
	function createTable(currPage, limit, total,dataBack) {
			    var showNum = limit;  
		        var str='';
		        if (total - (currPage * limit) < 0) showNum = total - ((currPage - 1) * limit);
		        for (var i = 0; i < showNum; i++) {
		        	var statuWord="";
		            switch(dataBack.data.list[i].orgStatus){
		            case 0:
		            	statuWord="正常"
		            	break;
		            case 1:
		            	statuWord="禁用"
		            	break;
		            case 2:
		            	statuWord="审核未通过"
		            	break;	
		            default:
		            	statuWord="待审核"
		            }
		        	var natureWord=(dataBack.data.list[i].orgNature===0)?"医院":"体检机构";
		        	var LevelNameWord=(dataBack.data.list[i].orgLevelName===null)?"":dataBack.data.list[i].orgLevelName;
		        	str += "<tr><td orgId='"+dataBack.data.list[i].orgId+"'>";
		    		str += "<a style='margin-right:5px' title='查看信息' href='checkOrgInform.shtml?orgId="+dataBack.data.list[i].orgId+"'><i class='fa fa-eye'></i></a>";
		    		str += "<a style='margin-right:5px' title='编辑信息' onclick='Judge("+dataBack.data.list[i].orgId+")'><i class='fa fa-pencil'></i></a> <a style='margin-right:5px' title='删除信息' href='#' onclick='del_hospital(this)'><i class='fa fa-trash-o'></i></a>";
		    		str += "<a title='审核信息' style='margin-right:5px' href='#myModal_check' data-toggle='modal' onclick='MecCheckShow(this)'><i class='fa fa-exchange'></i></a><a title='门店信息' style='margin-right:5px' href='#' org_status='"+dataBack.data.list[i].orgStatus+"'onclick='org_store(this)'><i class='fa fa-share-alt-square'></i></a>";
		    		str +="<a href='/plat/pages/examination/package/packAge.shtml?orgId="+dataBack.data.list[i].orgId+"' title='查看套餐信息' class='padding_4px'><i class='fa fa-link'></i></a>";
		    		str += "</td>";	    		
		        	str+="<td>" + dataBack.data.list[i].orgShortName + "</td>";
		        	str+="<td>" + dataBack.data.list[i].orgTotalName + "</td>";
		        	str+="<td>" + natureWord + "</td>";
		        	str+="<td>" + LevelNameWord + "</td>";
		        	str+="<td>" + dataBack.data.list[i].orgAddress + "</td>";
		        	str+="<td>" +statuWord+"</td>";       	      	
		        	str+="<td></td>";
		        	str+='</tr>';
		       }
		        $("#mainContent").append(str);
		        return false;
			}
	
		function org_store(org_store){
			var org_status=$(org_store).attr('org_status');
			var  orgId=$(org_store).parent().attr('orgId');
			if(org_status==0){
				window.location.href='/plat/pages/examination/store/storeManagement.shtml?orgId='+orgId+'';
			}else{
				confirm('该机构状态未通过审核！');
			}
		}
