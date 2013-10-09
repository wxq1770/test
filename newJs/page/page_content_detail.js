var jsPath = "/themes/ruizhict/static/newJs/plugins/",
	loadState = [
				jsPath+"jquery.itz.AmountInput.js",//投资弹出框拖动插件
				jsPath+"jquery-lightbox/jquery.lightbox.js",//弹出窗口
				jsPath+"tipsWindow.js",//弹出窗口
				jsPath+"ScrollPane.js",//回到顶部插件 收藏夹等
				jsPath+"floatService.js"//回到顶部插件 收藏夹等
				];

delayGetScript(loadState,function(data){
	$(function(){
	var article_id = $("[name='article_id']").val();
	//百度分享
	var bds_config = {'bdText':document.title};
	
	/*$.getScript("http://bdimg.share.baidu.com/static/js/shell_v2.js?cdnversion=" + Math.ceil(new Date()/3600000),function(data){
		$("#social-share-pos").show();
	});	*/
		
	$("#comment_content").val("");
	
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
	
	//图片展示插件 初始化
	(function(){ // fancybox
		var resBase = '/themes/ruizhict/static/js/jquery/plugins/jquery-lightbox/';
		$('a[data-lightbox]').lightbox({
			triggerEvent: 'click',
			allSet: true,
			fileLoadingImage: resBase+'images/loading.gif',
			fileBottomNavCloseImage: resBase+'images/closelabel.gif',
			strings: {
				help: ' \u2190 / P - previous image\u00a0\u00a0\u00a0\u00a0\u2192 / N - next image\u00a0\u00a0\u00a0\u00a0ESC / X - close image gallery',
				prevLinkTitle: '上一张',
				nextLinkTitle: '下一张',
				prevLinkText:  '&laquo; 上一张',
				nextLinkText:  '下一张 &raquo;',
				closeTitle: '关闭',
				image: '',
				of: ' of ',
				download: '下载'
			},
			fitToScreen: true,		
			disableNavbarLinks: true,
			loopImages: true
		});
	})();
	(function(){ // ubtn hover
		$(document.body).delegate('.ubtn', 'mouseenter', function(e){
			$(this).children().addClass('ubtn-hover');
		}).delegate('.ubtn', 'mouseleave', function(e){
			$(this).children().removeClass('ubtn-hover');
		});
	})();
	
	//评论主功能
	var COMMENT_UP_URL = '/index.php?comment&type=ding'; /* 顶评论请求url */
	var uping = false;
	$('.comment-list').delegate('.btn-up', 'click', function(e){
		e.preventDefault();
		if (!uping) {
			uping = true;
			var $item = $(this).parents('.comment-item');
			var commentId = $item.attr('data-comment-id');
			$.ajax({
				url: COMMENT_UP_URL,
				type: 'post',
				dataType: 'json',
				data: {'id':commentId},
				success: function(response){
					if (response.code == '0') {
						$item.find('.up-count').html(response.data.count);
					} else {
						alert('error['+response.code+']'+response.info);
					}
				},
				error: function(){
					alert('error, find out error in the console or call cy');
				},
				complete: function(){
					uping = false;
				}
			});
		} else {
			alert('正在努力地顶，请稍候...');
		}
	}).delegate('.btn-comment-reply', 'click', function(e){
		e.preventDefault();
		if (!window.User.user_id) {
			redirect.tipsDelay('login', '请登录后操作。');
		}else{
			var $item = $(this).parents('.comment-item');
			var commentId = $item.attr('data-comment-id');
			$('#reply-comment-panel').find('[name=pid]').val(commentId);
			var $vcode = $('#reply-comment-panel').find('.vcode img');
			$vcode.attr('src', $vcode.attr('src').replace(/&t=([^&]+)/, '&t='+new Date().getTime()));
			$('#reply-comment-panel').dialog({
				'width': 800,
				'title': '回复评论',
				'modal': true,
				'close': function( event, ui ) {
					$('.vcode img').trigger('click');
				}
			});
		}
	});
	
	$(".btn-comment-remove").live('click', function(){
		var that = $(this),
			thatP = that.parents('.reply-comment-item').length > 0 ? that.parents('.reply-comment-item') : that.parents(".comment-item");
		if(window.confirm("确定删除此条评论吗？")){
			$.get('/index.php?comment&code=borrow&type=delete',{"id":thatP.attr("data-comment-id"),"confirm":"true"},function(data){
				if(data.code == 0){
					thatP.remove();
				}else{
					alert(data.info);
				}
			},"json");
		}
		return false;
	});
	
	//评论提交
	$('#reply-comment-form').submit(function(e){
		e.preventDefault();
		var $this = $(this);
		var data = {
			code: $this.find('[name=code]').val(),
			article_id: $this.find('[name=article_id]').val(),
			pid: $this.find('[name=pid]').val(),
			comment: encodeURIComponent($this.find('textarea[name=comment]').val()),
			valicode: $this.find('[name=valicode]').val()
		};
		$.get('/index.php?comment&type=add',data,function(response){
			if (response.code == "1") {
				location.reload();
			} else {
				if(response.code == "03"){
					$(".vcode").find("img").trigger("click");	
				}
				var msg = response.info;
				alert(msg);
			}
		},"json");
	});
	
	//ajax 评论5条递增
	(function(){
		var sum = 0,
			diff = $("#showComments").attr("data-total") - 3;
			ajaxComment = function(that){
				$.ajax("/index.php?comment&type=load&code=borrow&article_id="+article_id,{
					dataType:"json",
					data:{
							end_id:$(".comment-list > li:last").attr("data-comment-id"),
							epage:3
						 },
					type:"GET",
					beforeSend:function(jqXHR){
						jqXHR.setRequestHeader("If-Modified-Since","0") ;
						that.prev().css("display","block");
					},
					success:function(data){
						that.prev().hide();
						$(".comment-list").append(data.html);
						$(".comment-item:gt(2)").show();
						$(".idcl_close").find("span").removeClass("idcl_close_xia").addClass("idcl_close_shang");
						if(!$(".idcl_close").length){
							$("#showComments").parent().append('<span class="idcl_close"><span class="icon-sprite idcl_close_shang"></span><strong class="idcl_txt" style="display:none;">收起</strong></span>');
						}
						var curSum = data.total - 3;
						if(data.total<=3){
							that.attr("data-ajax-state","1").css("margin-left","384px").find("a").text("评论加载完成").css({"text-decoration":"none","cursor":"text"});
						}else{
							that.find("strong").text(curSum);
							if(curSum >= 3){
								that.find("b").text("3");
							}else{
								that.find("b").text(curSum);
							}
						}
					}
				});
			};
		
		$(".idcl_close").live("click",function(){
			$(this).find("span").show();
			$(this).find("strong").hide();
			if($(this).find("span").hasClass("idcl_close_shang")){
				$(".comment-item:gt(2)").hide();
				$(this).find("span").removeClass("idcl_close_shang").addClass("idcl_close_xia").text("展开");
			}else{
				$(".comment-item:gt(2)").show();
				$(this).find("span").removeClass("idcl_close_xia").addClass("idcl_close_shang").text("收起");
			}
		}).live("mouseenter",function(){
			$(this).find("span").hide();
			$(this).find("strong").show();
			if($(this).find("span").hasClass("idcl_close_shang")){
				$(this).find("strong").text("收起");
			}else{
				$(this).find("strong").text("展开");
			}
		}).live("mouseleave",function(){
			$(this).find("span").show();
			$(this).find("strong").hide();
			if($(this).find("span").hasClass("idcl_close_shang")){
				$(this).find("strong").text("收起");
			}else{
				$(this).find("strong").text("展开");
			}
		});
		
		$("#showComments").click(function(){
			var that = $(this),
				loging = that.prev();
			if(that.attr("data-ajax-state")){
				return false;
			}
			ajaxComment(that);
			return false;
		}).find("strong").text(diff);
		if(diff >= 3 ){
			$("#showComments").find("b").text(3);
		}else{
			$("#showComments").find("b").text(diff);
		}
	})();
	
	//抵押证明材料js调用
	$('.jswidget-scroll-pane').each(function(i, el){
		new ScrollPane(el);
	});
	
	$("#pinglun").click(function(){
		var that = $(this);
		pinglun(that.attr("data-code"),that.attr("data-article"));
	})
	
	//查看详情弹出框
	$('.summary-mod').delegate('.btn-view-full, .summary-part', 'click', function(e){
		e.preventDefault();
		var $mod = $(this).parents('.summary-mod');
		var $full = $mod.find('.full-part');
		if ($full.length) {
			$full.dialog({
				modal: true, 
				width: 480, 
				title: $mod.find('.hd h3').text()
			});
			$mod.data('full-dialog', $full);
		} else {
			$mod.data('full-dialog').dialog('open');
		}
	});
	
	//ie6下立即投资浮动框方法
	var positionFixed = function(ele){
		var w = $(window).width(),
			d = $(document).width();
		var eHeight = ele.height(),
			wHeight = $(window).height(),
			wWidth = w > d ? w : d,
			eWidth = ele.width(),
			eTop = $(window).scrollTop();
			
		ele.parent().css({
			"position":"absolute",
			"top":wHeight+eTop-eHeight-175+"px",
			"left":1+"px",
			"height":eHeight,
			"width":eWidth,
			"display":"block"
		});
	};
	
	//立即投资浮动框方法
	var updateFixedInvest = function(){
		var fixedI = $(".fixed-invest-bar");
		var $topBtn = $('#btn-invest-top');
		var $bottomBtn = $('#btn-invest-bottom');
		var $btQuick = $('#fixed-invest .fixed-invest-bar');
		return function(){
			if(!$('#btn-invest-top').length){
				return false;
			}
			if (
				($(this).scrollTop() > $topBtn.offset().top + $topBtn.outerHeight() - 20)
				&&
				($(this).scrollTop() + $(window).outerHeight() < $bottomBtn.offset().top - 10)
			) {
				//show
				$btQuick.show();
				if($.browser.msie && ($.browser.version == "6.0")){
					positionFixed(fixedI);
				}
			} else {
				//hide
				$btQuick.hide();
				if($.browser.msie && ($.browser.version == "6.0")){
					positionFixed(fixedI);
				}
			}
		}
	}();
	updateFixedInvest();
	$(window, document.body).bind('resize scroll', function(e){
		if($.browser.msie && ($.browser.version == "6.0")){
			$("#fixed-invest").hide();
		}
		$.throttle(updateFixedInvest,window);
	});
	
	//查看详情鼠标移入效果
	$(".summary-mod").hover(function(){
		$(this).addClass("hover");
	},function(){
		$(this).removeClass("hover");
	});
	
	//在线客服
	onlineServiceFun.init(".pic-customer-service");
	onlineServiceFun.popupInit("#onlineService");
	
	$(".apostrophe").apostrophe();
	
	$(".iShare").iShare({
			url:window.location.href,
			title:$("#mingcheng").text(),
			content:"刚刚了解了爱投资的企业直投项目【"+$("#mingcheng").text()+"】，年化收益率高达"+$(".finance-rate").text()+"，融资性担保公司100%本息保障。投资理财，安全、稳健才是王道！互联网金融，首选#爱投资#！",
			image:window.location.protocol+"//"+window.location.host+$("#xiangmutupian").attr("src")
		});
	});
})