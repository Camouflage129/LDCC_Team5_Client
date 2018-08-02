var page = {
	init : function(args) {
		page.initInterface();
		page.initLayout();
	},

	initInterface : function(data) {
		
	},

	initLayout : function() {
		var login = LEMP.Storage.get({
		    "_sKey" : "login"
		});
		$("#name").append('<b>'+login.name+'</b>');
		$("#date").append(login.date);
		$("#region").append(login.region);
		
		$.ajax({
			type : 'GET',
			url : 'http://52.79.44.163:8080/LDCC_Team5_Server/userStatus/'+login.id+'/'+today,
		    success : function(result)  {
		    	var i = 0;
		    	var list = [];
		    	$.each(result, function(key, value) {
		    		list[i++] = value;
		    	});
		    	$("#remainBox").append(list[0]);
		    	$("#totalBox").append(list[1]);
		    	$("#percent").append((list[0]/list[1])*100);
		    	$("#percent").css("style","width:"+(list[0]/list[1])*100+"%");
		    }
		});
	}
}
