var page = {
	init : function(args) {
		page.initLayout(args.data);
	},
	initLayout : function(data) {
		var product = data.param;
		$("#address").append('<label>주   소</label>&nbsp;&nbsp;' + product.address);
		$("#recipient").append('<label>수취인</label>&nbsp;&nbsp;' + product.recipient);
		$("#phone").val(product.phone);
	},
}

function LMessage() {
	$.ajax({
		type : "POST",
		url : "http://210.93.181.229:9090/v1/send/kakao-friend",
		headers : {
			"Content-Type" : "application/json",
			"X-HTTP-Method-Override" : "POST"
		},
		data : JSON.stringify({
			"msg_id" : "01076781249", //$("#phone").val()
			"dest_phone" : "010-7687-1249", //$("#phone").val()
			"send_phone" : "01045843552",
			"sender_key" : "d6b73318d4927aa80df1022e07fecf06c55b44bf",
			"msg_body" : "고객님의 택배가 안전하게 배송되었습니다 :)",
			"ad_flag" : "N"
		}),
		dataType : 'text',
		success : function(result) {
			alert("고객님에게 배송완료 카카오톡이 전송되었습니다.");
		}
	})
}

function call() {
	LEMP.System.callTEL({
		"_sNumber" : "01076871249", //$("#phone").val()
		"_fCallback" : function(res) {
			alert(JSON.stringify(res));
		}
	});
}

function msgSelect() {
	document.getElementById('id02').style.display = 'block';
}

function message1() {
	LEMP.System.callSMS({
		"_aNumber" : [ "01076871249" ], //$("#phone").val()
		"_sMessage" : "곧 방문하겠습니다.",
		"_fCallback" : function(res) {
			alert(JSON.stringify(res));
		}
	});
}

function message2() {
	LEMP.System.callSMS({
		"_aNumber" : [ "01076871249" ],
		"_sMessage" : "문 앞에 두고 갑니다.",
		"_fCallback" : function(res) {
			alert(JSON.stringify(res));
		}
	});
}

function message3() {
	LEMP.System.callSMS({
		"_aNumber" : [ "01076871249" ],
		"_sMessage" : "경비실에 맡기고 갑니다.",
		"_fCallback" : function(res) {
			alert(JSON.stringify(res));
		}
	});
}