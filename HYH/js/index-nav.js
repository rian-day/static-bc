$(document).ready(function() {
	// $("#header .container-fluid .row #nav-second a").click(function(event) {
	// 	if($("#header .container-fluid .row #nav-second a").html().toString()=='<img src="img/index/heart-red.png">'){
	// 		$("#header .container-fluid .row #nav-second a").html('<img src="img/index/heart-filled-red.png">');
	// 	}else{
	// 		$("#header .container-fluid .row #nav-second a").html('<img src="img/index/heart-red.png">');
	// 	}
	// });
	$("#header .container-fluid .row #nav-second a").click(function(event) {
		// if($("#header .container-fluid .row #nav-second a span").attr('color');=="red"){
		// 	$("#header .container-fluid .row #nav-second a span").css('color', 'black');
		// }
		alert($("#header .container-fluid .row #nav-second a span").attr('color'));
		if($("#header .container-fluid .row #nav-second a span").color!="red"){
			$("#header .container-fluid .row #nav-second a span").css('color', 'red');
		}
	});
	$(window).scroll(function(event) {
		var distance =$(window).scrollTop();
		if (distance>=50){
			$("#header").css({
				"position": 'fixed',
				"top": '0px',
				"z-index":'99'
			});
			$("#header .container-fluid .row div").css({
				"height": '75px',
				"padding": '10px'
			});
			$("#body").css('margin-top', '120px');
			$("#header .container-fluid .row h1").css({
				"padding-left":'60px',
				'padding-top':'30px'
			});
			$("#h1-box").css('padding', '0px');
			$("#header .container-fluid .row #box-right").css({
				property1: 'value1',
				property2: 'value2'
			});
		}
		if (distance<50){
			$("#header").css({
				"position": 'relative',
				"top": '0px'
			});
			$("#header .container-fluid .row div").css({
				"height": '150px',
				"padding": '60px'
			});

			$("#header .container-fluid .row h1").css({
				"padding-left":'0px',
				"padding-top":"0px"
			});

			$("#body").css('margin-top', '0px');
		}
		
	});
});