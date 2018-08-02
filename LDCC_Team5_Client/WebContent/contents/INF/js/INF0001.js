var page = {
	init : function(args) {
		page.initInterface();
		page.initLayout();
	},

	initInterface : function(data) {
		$("#desBtn").click(function() {
			LEMP.Window.open({
				"_sPagePath" : "LIST/html/LIST0001.html"
			});
		})
	},

	initLayout : function() {
		var login = LEMP.Storage.get({
		    "_sKey" : "login"
		});
		$("#name").append('<b>'+login.name+'</b>');
		$("#date").append(login.date);
		$("#region").append(login.region);
		
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth()+1;
		var yyyy = today.getFullYear();
	
		if(dd<10) {
		    dd='0'+dd
		} 
		if(mm<10) {
		    mm='0'+mm
		} 
		today = yyyy+'-'+mm+'-'+dd;
		
		$.ajax({
			type : 'GET',
			url : 'http://52.79.44.163:8080/LDCC_Team5_Server/userStatus/'+login.id+'/'+today,
		    success : function(result)  {
		    	var i = 0;
		    	var list = [];
		    	var percent;
		    	$.each(result, function(key, value) {
		    		list[i++] = value;
		    	});
		    	$("#remainBox").append(list[0]);
		    	$("#totalBox").append(list[1]);
		    	if(list[1] == 0)
		    		percent = 100;
		    	else
		    		percent = (list[0]/list[1])*100;
		    	$("#percent").append(percent);
		    	$("#percent").css("style","width:"+percent+"%;");
		    }
		});
	}
}
