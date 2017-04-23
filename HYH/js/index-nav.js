$(document).ready(function() {
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