//回到顶部
(function($backTop, posTop){

	$(window).scroll(function(e){
		if($(window).scrollTop() > posTop) {
			$backTop.fadeIn('fast');
		} else {
			$backTop.fadeOut('fast');
		}
	});

})($('#fixed-services .action-scroll-to-top'), $('#bd').offset().top);


$('#fixed-services .direct-top').click(function(e){
	e.preventDefault();
	if ($(document.body).scrollTop()) {
		$(document.body).animate({
			scrollTop: 0
		}, 400);
	} else {
		$(document.documentElement).animate({
			scrollTop: 0
		}, 400);
	}		
});


var floatService = function(){
	var $floatService, $topEl, $bottomEl;
	var minFixedTop = 5, minFixedBottom = 5;
	var updateDelayHandle;
	var isIE6;
	
	function minBottom() {
		var b = $(window).outerHeight() - $bottomEl.offset().top - $bottomEl.outerHeight() + $(window).scrollTop() + minFixedBottom;
		return Math.max(minFixedBottom, b);
	}
	function maxBottom() {
		var b = $(window).outerHeight() - $topEl.offset().top + $(window).scrollTop() - $floatService.outerHeight() - minFixedTop;
		var maxFixedBottom = $(window).outerHeight() - $floatService.outerHeight() - minFixedTop;
		return Math.min(maxFixedBottom, b);
	}
	function custBottom() {
		return $(window).outerHeight(true)/2 - 150;
	}
	
	function update() {
		var _bottom = custBottom(), _min = minBottom(), _max = maxBottom();
		//console.log('cust', _bottom, 'max', _max, 'min', _min);
		var ex = false;
		(ex = _bottom > _max) && (_bottom = _max);
		(ex = _bottom < _min) && (_bottom = _min);
		//console.log('final', _bottom);
		
		if (isIE6 || ex) {
			_bottom = $(document.body).outerHeight() - $(window).outerHeight() - $(window).scrollTop() + _bottom
		}
	
		if (isIE6) {
			$floatService.animate({
				'bottom': _bottom
			});	
		} else {
			ex ? $floatService.css({'position':'absolute'}) : $floatService.css({'position':'fixed'});
			$floatService.css({
				'bottom': _bottom
			});
		}				
		
	}
	return {
		init: function(el, topEl, bottomEl){
			$floatService = $(el);
			$topEl = $(topEl);
			$bottomEl = $(bottomEl);
			isIE6 = !!window.ActiveXObject && !window.XMLHttpRequest;
		},
		updatePosition: function() {
			if (isIE6) {
				if (!!updateDelayHandle) {
					clearTimeout(updateDelayHandle);
					updateDelayHandle = null;
				}
				updateDelayHandle = setTimeout(function(){
					update();
				}, 200);
			} else {
				update();
			}
		}
	};
}();
floatService.init($('#fixed-services'), $('#bd'), $('#bd'));

floatService.updatePosition();

$(window).resize(refreshPositionHandle);
$([window, document.body]).scroll(refreshPositionHandle);

function refreshPositionHandle() {
	floatService.updatePosition();
}

$('#fixed-services').css({'visibility':'visible'});