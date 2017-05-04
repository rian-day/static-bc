$("#content #item-box #box-right #text #button").mouseover(function(event) {
	/* Act on the event */
	$(this).css('width', '100px');
	$(this).find('#line-right').css({
		'border-width': '1px',
		'height': '50px'
	});
	$(this).find('#line-top').css({
		'border-width': '1px',
		'width': '100px'
	});
	$(this).find('#line-left').css({
		'border-width': '1px',
		'height': '50px'
	});
	$(this).find('#line-bottom').css({
		'border-width': '1px',
		'width': '100px'
	});
});
$("#content #item-box #box-right #text #button").mouseout(function(event) {
	/* Act on the event */
	$(this).css('width', '70px');
	$(this).find('#line-right').css({
		'border-width': '0px',
		'height': '0px'
	});
	$(this).find('#line-top').css({
		'border-width': '1px',
		'width': '50px'
	});
	$(this).find('#line-left').css({
		'border-width': '0px',
		'height': '0px'
	});
	$(this).find('#line-bottom').css({
		'border-width': '0px',
		'width': '0px'
	});
});