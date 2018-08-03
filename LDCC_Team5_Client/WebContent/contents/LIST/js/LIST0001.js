var page = {
	init : function(args) {
		page.initLayout(args);
	},
	callback : function() {
		LEMP.Window.replace({
			"_sPagePath" : "LIST/html/LIST0001.html",
			"_sName" : "replacePage",
			"_bHardwareAccel" : true,
			"_oMessage" : {
				"param" : ""
			}
		});
	},
	initLayout : function(args) {
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth() + 1;
		var yyyy = today.getFullYear();
		var login = LEMP.Storage.get({
			"_sKey" : "login"
		});
		var id = login.id;
		if (dd < 10) {
			dd = '0' + dd
		}
		if (mm < 10) {
			mm = '0' + mm
		}
		today = yyyy + '-' + mm + '-' + dd;
		$.ajax({
			type : 'GET',
			url : 'http://52.79.44.163:8080/LDCC_Team5_Server/getProductList/' + id + '/' + today,
			success : function(result) {
				if (result != "") {
					var tag = '';
					tag += '<table class="w3-table-all w3-margin-top w3-small" id="desList" style="word-wrap : break-word; margin:0;">';
					tag += '<tr>';
					tag += '<th style="width:20%;"  class="w3-center">순서</th>';
					tag += '<th style="width:60%;" class="w3-center">주소</th>';
					tag += '<th style="width:20%;"  class="w3-center">수취인</th>';
					tag += '</tr>';
					$.each(result, function(key, value) {
						console.log(value.delivery_complete);
						if(value.delivery_complete == 'n') {
							tag += '<tr onclick="desView(' + value.num + ');">';
							tag += '<td>' + value.num + '</td>';
							tag += '<td>' + value.address + '</td>';
							tag += '<td>' + value.recipient + '</td>';
							tag += '</tr>';
						}
						else {
							tag += '<tr onclick="desView2(' + value.num + ');" class="w3-light-blue">';
							tag += '<td>' + value.num + '</td>';
							tag += '<td>' + value.address + '</td>';
							tag += '<td>' + value.recipient + '</td>';
							tag += '</tr>';
						}
					});
					tag += '</table>';
					$("#list").append(tag);
				} else {
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
			},
			error : function() {
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
		url : "http://52.79.44.163:8080/LDCC_Team5_Server/getProductInfo2/" + i,
		success : function(result) {
			$.each(result, function(key, value) {
				LEMP.Window.open({
					"_sPagePath" : "LIST/html/LIST0003.html",
					"_sType" : "popup",
					"_sWidth" : "90%",
					"_sHeight" : "80%",
					"_oMessage" : {
						"param" : value
					}
				});
			});
		}
	})
}

function desView2(i) {
	$.ajax({
		type : "GET",
		url : "http://52.79.44.163:8080/LDCC_Team5_Server/getProductInfo2/" + i,
		success : function(result) {
			$.each(result, function(key, value) {
				LEMP.Window.open({
					"_sPagePath" : "LIST/html/LIST0004.html",
					"_sType" : "popup",
					"_sWidth" : "90%",
					"_sHeight" : "80%",
					"_oMessage" : {
						"param" : value
					}
				});
			});
		}
	})
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