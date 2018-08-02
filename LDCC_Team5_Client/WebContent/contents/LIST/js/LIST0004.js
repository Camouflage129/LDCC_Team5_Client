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

function closeLIST0004() {
	LEMP.Storage.remove({ "_sKey" : "product" });
	LEMP.Window.close({
	    "_oMessage" : {
	        "param" : ""
	    },
	    "_sType" : "popup",
	    "_sCallback" : ""
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