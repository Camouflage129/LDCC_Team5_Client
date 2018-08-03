var page = {
	init : function(args) {
		
		//<![CDATA[
	    // 사용할 앱의 JavaScript 키를 설정해 주세요.
	    Kakao.init('b7dc1ebcfea8f68fff20eeb74d7fba21');
	    navi();
	    // 카카오 로그인 버튼을 생성합니다.
	   
	  //]]>
		
	    
	    
	    
	}

}

function navi(){
    Kakao.Navi.start({
        name: "1 목적지",
        x: 126.9453253069999,
        y: 37.55596209855752,
        coordType: 'wgs84'
    });
}