var jsPath = "/themes/ruizhict/static/newJs/plugins/",
	loadState = [
				jsPath+"jquery.itz.AmountInput.js",//投资弹出框拖动插件
				jsPath+"jquery.popupLevel.js",//新手引导插件
				jsPath+"slides.min.jquery.js",//首页轮播图插件
				jsPath+"jquery.positionfixed.js",//positionfixed
				jsPath+"tipsWindow.js",//弹出窗口
				jsPath+"floatService.js"//回到顶部插件 收藏夹等
				];

delayGetScript(loadState,function(data){
	$(function(){
	
	(function(){
		
		function strHtml(arr){
			var txt = ""
			for(var i = 0 ; i < arr.length ; i++ ){
				for(var j = 0 ; j < arr[i].length ; j++ ){
					if(arr[i].charAt(j) == "."){
						txt+="<b>.</b>";
						continue;
					}
					txt += "<span>"+arr[i].charAt(j)+"</span>";
				}
				if(i+1 != arr.length){
					txt+="<b>,</b>";
				}
			}
			return txt;
		}
		
		function suijishu(num){
			var arr = ["f","e","d","c",0,1,2,3,4,5,6,7,8,9],
				txt = "";
			for(var i = 0; i < num ; i++){
				txt+=arr[Math.floor(Math.random()*15)];
			}
			return txt;
		}
		
		function suijishu255(){
			var txt = "";
			for(var i = 0; i < 3 ; i++){
				txt+=Math.floor(Math.random()*256)+",";
			}
			return txt;
		}
		
		var daoshu = function(ele){
			var state = false,
				num = parseInt(ele.text()),
				arr = function(){
					var arr1 = [],
						value = function(){return Math.floor(Math.random()*10)};
					for(var i = 0 ; arr1.length != 10 ;  i++){
						var valueNum = value();
						if($.inArray(valueNum,arr1) == -1){
							arr1.push(valueNum);
						}
						if(i==200){
							return arr1;
						}
					}
					return arr1;
				}();
				
			$.autoDown(function(jishu){
				if(jishu == 10){
					$.autoDown(function(jishu){
						var numArr = arr[0];
						if(numArr == num || state){
							state = true;
							ele.text(num);
							//var color = suijishu255();
							//ele.css("box-shadow","0px 5px 3px rgba("+color+"0.3) inset");
							//ele.css("border","1px solid rgba("+color+"0.3)");
							//ele.css("color","#"+suijishu(6));
							return false;
						}else{
							ele.text(numArr);
							//var color = suijishu255();
							//ele.css("box-shadow","0px 5px 3px rgba("+color+"0.3) inset");
							//ele.css("border","1px solid rgba("+color+"0.3)");
							//ele.css("color","#"+suijishu(6));
							arr.shift();
							return true;
						}
					},50);
					return false;
				}else{
					var numArr = arr[Math.floor(Math.random()*10)];
					ele.text(numArr);
					//var color = suijishu255();
					//ele.css("box-shadow","0px 5px 3px rgba("+color+"0.3) inset");
					//ele.css("border","1px solid rgba("+color+"0.3)");
					//ele.css("color","#"+suijishu(6));
					jishu++;
					return true;
				}
			},10);
		}
		
		$(".bi-item-1 .bi-item-value").html(strHtml(real_account_total.split(",")));
		$(".bi-item-2 .bi-item-value").html(strHtml(repay_will_interest.split(",")));
		$(".bi-item-3 .bi-item-value").html(strHtml(repay_yes_interest.split(",")));
		$(".bi-item-4 .bi-item-value").html(strHtml(repay_yes_capital.split(",")));
		
		$(".bi-item-value span").each(function(index, element) {
			$(element).parent().show();
			daoshu($(element));
		});
	})();
		
	(function(){
		var bannerImgList = $(".b-sImage").find("span"),
			bannerImgBlist = $(".b-bImage").find("li"),
			iNum = 0,
			stopStr = true,
			timeOut = 0,
			userAgent = navigator.userAgent,
			fun = function(){
				if(ie6 && /SE/.test(userAgent) && /MetaSr/.test(userAgent)){
					return function(){
						bannerImgList.removeClass("hover");
						$(bannerImgList[iNum]).addClass("hover");
						bannerImgBlist.filter(function(index){
							if(bannerImgBlist[index] != bannerImgBlist[iNum]){
								return bannerImgBlist[index];
							}
						}).hide();
						$(bannerImgBlist[iNum]).show();
						iNum++;
					}
				}else{
					return function(){
						bannerImgList.removeClass("hover");
						$(bannerImgList[iNum]).addClass("hover");
						bannerImgBlist.filter(function(index){
							if(bannerImgBlist[index] != bannerImgBlist[iNum]){
								return bannerImgBlist[index];
							}
						}).fadeOut(800);
						$(bannerImgBlist[iNum]).fadeIn(800);
						iNum++;
					}
				}
			}();
		bannerImgList.on("mouseover",function(){
			var that = $(this);
			timeOut = setTimeout(function(){
				bannerImgList.removeClass("hover");
				that.addClass("hover");
				bannerImgList.filter(function(index){
					if($(this).hasClass("hover")){
						iNum = index;
					}
				});
				if(ie6 && /SE/.test(userAgent) && /MetaSr/.test(userAgent)){
					bannerImgBlist.filter(function(index){
						if(bannerImgBlist[index] != bannerImgBlist[iNum]){
							return bannerImgBlist[index];
						}
					}).hide();
					$(bannerImgBlist[iNum]).show();
				}else{
					bannerImgBlist.filter(function(index){
						if(bannerImgBlist[index] != bannerImgBlist[iNum]){
							return bannerImgBlist[index];
						}
					}).fadeOut(800,function(){
						$(bannerImgBlist[iNum]).fadeIn(800).show();
					});
				}
				stopStr = false;
			},150)
		}).on("mouseout",function(){
			clearTimeout(timeOut);
			stopStr = true;
		})
		$("#slider").on("mouseover",function(){
			stopStr = false;
		}).on("mouseout",function(){
			stopStr = true;
		})
		setTimeout(function(){
			if(stopStr == false){
				setTimeout(arguments.callee,5000);
			}else{
				if(iNum != 5){
					setTimeout(arguments.callee,5000);
					fun();
				}else{
					iNum = 0;
					setTimeout(arguments.callee,5000);
					fun();
				}
			}
		},100);
	})();
		

	var $slide = $('#promo .promo-slide');
	var slideHandle;
	startSlide();
	function activeItem(n) {
		$slide.find('.directs ul li').removeClass('active');
		$slide.find('.directs ul li[data-seq='+n+']').addClass('active');
		$slide.find('.contents ul').animate({
			'left' : - n * 974
		}, '500', 'easeInOutQuad');
	}
	function startSlide() {
		if (!slideHandle) {
			slideHandle = setInterval(function(){
				var $activedItem = $slide.find('.directs ul li[class=active]');
				var curActived, nextActived;
				if ($activedItem.length) {
					curActived = parseInt($activedItem.attr('data-seq'), 10);
				} else {
					curActived = 0;
					$slide.find('.directs ul li').first().addClass('active');
				}
				nextActived = curActived + 1;
				if (nextActived > $slide.find('.directs ul li').length - 1) {
					nextActived = 0;
				}
				activeItem(nextActived);
			}, 4000);
			return true;
		} else {
			return false;
		}
	}
	function stopSlide() {
		if (!!slideHandle) {
			try {
				clearInterval(slideHandle);
			} catch(ex) {}
			slideHandle = null;
		}
	}
	$slide.delegate('.directs li', 'click', function(e){
		stopSlide();
		e.preventDefault();
		var $this = $(this);
		var seq = parseInt($this.attr('data-seq'), 0);
		activeItem(seq);
	}).on('mouseenter', function(e){
		stopSlide();
	}).on('mouseleave', function(e){
		startSlide();
	});
	
	//轮播图功能
	$('#slides').slides({
			preload: true,
			preloadImage: '/themes/ruizhict/static/css/img/loading.gif',
			play: 4000,
			pause: 2500,
			hoverPause: true
		});
	var ajustSlideBtns = function(){
		var ajustHandle;
		var minWidth = 60;
		var $btnPagePrev = $('.head-slide .slide-wrap .prev');
		var $btnPageNext = $('.head-slide .slide-wrap .next');
		return function(){
			try {
				clearTimeout(ajustHandle);
			} catch(ex){}
			ajustHandle = setTimeout(function(){
				var margin = ($(window).width() - 960) / 2;
				if (margin < minWidth) {
					$btnPagePrev.animate({width:60, left:0}, 'fast');
					$btnPageNext.animate({width:60, right:0}, 'fast');
				} else {
					$btnPagePrev.animate({width:margin, left:-margin}, 'fast');
					$btnPageNext.animate({width:margin, right:-margin}, 'fast');
				}
			}, 200);
		}
	}();
	ajustSlideBtns();
	$(window).resize(function(e){ajustSlideBtns();});
	
	/*
	//新手引导
	$.countDown(10,function(time){
		if (!window.User.user_id && !$.cookie("NEWBIE_GUIDE")){
			var trgEle = $("#pop-register"),
				ele = $("#guide_1"),
				ele2= $("#guide_i_login"),
				confirmEle = $("#confirmEle");
			if(!time){
				var top1 = function(){
					if(ie6){
						return ($(window).width() - ele.width())/2 + $(window).scrollTop();
					}else{
						return ($(window).width() - ele.width())/2;
					}
				}();
				confirmEle.popupLevel({
					top:top1,
					left:($(window).height() - ele.height())/2,
					align:"c",
					cookie:"NEWBIE_GUIDE",
					confirmFun:function(cookie){
						if(!$("#pop-register").length)return false;
						var trgEleOffset = trgEle.offset();
						ele.popupLevel({
							trgEle:trgEle,
							top:trgEleOffset.top,
							left:trgEleOffset.left-ele.width()+trgEle.width(),
							align:"r",
							cookie:"NEWBIE_GUIDE",
							nextFun:function(cookieVal){
								var trgEle1=$("#pop-login");
									 trgEle1Offset = $("#pop-login").offset();
								ele2.popupLevel({
									trgEle:trgEle1,
									top:trgEle1Offset.top,
									left:trgEle1Offset.left - ele2.width() + trgEle1.width(),
									align:"r",
									cookie:"NEWBIE_GUIDE"
								});
							}
						});
					}
				});
			}
		}
	});
	
	if (window.User.user_id){
		if(!$.cookie("NEWBIE_GUIDE")){
			$.cookie("NEWBIE_GUIDE","1",0);
		}
	}
	$("#guide_register").click(function(event){
		$.cookie("NEWBIE_GUIDE","1",0);
	})
	*/
	
	//列表项目鼠标hover效果
	$('.invest-item').filter('.simple-item').on('mouseenter', function(e){
		$(this).addClass('simple-item-hover');
	}).on('mouseleave', function(e){
		$(this).removeClass('simple-item-hover');
	});
	
	//首页静态化登陆
	ajaxLogin('/index.php?user&q=action/autologin');
	
	//投资金额选定功能
	$('.btn-invest-imm, .btn-modify-investment').click(function(e){
		var options = eval('('+$(this).attr('data-invest-amount-configs')+')');
		new $.itz.AmountInput($('#invest-amount'), options);
		$('#panel-input-invest-money').find('form').attr('action', $(this).attr('href') + '?detail=true');
		if(ie6){
			setTimeout(function(){
				$('#panel-input-invest-money').dialog({
					title: '填写投资金额',
					width: 510,
					modal: true,
					show: {effect:'fade', duration:200}
				});
			},700)
		}else{
			$('#panel-input-invest-money').dialog({
				title: '填写投资金额',
				width: 510,
				modal: true,
				show: {effect:'fade', duration:200}
			});
		}
		return false;
	});
	//在线客服
	onlineServiceFun.init(".pic-customer-service");
	onlineServiceFun.popupInit("#onlineService");
	//截取字符串
	$(".apostrophe").apostrophe();
	});
})
