var page = {
	init : function(args) {
		page.initLayout(args);
	},
	initLayout : function(args) {
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth()+1;
		var yyyy = today.getFullYear();
		var login = LEMP.Storage.get({
		    "_sKey" : "login"
		});
		var id = login.id;
		if(dd<10) {
		    dd='0'+dd
		} 
		if(mm<10) {
		    mm='0'+mm
		} 
		today = yyyy+'-'+mm+'-'+dd;
		$.ajax({
			type : 'GET',
			url : 'http://52.79.44.163:8080/LDCC_Team5_Server/getProductList/'+id+'/'+today,
		    success : function(result)  {
		    	if(result != "") {
			    	var tag = '';
			    	tag += '<table class="w3-table-all w3-margin-top w3-small" id="desList" style="word-wrap : break-word; margin:0 20 0 0;">';
			    	tag += '<tr>';
			    	tag += '<th style="width:15%;"  class="w3-center">순서</th>';
			    	tag += '<th style="width:65%;" class="w3-center">주소</th>';
			    	tag += '<th style="width:20%;"  class="w3-center">수취인</th>';
			    	tag += '</tr>';
			    	$.each(result, function(key, value) {
			    		tag += '<tr onclick="desView('+value.num+');">';
			    		tag += '<td class="w3-center">'+value.num+'</td>';
			    		tag += '<td>'+value.address+'</td>';
			    		tag += '<td class="w3-center">'+value.recipient+'</td>';
			    		tag += '</tr>';
		    		});
			    	tag += '</table><br>';
			    	$("#list").append(tag);
		    	}
		    	else {
		    		var tag = '';
	    		tag += '<table class="w3-table-all w3-margin-top w3-small" id="desList" style="word-wrap : break-word; margin:0;">';
	    		tag += '<tr>';
	    		tag += '<th style="width:20%;"  class="w3-center">순서</th>';
	    		tag += '<th style="width:60%;" class="w3-center">주소</th>';
	    		tag += '<th style="width:20%;"  class="w3-center">수취인</th>';
	    		tag += '</tr>';
	    	
	    			tag += '<tr>';
	    			tag += '<td colspan="3" class="w3-center">일치하는 정보가 없습니다.</td>';
	    			tag += '</tr>';
	    			tag += '</table>';
	    			$("#list").append(tag);
	    		
	    		
		    }},
		    error : function(){  
		    	var tag = '';
	    		tag += '<table class="w3-table-all w3-margin-top w3-small" id="desList" style="word-wrap : break-word; margin:0;">';
	    		tag += '<tr>';
	    		tag += '<th style="width:20%;"  class="w3-center">순서</th>';
	    		tag += '<th style="width:60%;" class="w3-center">주소</th>';
	    		tag += '<th style="width:20%;"  class="w3-center">수취인</th>';
	    		tag += '</tr>';
	    	
	    			tag += '<tr>';
	    			tag += '<td colspan="3" class="w3-center">일치하는 정보가 없습니다.</td>';
	    			tag += '</tr>';
	    			tag += '</table>';
	    		
	    		$("#list").append(tag);
		    }
		});
	}
}

function desView(i) {
	$.ajax({
		type : "GET",
		url : "52.79.44.163:8080/LDCC_Team5_Server/getProductInfo2/"+i,
		success : function(result) {
			LEMP.Window.open({
				"_sPagePath" : "LIST/html/LIST0002.html",
				"_sType" : "popup",
				"_sWidth" : "90%",
				"_sHeight" : "80%",
				"_oMessage" : {
					"param" : result
				}
			});
		}
	})
	
	/*alert("test");
	$("#id01").load("LIST0002.html");
	document.getElementById('id01').style.display = 'block';*/
}

function search() {
	var input,
		filter,
		table,
		tr,
		td,
		i;
	input = document.getElementById("desInput");
	filter = input.value.toUpperCase();
	table = document.getElementById("desList");
	tr = table.getElementsByTagName("tr");
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[1];
		if (td) {
			if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}