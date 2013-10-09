(function(){
	$.fn.extend({
		popupLevel:function(arguments){
			var set = $.extend({
							top:"0",
							left:"0",
							popupBgClick:true,
							align:"l",
							cookie:"",
							nextFun:null,
							trgEle:null,
							confirmFun:null
						},arguments),
				element = $(this),
					doc = $(document),
					win = $(window),
					ie6 = $.browser.msie && $.browser.version == "6.0",
					oneDay = 1000*60*60*24;
					
			var popupBgObj = {
					popupBg: $('<div id="dialogbj" style="position:absolute;  top:0; left:0; width:100%; height:100%; overflow:hidden; background-color:#666; opacity: 0.5; filter: progid:DXImageTransform.Microsoft.Alpha(opacity=50); z-index:997; "></div>',"body"),
					init:function(){
						var that = this;
						this.addBg();
						this.showBg();
						this.bgHeight();
					},
					closeBg:function(fn){
						this.popupBg.hide();
					},
					showBg:function(){
						if(!ie6){
							this.popupBg.show();
						}else{
							this.bgHeight().show();
						}
					},
					bgHeight:function(){
						var height = doc.height() > win.height()?doc.height():win.height(),
							width = doc.width() > win.width()? doc.width()+"px" : 100+"%" ;
						return this.popupBg.css({
									"height":height+"px",
									"width":width
								});
					},
					addBg:function(){
						var eleBody = $("body");
						if(!eleBody.has(this.popupBg).length){
							eleBody.append(this.popupBg);
						}
					},
					clickFun:function(fn){
						var that = this;
						if(set.popupBgClick){
							this.popupBg.one("click",function(){
								that.handler(fn);
							})
						}
					},
					handler:function(fn){
						this.closeBg()
						fn();
					}
				};
			//popupBgObj.init();
			var popupModule = {
					module:element,
					target:set.targetEle,
					init:function(){
						var that = this,
							arg = $.makeArray(arguments),
							top = this.align(arg[0],arg[1]).top || set.top,
							left = this.align(arg[0],arg[1]).left || set.left;
						this.showPosition(top,left);
						this.showModule();
					},
					closeModule:function(){
						this.module.hide();
					},
					showModule:function(){
						this.module.show();
					},
					showPosition:function(top,left){
						return this.module.css({"top":top+"px","left":left+"px","z-index":"998"});
					},
					align:function(top,left){
						var eWidth = element.width(),
							eHeight = element.height(),
							tWidth = set.trgEle?set.trgEle.width():0,
							tHeight = set.trgEle?set.trgEle.height():0;
						switch(set.align){
							case "l":
								return {
									"left" : left ,
									"top" : top
								}
							case "r":
								return { 
									"left" :left - eWidth + tWidth,
									"top" : top
								}
							case "bl":
								return {
									"left":left,
									"top":top - eHeight + tHeight
								}
							case "br":
								return {
									"left":left - eWidth + tWidth,
									"top":top - eHeight + tHeight
								}
							case "c":
								return {
									"left":(win.width() - eWidth)/2,
									"top":function(){
										if(ie6){
											return (win.height() - eHeight)/2+win.scrollTop();
										}else{
											return (win.height() - eHeight)/2;
										}
									}()
								}
						}
					},
					clickFun:function(fn){
						var that = this;
						if(this.module.find(".popup-close").length){
							this.module.on("click",".popup-close",function(){
								that.handler(fn)
							})
						}
					},
					nextHandler:function(fn){
						var that = this;
						if(this.module.find(".popup-next").length){
							this.module.on("click",".popup-next",function(){
								that.handler(fn)
							})
						}
					},
					skipHandler:function(fn){
						var that = this;
						if(this.module.find(".popup-complete").length){
							this.module.on("click",".popup-complete",function(){
								that.handler(fn)
							})
						}
					},
					confirmFun:function(fn){
						var that = this;
						if(this.module.find(".popup-confirm").length){
							this.module.on("click",".popup-confirm",function(){
								that.handler(fn)
							})
						}
					},
					cancelFun:function(fn){
						var that = this;
						if(this.module.find(".popup-cancel").length){
							this.module.on("click",".popup-cancel",function(){
								that.handler(fn)
							})
						}
					},
					handler:function(fn){
						this.closeModule()
						fn();
					}
				}
			var popupInit ={
				init:function(){
					popupModule.init();
					popupBgObj.init();
					var that = this;
					this.clickFun(that);
					this.nextFun(that);
					this.skipFun(that);
					this.confirmFun(that);
					this.cancelFun(that);
					this.resize(popupModule);
				},
				closeFun:function(){
					popupBgObj.closeBg.call(popupBgObj);
					popupModule.closeModule.call(popupModule);
				},
				clickFun:function(that){
					popupModule.clickFun(function(){
						that.closeFun();
						if(set.clickFun){
							set.clickFun();
						}
						$.cookie(set.cookie,"cancel",oneDay);
					});
					popupBgObj.clickFun(function(){
						that.closeFun();
						if(set.clickFun){
							set.clickFun();
						}
					});
				},
				cancelFun:function(that){
					popupModule.cancelFun(function(){
						that.closeFun();
						$.cookie(set.cookie,"cancel",oneDay);
					});
				},
				nextFun:function(that){
					popupModule.nextHandler(function(){
						that.closeFun();
						var cookieVal = $.cookie(set.cookie);
						if(cookieVal){
							if(cookieVal == "complete"){
								return false
							}else if(cookieVal == "cancel"){
								$.cookie(set.cookie,2,0);
								set.nextFun($.cookie(set.cookie));
							}else{
								$.cookie(set.cookie,Number(cookieVal)+1,0);
								set.nextFun($.cookie(set.cookie));
							}
						}else{
							$.cookie(set.cookie,1,0);
							set.nextFun($.cookie(set.cookie));
						}
					});
				},
				skipFun:function(that){
					popupModule.skipHandler(function(){
						that.closeFun();
						$.cookie(set.cookie,"complete",0);
					});
				},
				confirmFun:function(that){
					popupModule.confirmFun(function(){
						that.closeFun();
						var cookieVal = $.cookie(set.cookie);
						set.confirmFun(cookieVal);
					})
				},
				resize:function(that){
					$(window).resize(function(){
						if(element.is(":visible")){
							$.throttle(function(){
								var tarEleOffset = set.trgEle,
									top = tarEleOffset?tarEleOffset.offset().top:0,
									left= tarEleOffset?tarEleOffset.offset().left:0;
								that.init(top,left);
							},window);
						}
					});
				}
			}
			popupInit.init();
		}
	})
})()