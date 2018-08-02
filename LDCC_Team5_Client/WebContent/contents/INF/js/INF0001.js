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
	}
}
