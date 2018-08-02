var page = {
	init : function(args) {
		page.initInterface(args.data);
		page.initLayout(args.data);
	},
	
	callback : function(data) {
		LEMP.Window.replace({
			"_sPagePath" : "LIST/html/LIST0001.html",
			"_sName" : "replacePage",
			"_bHardwareAccel" : true,
			"_oMessage" : {
				"param" : ""
			}
		});
	},
	
	initInterface : function(data) {
		
	},
	
	initLayout : function(data) {
		LEMP.Window.openCodeReader({
		    "_fCallback" : function(resOpenCodeReader)  {
		    	if(resOpenCodeReader.result) {
		    		var data = resOpenCodeReader.data;
		    		alert(data);
		    		$.ajax({
		    			type : 'GET',
		    			url : 'http://52.79.44.163:8080/LDCC_Team5_Server/getProductInfo/'+data,
		    		    success : function(result)  {
		    		    	$.each(result, function(key, value) {
		    		    		LEMP.Window.open({
		    		    			"_sPagePath" : "LIST/html/LIST0002.html",
		    		    			"_oMessage" : {
		    		    				"param" : value
		    		    			}
		    		    		});
		    		    		$("#barcode_result").text(JSON.stringify(result));
		    		    	});
		    		    },
					    error : function(){ 
					    	alert("일치하는 정보가 없습니다.");
					    }
		    		});
		    	}
		    	else {
		    		alert("인식이 제대로 되지 않았습니다.");
		    	}
		    }
		});
	}
}