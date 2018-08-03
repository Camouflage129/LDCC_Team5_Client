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
