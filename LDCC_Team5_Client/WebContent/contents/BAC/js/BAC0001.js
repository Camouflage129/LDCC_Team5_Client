var page = {
	init : function(args) {
		page.initInterface(args.data);
		page.initLayout(args.data);
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
		    		    	LEMP.Window.open({
		    		    	    "_sPagePath" : "LIST/html/LIST0002.html",
		    		    	    "_sType" : "popup",
		    		    	    "_sWidth" : "70%",
		    		    	    "_sHeight" : "80%",
		    		    	    "_oMessage" : {
		    		    	        "param" : result
		    		    	    }
		    		    	});
		    				$("#barcode_result").text(JSON.stringify(result));
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