(function(){
	var time1 = 0;
	function AmountInput() {
		return this._init.apply(this, arguments);
	}

	AmountInput.prototype = function(){
		var defaults = {
			"min": 0
			, "decimal": 0
			, "max": 10000000
			, "step": 10000
			, "unit": 10000
			, "unit_label": "万"
			, "slider_show": true
			, "slider_visibility": "hidden"
			, "time" : 0
		};
		return {
			settings: null
			, uiSettings: null
			, $dataField: null
			, $wrap: null
			, $spinner: null
			, $slider: null
			, _init: function(el, options){

				var instance = $(el).data('ui-amount-input');
				if (!!instance) {
					instance.reset(options);
					return instance;
				} else {
					$(el).data('ui-amount-input', this);
				}

				this.$dataField = $(el).hide();

				this.settings = $.extend({}, defaults, options);

				this._initSettings();

				this.$wrap = $('<div class="itz-amount-input">\
					<div class="itz-amount-input-ui-wrap">\
						<div class="spinner-wrap">\
							<input class="spinner" value="'+this.uiSettings['value']+'">\
						</div>\
						<div class="slider-wrap" style="display: none;">\
							<div class="slider"></div>\
						</div>\
					</div>\
					<label class="unit-label">'+this.settings.unit_label+'</label>\
				</div>').insertAfter(el);
				
				var _this = this;
				
				this.$spinner = this.$wrap.find('.spinner-wrap .spinner').spinner($.extend({}, this.uiSettings, {
					'spin': function(e, ui){
						_this.$dataField.val(Math.round(ui.value * _this.settings.unit));
						if(!ie6){
							_this.$slider.slider("value", ui.value);
						}
						_this._ajaxList(ui.value*_this.settings.unit);
					}
				}));
				if(!ie6){
					this.$slider = this.$wrap.find('.slider-wrap .slider').slider($.extend({}, this.uiSettings, {
						'slide': function(e, ui){
							_this.$dataField.val(Math.round(ui.value * _this.settings.unit));
							_this.$spinner.spinner("value", ui.value);
							_this._ajaxList(ui.value*_this.settings.unit);
						}
						, "range" : 'min'
						, "animate": 'fast'
					}));
				
					if (this.settings.slider_show) {
						this.$wrap.find('.slider-wrap').show();
					}
				}
					setTimeout(function(){
						var w = _this.$wrap.find('.ui-spinner').outerWidth();
						_this.$wrap.find('.itz-amount-input-ui-wrap').width(w);
						_this.$wrap.find('.ui-slider').width(w);
						_this.$wrap.height(_this.$wrap.outerHeight());
					}, 0);
					
				if(!ie6){
					if (this.settings.slider_visibility == 'hidden') {
						//this.$slider.css('visibility', 'hidden');
						this.$slider.fadeOut();
						this.$wrap.bind('mouseenter', function(e){
							_this.$slider.fadeIn();
						}).bind('mouseleave', function(e){
							_this.$slider.fadeOut();
						});
					}
				}
				var piimEleError = $("#panel-input-invest-money").find(".piim-error");
				$('.spinner',this.$wrap).keyup(function(){
					var that = $(this),
					      val = $.trim(that.val()),
					      re  = /[`~!@#\$%\^\&\*\(\)_\-\=\+<>\?:"\{\}\＠\￥\……\·\〈\〉\。\＼\、\“\”\"\"\;\；\'\'\’\》\‘\：\？\＞\＜\（\）\＊\！\,\——\＆\｜\＼\）\，\《\\\/;'\[\]a-zA-Z\u4e00-\u9fa5]/im,
					      min = _this.settings.min/_this.settings.unit,
					      max = _this.settings.max/_this.settings.unit,
					      step = _this.settings.step/_this.settings.unit;
					if( $.makeArray(val.match(re)).length > 0 || isNaN(val)){
						that.val("0");
						val = that.val();
					}
					if(val<min){
						piimEleError.text("最小投资金额为："+_this.settings.min/_this.settings.unit+_this.settings.unit_label).stop(true,true).show();
					}else if(val>max){
						piimEleError.text("最大投资金额为："+_this.settings.max/_this.settings.unit+_this.settings.unit_label).stop(true,true).show();
						val = max;
					}
					else if((val*_this.settings.unit-_this.settings.min)% _this.settings.step !=0){
						piimEleError.text("投资递增金额不得少于："+_this.settings.step/_this.settings.unit+_this.settings.unit_label);
						if(!piimEleError.is(":animated")){
							piimEleError.stop(true,true).hide().fadeIn(500,function(){
								piimEleError.delay(3000).fadeOut(500);
							});
						}
						val = (_this.settings.min+(Math.ceil((val*_this.settings.unit-_this.settings.min)/_this.settings.step))*_this.settings.step)/_this.settings.unit;
					}else{
						piimEleError.stop(true,true).hide();
					}
					that.val(val);
					_this._ajaxList(val*_this.settings.unit);
					_this.$dataField.val(Math.round(val * _this.settings.unit));
					if(!ie6){
						_this.$slider.slider("value", val);
					}
				});
				$('#panel-input-invest-money').find('form').submit(function(e){
					var that = $(this);
					if (!window.User.user_id){
						$("#panel-input-invest-money").dialog("close");
						$("#popLogin").undelegate('#pop_login_form','submit.loginSubmit',function(event){
							ajaxLogin('/index.php?user&q=action/login');
							return false;
						});
						$("#popLogin").dialog({
							dialogClass:"popLogin clearPop pop-style-1",
							bgiframe: true,
							modal: true,
							resizable:false,
							width:510,
							open:function(){
								$(this).find(".yanzhengma").attr("src","/plugins/index.php?q=imgcode&amp;t="+Math.random());
								$(this).find("#pop_login_form").submit(function(){
									ajaxLogin('/index.php?user&q=action/login',function(){
										if(User.real_status != 1){
											redirect.tipsDelay('realname', '请您先通过上传实名认证，再进行投资。');
										}else{
											window.location.href = that.attr("action")+"&invest_amount="+that.find(".spinner").val()*_this.settings.unit;									}
									});
									return false;
								})
							}
						});
						return false;
					} else if (window.User.real_status != '1'){
						$("#panel-input-invest-money").dialog("close");
						if(window.User.real_status === '3'){
							redirect.tipsDelay('realname', '请您先通过上传实名认证，再进行投资。');
						}else{
							$("#popRealname").dialog({
								dialogClass:"popLogin clearPop pop-style-1",
								bgiframe: true,
								modal: false,
								resizable:false,
								width:452,
								open:function(){
									
								}
							});
						}
						/*$("#panel-input-invest-money").dialog("close");
						;*/
						return false;
					}
					var val =  $(this).find(".spinner").val(),
					      min = options.min/_this.settings.unit,
					      max = options.max/_this.settings.unit,
					      piimEleError = $("#panel-input-invest-money").find(".piim-error");
					if(val=="" || val<min){
						piimEleError.text("最小投资金额为："+options.min/_this.settings.unit+"万").show();
						return false;
					}else if(val>max){
						piimEleError.text("最大投资金额为："+options.max/_this.settings.unit+"万").show();
						return false;
					}
					piimEleError.hide();
					return true;
				});
				var value1 = this.uiSettings['value'];
				
				_this._ajaxList(this.uiSettings['value']*_this.settings.unit);
				
			},
			_ajaxList:function(value){
				var list = $("#ajax_invest_list"),
					sum = $("#ajax_invest_sum"),
					eleDialog = list.parents(".ui-dialog"),
					_this = this;
				clearTimeout(time1);
				time1 = setTimeout(function(){
					if(!value==""){
						$.ajax({
							url:"/index.php?user&q=code/borrow/tender_calc",
							type:"GET",
							dataType:"json",
							data:{"account":value,"apr":_this.settings.apr,"repayment_time":_this.settings.repayment_time,"style":_this.settings.style},
							beforeSend:function(jqXHR,settings){
								$("#panel-input-invest-money").append('<img src="/themes/ruizhict/static/css/img/blue-loading.gif" style="position:absolute; top:35px; left:460px;" id="loding"/>');
							},
							timeout:10000,
							error: function(jqXHR,textStatus,errorThrown){
								if(textStatus == "timeout"){
									$("#loding").remove();
								}
							},
							success:function(data){
								if(!value==""){
									$("#loding").remove();
									/*<span style="margin-right:30px;">您投资本金：<strong>'+data.total[0].capital+'元</strong></span>*/
									sum.html('<span style="margin:0;">投资到期可获得总收益：<strong style="font-size:16px;">'+data.total[0].interest+'元</strong></span>').show();
									var txt='';
									for(var i = 0;i<data.detail.length;i++){
										txt+='<li><span class="icon icon-li-1"></span><span class="item-2" style="width:180px;margin-right:0;">付息时间：<strong>'+data.detail[i].repayment_time+'</strong></span><span class="item-5" style="width:160px; text-align:left;">支付利息：<strong>'+data.detail[i].interest+'元</strong></span></li>';
									}
									var date = $(txt).last().find(".item-2 strong").text().split("-");
									$("#benJinShow").html("支付本金：<strong style='color:#cb282d; '>"+value+"元</strong>");
									list.html(txt).parent().show();
								}else{
									list.parent().hide();
									sum.hide();
								}
							}
						});
						
					}else{
						list.parent().hide();
						sum.hide();
					}
				},200);
			}
			, _initSettings: function() {
				var val = this.settings.value || this.$dataField.val();
				this.settings.value = (!val || (parseInt(val, 10) < this.settings.min)) ? this.settings.min : parseInt(val, 10);
				this.$dataField.val(this.settings.value);
				this._initUISettings();
			}
			, _initUISettings: function() {
				this.uiSettings = {
					"min": this.settings.min / this.settings.unit
					, "max": this.settings.max / this.settings.unit
					, "step": this.settings.step / this.settings.unit
					, "value": (this.settings.value / this.settings.unit).toFixed(this.settings.decimal)
				};
			}
			, getValue: function(){
				return this.$dataField.val();
			}
			, reset: function(options){
				$.extend(this.settings, options||{});
				this._initSettings();
				for (var i in this.uiSettings) {
					this.$spinner.spinner("option", i, this.uiSettings[i]);
					if(!ie6){
						this.$slider.slider("option", i, this.uiSettings[i]);
					}
				}
			}
		};
	}();


	$.itz = $.extend($.itz||{}, {
		AmountInput: AmountInput
	});

})();
