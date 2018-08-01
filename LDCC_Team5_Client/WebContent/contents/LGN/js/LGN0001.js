function login() {
	var id = $("#idInput").val();
	var pw = CryptoJS.SHA256($("#pwInput").val()).toString()
	if(id == "")
		alert("아이디를 입력해주세요");
	else if(pw == "")
		alert("비밀번호를 입력해주세요")
	else {
		$.ajax({
			type : 'GET',
			url : 'http://52.79.44.163:8080/LDCC_Team5_Server/login/'+id+'/'+pw,
		    success : function(result)  {
		    	if(result != "") {
		    		$.each(result, function(key, value) {
		    			LEMP.Storage.set({
		    			    "_sKey" : "login",
		    			    "_vValue" : value
		    			});
		    			LEMP.Window.open({
		    				"_sPagePath" : "INF/html/INF0001.html",
		    				"_oMessage" : {
		    					"param" : ""
		    				}
		    			});
		    		});
		    	}
		    	else
		    		alert("아이디 or 비밀번호가 틀렸습니다.");
		    },
		    error : function(){ 
		    	alert("비밀번호가 일치하지 않거나 존재하지 않는 아이디 입니다.");
		    }
		});
	}
}

var page = {
	init : function(args) {
		page.initInterface();
	},
	
	initInterface : function() {
		$("#loginBtn").click(function() {
			login();
		});

		$("#idInput").keydown(function(event) {
			if (event.which == 13)
				$("#pwInput").focus();
		});

		$("#pwInput").keydown(function(event) {
			if (event.which == 13)
				login();
		});
	},
	
	callback : function(args) {
		console.log(args);
		$("#pwInput").val("");
	}
}
