
(function($){

	function PositionFixedable() {
		return this._init.apply(this, arguments);
	}

	PositionFixedable.defaults = {
		'force': false
		, 'refix_Interval': 200
		, 'hidden_when_refix': true
		, 'top': 'auto'
		, 'bottom': 'auto'
		, 'left': 'auto'
		, 'right': 'auto'
	};
	PositionFixedable.prototype = function(){
		return {
			settings: null,
			_init: function(el, options){

				var $el = $(el);

				if ($el.data('position-fixed')) return;
				else $el.data('position-fixed', true);

				this.settings = $.extend({}, PositionFixedable.defaults, options);

				if (!this.settings.force && !(!!window.ActiveXObject && !window.XMLHttpRequest)) {
					//$el.css(options);
					return;
				}

				$el.appendTo(document.body);

				if (this.settings.top == 'auto' && this.settings.bottom == 'auto') {
					var top = $el.css('top');
					if (!top || this.top == '' || top == 'auto') {
						this.settings.bottom = $el.css('bottom');
					} else {
						this.settings.top = top;
					}
				}

				if (this.settings.left == 'auto' && this.settings.right == 'auto') {
					var left = $el.css('left');
					if (!left || left == '' || left == 'auto') {
						this.settings.right = $el.css('right');
					} else {
						this.settings.left = left;
					}
				}				

				$el.css({'position':'absolute'}).css(this.getAbsPos());

				var refixHandle = false;
				var _this = this;
				$(window, document.body).bind('resize scroll', function(e){

					if (refixHandle !== false) {

						if (_this.settings.hidden_when_refix) $el.hide();
						
						if (!!refixHandle) {
							clearTimeout(refixHandle);
						}
						
						refixHandle = setTimeout(function(){
							if (_this.settings.hidden_when_refix) {
								$el.css(_this.getAbsPos()).fadeIn('fast');
							} else {
								$el.stop().animate(_this.getAbsPos());
							}
							refixHandle == null;
						}, _this.settings.refix_Interval);
					
					} else {
						$el.css({'position':'absolute'}).css(_this.getAbsPos());
						refixHandle = null;
					}
					
				});

			}
			, getAbsPos: function() {
				var css = {
					'left': this.getAbsLeft(),
					'right': this.getAbsRight(),
					'top': this.getAbsTop(),
					'bottom': this.getAbsBottom()
				};
				return css;
			}
			, getAbsLeft: function() {
				var left = this.settings.left;
				if (left !== '' && left !== 'auto') {
					left = parseInt(left, 10) + $(window).scrollLeft();
				}
				return left;
			}
			, getAbsRight: function() {
				var right = this.settings.right;
				if (right !== '' && right !== 'auto') {
					var $w = $(window), $d = $(document);
					right = parseInt(right, 10) + $d.outerWidth(true) - $w.outerWidth(true) - $w.scrollLeft();
				}
				return right;
			}
			, getAbsTop: function() {
				var top = this.settings.top;
				if (top !== '' && top !== 'auto') {
					top = parseInt(top, 10) + $(window).scrollTop();
				}
				return top
			}
			, getAbsBottom: function() {
				var bottom = this.settings.bottom;
				if (bottom !== '' && bottom !== 'auto') {
					var $w = $(window), $d = $(document);
					bottom = parseInt(bottom, 10) + $d.outerHeight(true) - $w.outerHeight(true) - $w.scrollTop();
				}
				return bottom;
			}
		};
	}();

	$.fn.extend({
		positionfixed: function(options) {
			this.each(function(i, el){
				new PositionFixedable(el, options);
			});
		}
	})

})(jQuery);