function openTab(evt, tabName) {
	var i,
		x,
		tablinks;
	/*  x = document.getElementsByClassName("tab");
	  for (i = 0; i < x.length; i++) {
	      x[i].style.display = "none";
	  }*/
	tablinks = document.getElementsByClassName("tablink");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" w3-red", " w3-white ");
	}
	/*  document.getElementById(tabName).style.display = "block";*/
	evt.currentTarget.className += " w3-red";

	if (tabName == "list") {
		LEMP.Window.replace({
			"_sPagePath" : "LIST/html/LIST0001.html",
			"_sName" : "replacePage",
			"_bHardwareAccel" : true,
			"_oMessage" : {
				"param" : ""
			}
		});
	}
	if (tabName == "info") {
		LEMP.Window.replace({
			"_sPagePath" : "INF/html/INF0001.html",
			"_sName" : "replacePage",
			"_bHardwareAccel" : true,
			"_oMessage" : {
				"param" : ""
			}
		});
	}
	if (tabName == "navigation") {
		LEMP.Window.replace({
			"_sPagePath" : "NAV/html/NAV0001.html",
			"_sName" : "replacePage",
			"_bHardwareAccel" : true,
			"_oMessage" : {
				"param" : ""
			}
		});
	}
	if (tabName == "barcode") {
		LEMP.Window.replace({
			"_sPagePath" : "BAC/html/BAC0001.html",
			"_sName" : "replacePage",
			"_bHardwareAccel" : true,
			"_oMessage" : {
				"param" : ""
			}
		});
	}
}