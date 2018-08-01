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
		    		tag += '<table class="w3-table-all w3-margin-top w3-small" id="desList" style="word-wrap : break-word; margin:0;">';
		    		tag += '<tr>';
		    		tag += '<th style="width:20%;"  class="w3-center">순서</th>';
		    		tag += '<th style="width:60%;" class="w3-center">주소</th>';
		    		tag += '<th style="width:20%;"  class="w3-center">수취인</th>';
		    		tag += '</tr>';
		    		for(var i=1; i<=args.length; i++) {
		    			tag += '<tr onclick="desView('+i+');">';
		    			tag += '<td>'+i+'</td>';
		    			tag += '<td>'+args.address+'</td>';
		    			tag += '<td>'+args.recipient+'</td>';
		    			tag += '</tr>';
		    			tag += '</table>';
		    		}
		    		$("#list").append(tag);
		    	}
		    	else
		    		alert("일치하는 정보가 없습니다.");
		    },
		    error : function(){ 
		    	alert("일치하는 정보가 없습니다.");
		    }
		});
	}
}

function desView(i) {
	$("#id01").load("LIST0002.html");
	document.getElementById('id01').style.display = 'block';
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