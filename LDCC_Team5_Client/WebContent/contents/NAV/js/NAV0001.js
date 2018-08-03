var page = {
	init : function(args) {
		
	/*	page.initTmap();*/
		page.drawTmap();
		
	},
	
	/*initTmap : function(){
		var map = new Tmap.Map({
			div:'map_div',
			width : "934px",
			height : "452px",
		});
		map.setCenter(new Tmap.LonLat("126.986072", "37.570028").transform("EPSG:4326", "EPSG:3857"), 15);
	},*/
	
	drawTmap : function(){
		
		map = new Tmap.Map({
			div : 'map_div', // map을 표시해줄 div
			width : "100%",// map의 width 설정
			height : "500px",// map의 height 설정
		});
		map.setCenter(new Tmap.LonLat("126.93751471394472", "37.55420997079275").transform("EPSG:4326", "EPSG:3857"), 15);//설정한 좌표를 "EPSG:3857"로 좌표변환한 좌표값으로 중심점으로 설정합니다.

			// 시작, 도착 심볼찍기
			// 시작
		  var start_x = "126.876418";
		  var start_y = "37.483822";


		  var end_x = "126.876418"
		  // var end_x = "127.102484";
		  // var end_y = "37.512906";
		  var end_y = "37.483822";

		  var point1_x = "126.9453253069999";
		  var point1_y = "37.55596209855752";

		  var point2_x = "126.9488014494888";
		  var point2_y = "37.55568992607372";

		  var point3_x = "126.96279185168888";
		  var point3_y = "37.55800336050195";

		  var point4_x = "126.9687999998777";
		  var point4_y = "37.55242377872695";

		  var point5_x = "126.97326319568134";
		  var point5_y = "37.55851366725071";

		  var point6_x = "126.9815887724651";
		  var point6_y = "37.55960230996702";

		  var point7_x = "126.98794024340755";
		  var point7_y = "37.56232384717036";


			var markerStartLayer = new Tmap.Layer.Markers("start");
			map.addLayer(markerStartLayer);

			var size = new Tmap.Size(24, 38);
			var offset = new Tmap.Pixel(-(size.w / 2), -size.h);
			var icon = new Tmap.IconHtml("<img src='http://tmapapis.sktelecom.com/upload/tmap/marker/pin_r_m_s.png' />", size, offset);
			var marker_s = new Tmap.Marker(new Tmap.LonLat(start_x, start_y).transform("EPSG:4326", "EPSG:3857"), icon);
			markerStartLayer.addMarker(marker_s);

			// 도착
			var markerEndLayer = new Tmap.Layer.Markers("end");
			map.addLayer(markerEndLayer);

			var size = new Tmap.Size(24, 38);
			var offset = new Tmap.Pixel(-(size.w / 2), -size.h);
			var icon = new Tmap.IconHtml("<img src='http://tmapapis.sktelecom.com/upload/tmap/marker/pin_r_m_e.png' />", size, offset);
			var marker_e = new Tmap.Marker(new Tmap.LonLat(end_x, end_y).transform("EPSG:4326", "EPSG:3857"), icon);
			markerEndLayer.addMarker(marker_e);

			//경유지 심볼 찍기
			var markerWaypointLayer = new Tmap.Layer.Markers("waypoint");
			map.addLayer(markerWaypointLayer);

			var size = new Tmap.Size(24, 38);
			var offset = new Tmap.Pixel(-(size.w / 2), -size.h);
			var icon = new Tmap.IconHtml("<img src='http://tmapapis.sktelecom.com/upload/tmap/marker/pin_b_m_p.png' />", size, offset);
			var marker = new Tmap.Marker(new Tmap.LonLat(point1_x,point1_y).transform("EPSG:4326", "EPSG:3857"), icon);
			markerWaypointLayer.addMarker(marker);

			var icon = new Tmap.IconHtml("<img src='http://tmapapis.sktelecom.com/upload/tmap/marker/pin_b_m_p.png' />", size, offset);
			var marker = new Tmap.Marker(new Tmap.LonLat(point2_x,point2_y).transform("EPSG:4326", "EPSG:3857"), icon);
			markerWaypointLayer.addMarker(marker);

			var icon = new Tmap.IconHtml("<img src='http://tmapapis.sktelecom.com/upload/tmap/marker/pin_b_m_p.png' />", size, offset);
			var marker = new Tmap.Marker(new Tmap.LonLat(point3_x,point3_y).transform("EPSG:4326", "EPSG:3857"), icon);
			markerWaypointLayer.addMarker(marker);


			var icon = new Tmap.IconHtml("<img src='http://tmapapis.sktelecom.com/upload/tmap/marker/pin_b_m_p.png' />", size, offset);
			var marker = new Tmap.Marker(new Tmap.LonLat(point4_x,point4_y).transform("EPSG:4326", "EPSG:3857"), icon);
			markerWaypointLayer.addMarker(marker);


			var icon = new Tmap.IconHtml("<img src='http://tmapapis.sktelecom.com/upload/tmap/marker/pin_b_m_p.png' />", size, offset);
			var marker = new Tmap.Marker(new Tmap.LonLat(point5_x,point5_y).transform("EPSG:4326", "EPSG:3857"), icon);
			markerWaypointLayer.addMarker(marker);

			var icon = new Tmap.IconHtml("<img src='http://tmapapis.sktelecom.com/upload/tmap/marker/pin_b_m_p.png' />", size, offset);
			var marker = new Tmap.Marker(new Tmap.LonLat(point6_x,point6_y).transform("EPSG:4326", "EPSG:3857"), icon);
			markerWaypointLayer.addMarker(marker);

			var icon = new Tmap.IconHtml("<img src='http://tmapapis.sktelecom.com/upload/tmap/marker/pin_b_m_p.png' />", size, offset);
			var marker = new Tmap.Marker(new Tmap.LonLat(point7_x,point7_y).transform("EPSG:4326", "EPSG:3857"), icon);
			markerWaypointLayer.addMarker(marker);

		var prtcl;
		var headers = {};
		headers["appKey"]="c7655742-5c4c-453a-b19b-9769964a132e";//실행을 위한 키 입니다. 발급받으신 AppKey를 입력하세요.
		$.ajax({
			type:"POST",
			headers : headers,
			url:"https://api2.sktelecom.com/tmap/routes/routeOptimization10?version=1&format=xml",//경유지 최적화 api요청 url입니다.
			async:false,
			contentType: "application/json",
			data: JSON.stringify({
					  "reqCoordType": "WGS84GEO",//요청 좌표 타입입니다.
					  "resCoordType": "EPSG3857",
					  "startName": "출발",//출발지 명칭입니다.
					  "startX": start_x,//출발지 경도입니다.
					  "startY": start_y,//출발지 위도입니다.
					  "startTime": "201711121314",//출발 시작 시간입니다.
					  "endName": "도착",//도착치 명칭입니다.
					  "endX": end_x,//도착지 경도입니다.
					  "endY": end_y,//도착지 위도입니다.
					  "viaPoints" :
								[
								 {
									 "viaPointId" : "test01",//경유지 id입니다.
									 "viaPointName" : "1번목적지",//경유지 명칭입니다.
									 "viaX" : point1_x ,//경유지 경도입니다.
									 "viaY" : point1_y //경유지 위도입니다.
								 },
								 {
									 "viaPointId" : "test02",
									 "viaPointName" : "2번목적지",
									 "viaX" : point2_x ,
									 "viaY" : point2_y
								 },
								 {
									 "viaPointId" : "test03",
									 "viaPointName" : "3번목적지",
									 "viaX" : point3_x ,
									 "viaY" : point3_y
								 },
								 {
									 "viaPointId" : "test04",
									 "viaPointName" : "4번목적지",
									 "viaX" : point4_x ,
									 "viaY" : point4_y
								 },
								 {
									 "viaPointId" : "test05",
									 "viaPointName" : "5번목적지",
									 "viaX" : point5_x ,
									 "viaY" : point5_y
								 },
								 {
									 "viaPointId" : "test06",
									 "viaPointName" : "6번목적지",
									 "viaX" : point6_x ,
									 "viaY" : point6_y
								 },
								 {
									 "viaPointId" : "test07",
									 "viaPointName" : "7번목적지",
									 "viaX" : point7_x ,
									 "viaY" : point7_y
								 }
								]
			}),
			//데이터 로드가 성공적으로 완료되었을 때 발생하는 함수입니다.
			success:function(response){
				prtcl = response;

				// 결과 출력
				var innerHtml ="";
				var prtclString = new XMLSerializer().serializeToString(prtcl);//xml to String
			    xmlDoc = $.parseXML( prtclString ),
			    $xml = $( xmlDoc ),
		    	$intRate = $xml.find("Document");

		    	var tDistance = "<span class='w3-tag w3-white w3-border'>총 거리 </span> "+($intRate[0].getElementsByTagName("tmap:totalDistance")[0].childNodes[0].nodeValue/1000).toFixed(1)+"km ";
		    	var tTime = " <span class='w3-tag w3-white w3-border'>총 시간 </span> "+($intRate[0].getElementsByTagName("tmap:totalTime")[0].childNodes[0].nodeValue/60).toFixed(0)+"분 ";
		    	var tFare = " <span class='w3-tag w3-white w3-border'>총 요금 </span> "+$intRate[0].getElementsByTagName("tmap:totalFare")[0].childNodes[0].nodeValue+"원";

		    
				prtcl=new Tmap.Format.KML({extractStyles:true, extractAttributes:true}).read(prtcl);//데이터(prtcl)를 읽고, 벡터 도형(feature) 목록을 리턴합니다.
				var routeLayer = new Tmap.Layer.Vector("route");//레이어를 생성합니다.
		    // console.log(prtcl[0].getElementsByClassName("data"));
		    var allStr = "";
		    for (var i = 0; i < prtcl.length; i++){
		    console.log(prtcl[i].data['viaPointName']);
		    allStr = allStr + prtcl[i].data['viaPointName'] + '<br>';
		  }
		    // $("#result").text(prtcl[i].data['viaPointName']);
		    $("#result_text").append(tDistance+tTime+tFare+'<br>'+allStr);
				//벡터 도형(Feature)이 추가되기 직전에 트리거됩니다.
				routeLayer.events.register("beforefeatureadded", routeLayer, onBeforeFeatureAdded);
				        function onBeforeFeatureAdded(e) {
					        	var style = {};//스타일을 저장하기위한 변수입니다.
					        	switch (e.feature.attributes.styleUrl) {
					        	case "#pointStyle":
						        	style.externalGraphic = "http://topopen.tmap.co.kr/imgs/point.png"; //렌더링 포인트에 사용될 외부 이미지 파일의 url입니다.
						        	style.graphicHeight = 16;//외부 이미지 파일의 크기 설정을 위한 픽셀 높이입니다.
						        	style.graphicOpacity = 1;//외부 이미지 파일의 투명도 (0-1)입니다.
						        	style.graphicWidth = 16;//외부 이미지 파일의 크기 설정을 위한 픽셀 폭입니다.
					        	break;
					        	default:
						        	style.strokeColor = "#ff0000";//stroke에 적용될 16진수 color입니다.
						        	style.strokeOpacity = "1";//stroke의 투명도(0~1)입니다.
						        	style.strokeWidth = "5";//stroke의 넓이(pixel 단위)
					        	};
				        	e.feature.style = style;//도형의 스타일을 적용합니다.
				        }

				routeLayer.addFeatures(prtcl); //레이어에 도형을 등록합니다.
				map.addLayer(routeLayer);//맵에 레이어 추가

				map.zoomToExtent(routeLayer.getDataExtent());//map의 zoom을 routeLayer의 영역에 맞게 변경합니다.
				
				$("#result").append(tDistance+tTime+tFare);
			
			
				
			
				
			},
			//요청 실패시 콘솔창에서 에러 내용을 확인할 수 있습니다.
			error:function(request,status,error){
				console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
			}
		});


		$("#result").append("<br><div class='w3-center w3-section' style='width:100%'>"+
				"<button class='w3-button w3-large w3-round w3-brown' onclick='navStart()' style='width:70%'>출발하기</button></div>");
		
		//결과띄우기
		$("#result").show();
	
	},

}

function navStart(){
	
	  Kakao.init('b7dc1ebcfea8f68fff20eeb74d7fba21');
	    navi();
	/*
	LEMP.Window.open({
		"_sPagePath" : "NAV/html/NAV0002.html",
		"_sType" : "popup",
		"_sWidth" : "100%",
		"_sHeight" : "80%",
		"_oMessage" : {
			
		}
	});
	*/
	
}

function navi(){
    Kakao.Navi.start({
        name: "1 목적지",
        x: 126.9453253069999,
        y: 37.55596209855752,
        coordType: 'wgs84'
    });
}