//抵押证明材料js插件
function ScrollPane() {
	return this._init.apply(this, arguments);
}

ScrollPane.prototype = function(){
	return {
		$list: null,
		$wrap: null,
		paneCols: 1,
		paneRows: 1,
		direction: 'x',
		stepCount: 1,
		stepLength: null,
		minScrollLeft: 0,
		minScrollTop: 0,
		$btnScrollUp: null, 
		$btnScrollDown: null,
		_init: function(selector) {

			this.$list = $(selector);
			this.direction = this.$list.attr('data-scroll-direction') || 'x';

			this.paneCols = this.$list.attr('data-pane-cols') || 1;
			//方向为x时橱窗高度限制为一行
			this.paneRows = (this.direction != 'y') ? 1 : (this.$list.attr('data-pane-rows') || 1); 

			this.stepCount = this.$list.attr('data-scroll-step-count') || 1;

			var $items = this.$list.find('>li');
			var itemCount = $items.length;
			var itemWidth = $items.outerWidth(true);
			var itemHeight = $items.outerHeight(true);

			this.stepLength = (this.direction != 'y') ? -itemWidth*this.stepCount : -itemHeight*this.stepCount;
			
			var listWidth, listHeight;

			this.$list.wrap('<div class="scroll-pane" />');
			this.$wrap = this.$list.parent();
			this.$list.css('position', 'absolute');
			this.$wrap.css({
				'overflow': 'hidden',
				'position': 'relative',
				'width': (itemWidth*this.paneCols)+'px',
				'height': (itemHeight*this.paneRows)+'px'
			});

			if (this.direction != 'y') { // 横向滚动
				listWidth = itemWidth * itemCount;
				listHeight = itemHeight * this.paneRows;
			} else { // 纵向滚动
				listWidth = itemWidth * this.paneCols;
				listHeight = itemHeight*Math.ceil(itemCount/this.paneCols);
			}
			this.$list.css({
				'width': listWidth+'px',
				'height': listHeight+'px'
			});

			this.minScrollLeft = -listWidth + itemWidth * this.paneCols;
			this.minScrollTop = -listHeight + itemHeight * this.paneRows;

			this.$btnScrollUp = $('<span class="btn-scroll-up"><a href="#">&lt;</a></span>');
			this.$btnScrollDown = $('<span class="btn-scroll-down"><a href="#">&gt;</a></span>');

			this.$wrap.wrap('<div style="position:relative;overflow:visible"></div>');

			
			if (itemCount >= this.paneCols*this.paneRows) {

				this.$wrap.parent().append(this.$btnScrollUp).append(this.$btnScrollDown);

				this.$btnScrollUp.css({
					'positioin': 'absolute',
					'left': -this.$btnScrollUp.width()+'px',
					'top': (this.$wrap.height() - this.$btnScrollUp.height())/2 + 'px'
				});

				this.$btnScrollDown.css({
					'position': 'absolute',
					//'right': -this.$btnScrollDown.width()+'px',
					'left': this.$wrap.width()+'px',
					'top': (this.$wrap.height() - this.$btnScrollDown.height())/2 + 'px'
				});

				
				var _this = this;
				this.$btnScrollUp.click(function(e){
					e.preventDefault();
					_this.scrollUp();
				});

				this.$btnScrollDown.click(function(e){
					e.preventDefault();
					_this.scrollDown();
				});

			}

			return this;
		},
		scrollDown: function(count) {
			
			if (this.direction != 'y') {

				var curScrollLeft = parseInt(this.$list.attr('data-scroll-left') || 0);
				var scrollLeft = curScrollLeft + this.stepLength;

				if (scrollLeft < this.minScrollLeft ) {
					this.$list.animate({left: this.minScrollLeft-50}, 400, 'easeOutQuad').animate({left: this.minScrollLeft }, 100, 'easeOutQuad');
					this.$list.attr('data-scroll-left', this.minScrollLeft );
				} else {
					this.$list.animate({left: scrollLeft}, 500, 'easeOutQuad');
					this.$list.attr('data-scroll-left', scrollLeft);
				}

			} else {

				var curScrollTop = parseInt(this.$list.attr('data-scroll-top') || 0);
				var scrollTop = curScrollTop + this.stepLength;

				if (scrollTop < this.minScrollTop ) {
					this.$list.animate({top: this.minScrollTop-50}, 400, 'easeOutQuad').animate({top: this.minScrollTop}, 100, 'easeOutQuad');
					this.$list.attr('data-scroll-top', this.minScrollTop);
				} else {
					this.$list.animate({top: scrollTop}, 500, 'easeOutQuad');
					this.$list.attr('data-scroll-top', scrollTop);
				}

			}

		},
		scrollUp: function(count) {

			if (this.direction != 'y') {
				
				var curScrollLeft = parseInt(this.$list.attr('data-scroll-left') || 0);
				var scrollLeft = curScrollLeft - this.stepLength;

				if (scrollLeft > 0) {
					this.$list.animate({left: 50}, 400, 'easeOutQuad').animate({left: 0}, 100, 'easeInQuart');
					this.$list.attr('data-scroll-left', 0);
				} else {
					this.$list.animate({left: scrollLeft}, 500, 'easeOutQuad');
					this.$list.attr('data-scroll-left', scrollLeft);
				}
			} else {
				
				var curScrollTop = parseInt(this.$list.attr('data-scroll-top') || 0);
				var scrollTop = curScrollTop - this.stepLength;

				if (scrollTop > 0) {
					this.$list.animate({top: 50}, 400, 'easeOutQuad').animate({top: 0}, 100, 'easeInQuart');
					this.$list.attr('data-scroll-top', 0);
				} else {
					this.$list.animate({top: scrollTop}, 500, 'easeOutQuad');
					this.$list.attr('data-scroll-top', scrollTop);
				}

			}
		}
	}
}();