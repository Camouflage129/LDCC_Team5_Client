var page = {
	init : function(args) {
		page.initLayout(args.data);
	},
	initLayout : function(data) {
		var product = data.param;
		
		$("#address").append('<label>주   소</label>&nbsp;&nbsp;' + product.address);
		$("#recipient").append('<label>수취인</label>&nbsp;&nbsp;' + product.recipient);
		$("#thisNumber").append(product.num+'번째 물품');
		
		LEMP.Storage.set({
		    "_sKey" : "product",
		    "_vValue" : product
		});
	},
}
