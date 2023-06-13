function checkMobile(){
	var varUA = navigator.userAgent.toLowerCase();
	if ( varUA.indexOf('android') > -1) {
		return "android";
	} else if ( varUA.indexOf("iphone") > -1||varUA.indexOf("ipad") > -1||varUA.indexOf("ipod") > -1 ) {
		return "ios";
	} else {
		return "other";
	}
}

const btn = document.querySelector('.btn');

btn.addEventListener('click', function() {
	checkM(checkMobile());
});

function checkM(m){
	location.href = 'sms:' +'01056640975'+(m == 'ios' ? '&' : '?') + 'body='+ encodeURIComponent("군포역 트윈비스타 분양 정보 문의합니다.");
  console.log()
}