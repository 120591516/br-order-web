$(document).ready(function(){	
	org_info();
	$('#mainContent').empty();
	var thisURL = document.URL;
	if(thisURL.indexOf("?")!=-1){
	var getval = thisURL.split('?')[1];
	var showval = getval.split("=")[1];
	$('#store_orgName').val(showval);
	}
	areaSearch();    		    
})
function createTable(currPage, limit, total,dataBack) {
			var showNum = limit;  
	        var str='';
	        if (total - (currPage * limit) < 0) showNum = total - ((currPage - 1) * limit);
	        for (var i = 0; i < showNum; i++) {
	        	str+="<tr><td idOrgExamSuite='"+dataBack.data.list[i].examSuiteId+"'><a style='margin-right:5px' title='查看信息' href='addPackAge.shtml?param="+dataBack.data.list[i].examSuiteId+"'><i class='fa fa-eye'></i></a>" +
	        			"<a style='margin-right:5px' title='编辑信息' onclick='Judge("+dataBack.data.list[i].examSuiteId+")'><i class='fa fa-pencil'></i></a>" +
	        			"<a style='margin-right:5px' title='删除信息' href='#' onclick='del_packAge(this)'><i class='fa fa-trash-o'></i></a>" +
	        			"<a style='margin-right:5px' title='收费信息' href='packAgeFeeItemView.shtml?param="+dataBack.data.list[i].examSuiteId+"' ><i class='fa fa-jpy'></i></a></td>";
	        	str+="<td>" + dataBack.data.list[i].orgName + "</td>";
	        	str+="<td>" + dataBack.data.list[i].examSuiteName + "</td>";
	        	str+="<td>" + dataBack.data.list[i].examSuiteCode + "</td>";
	        	str+="<td>" + dataBack.data.list[i].examSuiteNameEng + "</td>";
	        	str+="<td>" + dataBack.data.list[i].examSuitePrice + "</td>";
	        	str+="<td>" + dataBack.data.list[i].examSuiteInputCode + "</td>";
	        	str+="<td>" + dataBack.data.list[i].orgExamSuiteSex +"</td>";   
	        	str+="<td>" + dataBack.data.list[i].typeNameList +"</td>"; 
	        	str+='</tr>';
	       }
	        $("#mainContent").append(str);
	        return false;
		}
