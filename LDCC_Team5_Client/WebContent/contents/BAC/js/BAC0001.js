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
		        alert(JSON.stringify(resOpenCodeReader));
		        $("#barcode_result").text(JSON.stringify(resOpenCodeReader));
		    }
		});
	}
}