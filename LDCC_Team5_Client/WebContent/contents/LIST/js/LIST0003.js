var page = {
	init : function(args) {
		page.initLayout(args.data);
	},
	initLayout : function(data) {
		var product = data.param;
		$("#address").append('<label>주   소</label>&nbsp;&nbsp;' + product.address);
		$("#recipient").append('<label>수취인</label>&nbsp;&nbsp;' + product.recipient);
		LEMP.Storage.set({
		    "_sKey" : "product",
		    "_vValue" : product
		});
	},
}

function LMessage() {
	var product = LEMP.Storage.get({
	    "_sKey" : "product"
	});
	$.ajax({
		type : "POST",
		url : "http://210.93.181.229:9090/v1/send/kakao-friend",
		headers : {
			"Content-Type" : "application/json",
			"Authorization": "Basic Y2xhc3M6c2VjcmV0MTIhQA==",
			"X-HTTP-Method-Override" : "POST"
		},
		data : JSON.stringify({
			"msg_id" : "01076781249",
			"dest_phone" : "010-7687-1249", //product.phone
			"send_phone" : "01045843552",
			"sender_key" : "d6b73318d4927aa80df1022e07fecf06c55b44bf",
			"msg_body" : "고객님의 택배가 안전하게 배송되었습니다 :)",
			"ad_flag" : "N"
		}),
		dataType : 'text',
		success : function(result) {
			$.ajax({
				type: "PUT",
				url: 'http://52.79.44.163:8080/LDCC_Team5_Server/deliveryComplete/'+product.code,
				success : function(data) {
					if(data == "success") {
						alert("고객님에게 배송완료 카카오톡이 전송되었습니다.");
						closeLIST0003();
					}
				}
			});
		}
	})
}

function closeLIST0003() {
	LEMP.Storage.remove({ "_sKey" : "product" });
	LEMP.Window.close({
	    "_oMessage" : {
	        "param" : ""
	    },
	    "_sType" : "popup",
	    "_sCallback" : "page.callback"
	});
}

function call() {
	var product = LEMP.Storage.get({
	    "_sKey" : "product"
	});
	LEMP.System.callTEL({
		"_sNumber" : product.phone,
		"_fCallback" : function(res) {
			alert(JSON.stringify(res));
		}
	});
}

function msgSelect() {
	document.getElementById('id02').style.display = 'block';
}

function message1() {
	var product = LEMP.Storage.get({
	    "_sKey" : "product"
	});
	LEMP.System.callSMS({
		"_aNumber" : [ product.phone ], 
		"_sMessage" : "곧 방문하겠습니다.",
		"_fCallback" : function(res) {
			alert(JSON.stringify(res));
		}
	});
}

function message2() {
	var product = LEMP.Storage.get({
	    "_sKey" : "product"
	});
	LEMP.System.callSMS({
		"_aNumber" : [ product.phone ],
		"_sMessage" : "문 앞에 두고 갑니다.",
		"_fCallback" : function(res) {
			alert(JSON.stringify(res));
		}
	});
}

function message3() {
	var product = LEMP.Storage.get({
	    "_sKey" : "product"
	});
	LEMP.System.callSMS({
		"_aNumber" : [ product.phone ],
		"_sMessage" : "경비실에 맡기고 갑니다.",
		"_fCallback" : function(res) {
			alert(JSON.stringify(res));
		}
	});
}

function message4() {
	var product = LEMP.Storage.get({
		"_sKey" : "product"
	});
	LEMP.System.callSMS({
		"_aNumber" : [ product.phone ],
		"_sMessage" : "",
		"_fCallback" : function(res) {
			alert(JSON.stringify(res));
		}
	});
}