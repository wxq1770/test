var Modifier = function(){
	return {
		money: function(val){
			if (parseInt(val) != parseFloat(val)) return val;
			if (val != 0 && val % 10000 == 0) {
				return val/10000 + '万';
			} else {
				return val;
			}
		}
	}
}();
//浏览器判断
var ie6 = ($.browser.msie && $.browser.version == "6.0"),
	ie8 = ($.browser.msie && $.browser.version == "8.0"),
	ie7 = ($.browser.msie && $.browser.version == "7.0");
var JSON;if(!JSON){JSON={}}(function(){'use strict';function f(n){return n<10?'0'+n:n}if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+f(this.getUTCMonth()+1)+'-'+f(this.getUTCDate())+'T'+f(this.getUTCHours())+':'+f(this.getUTCMinutes())+':'+f(this.getUTCSeconds())+'Z':null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key)}if(typeof rep==='function'){value=rep.call(holder,key,value)}switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null'}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null'}v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v}if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==='string'){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v)}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v)}}}}v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v}}if(typeof JSON.stringify!=='function'){JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' '}}else if(typeof space==='string'){indent=space}rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}return str('',{'':value})}}if(typeof JSON.parse!=='function'){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j}throw new SyntaxError('JSON.parse');}}}());

var bit = function(){
	function set(n, i, v) {
		n = parseInt(n, 10);
		return !!v ? ((1<<(i-1))|n) : ((~(1<<(i-1)))&n);
	}
	function get(n, i) {
		n = parseInt(n, 10);
		return !!((1<<(i-1))&n) ? 1 : 0;
	}
	function toString(n) {
		n = parseInt(n, 10);
		var str = '';
		do {
			str = (n%2) + str;
		} while(n = Math.floor(n / 2));
		return str;
	}
	return function(){
		switch(arguments.length){
		case 0:
			return null;
		case 1:
			return toString.apply(null, arguments);
		case 2:
			return get.apply(null, arguments);
		case 3:
		default:
			return set.apply(null, arguments);
		}
	}
}();

/*
cookie(); //获取document.cookie字符串
cookie('a'); //获取key为a的cookie值
cookie('a', 'hello'); //设置cookie a的值为hello 有效期为session有效期
cookie('a', 'hello', null); //同上例
cookie('a', 'hello', 0); //设置cookie a的值为hello 有效期为永久（实际为10年）
cookie('a', 'hello', 1000*3600*24); ////设置cookie a的值为hello 有效期为24小时
*/

var cookie = function(){
	function set(name, value, expires, path, domain)
	{
		var ckStr;
		if (value != null) {
			ckStr = encodeURIComponent(name) + '=' + encodeURIComponent(value);
			// 设置过期时间，不设置则为session有效
			if (expires === 0) { //expires为0则设为永久（10年有效）
				ckStr += ';expires=' + new Date(new Date().getTime()+10*365*24*3600*1000).toGMTString();
			} else if (!!expires) { //expires存在且不为0，正常设置 expires为过期毫秒数
				ckStr += ';expires=' + new Date(new Date().getTime()+expires).toGMTString();
			} else { //不设置
			}
		}
		else {
			ckStr = encodeURIComponent(name) + '=0;expires=' + new Date(new Date().getTime()).toGMTString();
		}

		if (path != null) {
			ckStr += ';path=' + path;
		}
		if (domain != null) {
			ckStr += ';domain=' + domain;
		}	

		document.cookie = ckStr;
	}
	function get(name) {
		var start = document.cookie.indexOf(encodeURIComponent(name)+'=');
		if (start != -1) {
			var end = document.cookie.indexOf(";", start);
			if (end==-1) {
				end = document.cookie.length;
			}
			return decodeURIComponent(document.cookie.substring(start+encodeURIComponent(name).length+1, end));
		} else {
			return null;
		}
	}
	return function(){
		switch(arguments.length){
		case 0:
			return document.cookies;
		case 1:
			return get.apply(null, arguments);
		default:
			return set.apply(null, arguments);
		}
	}
}();
$.extend({//倒计时功能  倒计时目标数， 回调方法 ， 运行速度;
	countDown:function(second,fn,speedArg){
		var speed = speedArg || 1000,
			jishu = 0;
		setTimeout(function(){
			var tfn = arguments.callee;
			setTimeout(function(){
				if(second){
					tfn();
				}else if(second == "auto"){
					tfn();
				}
			},speed)
			if(second != "auto"){
				--second;
				fn(second);
			}else if(second == "auto"){
				fn(jishu++);
			}
		},speed);
	},//XX时间后触发方法
	autoDown:function(fn,speedArg){
		var speed = speedArg || 1000,
			jishu = 0,
			time = 0;
		setTimeout(function(){
			var tfn = arguments.callee;
			time = setTimeout(function(){
				tfn();
			},speed)
			var state = fn(jishu++);
			if(!state){
				clearTimeout(time);
			}
		},speed);
	},
	throttle:function (fn,that){
		clearTimeout(fn.tId);
		var arg = arguments;
		fn.tId = setTimeout(function(){
			fn.apply(that,arg)
		},100);
	},
	dialogCount : function(html,title,time,fn,arg){
		var htmlObj = $(html)
		var argment = $.extend({'title': title,	'show': 'highlight'},arg);
		htmlObj.dialog(argment);
		$.countDown(time,function(time){
			if(typeof fn == 'function'){
				fn(time);
			}
			if(!time){
				htmlObj.dialog("close");
			}
		})
	},
	cookie:cookie
}); 

var redirect = function(){
	
	var urlPool = {
		'login': '/index.php?user&q=action/login',
		'realname': '/index.php?user&q=code/user/realname'
	};
	var attachParam = {
		'login': {'ret_url': location.href.replace(/https?:\/\/[^\/]+/,'')},
		'realname': {'ret_url': location.href.replace(/https?:\/\/[^\/]+/,'')}
	};
	function jump(url) {
		if (!!urlPool[url]) {
			var newUrl = urlPool[url];
			if (!!attachParam[url]) {
				var params = [];
				for (var i in attachParam[url]) {
					params.push(encodeURIComponent(i)+'='+encodeURIComponent(attachParam[url][i]));
				}
			}
			url = newUrl + '&' + params.join('&');
		}
		location.href = url;
	};
	return {
		block: function(url, text){
			if (confirm(text)) {
				jump(url);
			}
		},
		delay: function(url, delay){
			setTimeout(function(){
				jump(url);
			}, delay||3000);
		},
		tipsDelay: function(url, text, delay){
			delay = delay || 3000;
			$('<p style="padding:10px 15px;line-height: 26px;">'+text+'<br>'+Math.round(delay/1000)+'秒后即将跳转</p>').dialog({
				'title': '正在跳转...',
				'show': 'highlight'
			});
			setTimeout(function(){
				jump(url);
			}, delay);
		}
	}
}();


var tipsAjax = function(){
	
	return function(param){
		var wait = 0;
		var dlg = $('<p style="padding: 20px;">'+param.content+'</p>').dialog({
			title: param.title
		});
		setTimeout(function(){
			if (++wait > 1) {
				dlg.dialog('close');
			}
		}, 2000);
		param.success = function(oldFunc){
			return function(){
				if (++wait > 1) {
					dlg.dialog('close');
				}
				!!oldFunc && oldFunc.apply(arguments.callee, arguments);
			};
		}(param.success);
		$.ajax.call(arguments.callee, param);
	}

}();


(function(){

	function URL() {
		return this._init.apply(this, arguments);
	}

	URL.prototype = function(){
		// https?://host[:port]/[pathname][?search][#hash]
		var re = /^([^:]+):\/\/([^\/:]+)(:(\d+))?(\/[^?#]+)(\?([^#]*))?(#(.*))?$/;
		return {
			protocol: '',
			host: '',
			port: '',
			pathname: '',
			search: '',
			hash: '',
			origin: '',
			searchstr: '',
			hashstr: '',
			params: {},
			_init: function(url){

				var matches = url.match(re);

				if (!!matches) {
					
					var paramSections = (matches[7]||'').split('&'), params={};
					if (!!paramSections) {
						for (var i=0,len=paramSections.length; i<len; i++) {
							var _temp = paramSections[i].split('=');
							params[decodeURIComponent(_temp[0])] = decodeURIComponent(_temp[1]);
						}
					}

					this.protocol = matches[1];
					this.host = matches[2];
					this.port = matches[4] || '' ;
					this.pathname = matches[5];
					this.params = params;
					
					if (!!matches[7]) {
						this.searchstr = matches[7];
						this.search = '?'+matches[7];
					}

					if (!!matches[9]) {
						this.hashstr = matches[9];
						this.hash = '#'+matches[9];	
					}
					
					this.origin = this.protocol + '://' + this.host + (!!this.port?(':'+this.port):'');
					
				} 
				return this;
			}
		}
	}();

	window.URL = URL;

})();


(function($){

	function center(el) {
		var $el = $(el);
		var mgl = ($el.parent().width() - $el.outerWidth())/2;
		if ($el.css('float') == 'left' && $.browser.msie && $.browser.version == '6.0') {
			mgl = mgl / 2;
		}
		$el.css('margin-left', mgl);
	}
	
	$.fn.center = function(){
		this.each(function(i, el){
			center(el);
		});
	};

})(jQuery);


//添加收藏
function AddFavorite(sURL, sTitle) {
	sURL = encodeURI(sURL);
	try{
		window.external.addFavorite(sURL, sTitle);
	}catch(e){
		try{
			window.sidebar.addPanel(sTitle, sURL, "");
			}catch(e){
				alert("加入收藏失败，请使用Ctrl+D进行添加,或手动在浏览器里进行设置.");
			}
	}
}

//小数点
Number.prototype.toFixedOne=function(num)
{
   //重新构造toFixed方法,IE5.0+
   with(Math)this.NO=round(this.valueOf()*pow(10,num))/pow(10,num);
   return String(/\./g.exec(this.NO)?this.NO:this.NO+"."+String(Math.pow(10,num)).substr(1,num));
   
};

var ajaxLogin = function(url,fn){
	var keywords = $("#keywords_1").val(),
		password = $("#password_1").val(),
		verify = $("#pop_login_form .valicode_1").val(),
		cookietime = $("select[name='cookietime']").val();
	$.ajax({
		url:url,
		type:"POST",
		dataType:"json",
		data:{'ajax':0,'keywords':keywords,'password':password,'valicode':verify,'cookietime':cookietime},
		timeout:10000,
		beforeSend:function(jqXHR,settings){
			$(".ps1-error").hide();
			$("#popLogin").append('<img src="/themes/ruizhict/static/css/img/blue-loading.gif" style="margin-top:82px;position:absolute;top:-10px; right:10px" id="loginloding"/>');
		},
		error: function(jqXHR,textStatus,errorThrown){
			if(textStatus == "timeout"){
				$("#loginloding").remove();
			}
		},
		success:function(data){
			if(!data){
				$("#loginloding").remove();
				return false;
			}
			if(data.code == 0){
				var strMessage = function(){
						return data.data.message!=0 ? '<li><a href="/index.php?user&q=code/message&status=0"><span class="icon-sprite icon-h-xinfeng jqui-tooltip" title="您有'+data.data.message+'封未读消息，点击阅读"></span></a></li>':'<li><a href="/index.php?user&q=code/message&status=0"><span class="icon-sprite icon-h-xinfeng-1"></span></a></li>';
					}(),
					str2 = '<a href="/index.php?user" style="float:left; margin-right:10px;">您好，'+data.data.username+'</a><a href="/index.php?user&q=action/logout">退出</a>';
				if($(".user_cache_message").length > 0){
					$(".user_cache_message").remove();
				}
				$(".header-o-c-operate").prepend(strMessage);
				$(".header-o-c-login").html(str2);
				window.User = function(){
					return {
						"user_id":data.data.user_id,
						"user_name":data.data.username,
						"qn_score":data.data.qn_score,
						"real_name":data.data.realname,
						"real_status":data.data.real_status,
						"email_status":data.data.email_status,
						"phone_status":data.data.phone_status
					}
				}(); 
				$("#loginloding").remove();
				
				if($("#popLogin").is(":visible")){
					$("#popLogin").dialog("close");
				}
				
				if($("body").attr("id") == "invest_content"){
					if(typeof fn == 'function'){
						fn();
					}else{
						window.location.reload();
					}
				}else{
					if(typeof fn == 'function'){
						fn();
					}
				}
				
			}else if(data.code == 10){
				$(".ps1-error").html(data.info).hide();
				$("#loginloding").remove();
			}else if(data.code == 6){
				window.location.reload();
			}else{
				var errorEle = $(".ps1-error").html(data.info).show();
				$("#pop_login_form .yanzhengma").trigger("click");
				$("#loginloding").remove();
			}
		}
	});
};

var yanzhengmaFun = function(){
	$(".valicode_1").each(function(index, element) {
		if(!$(this).attr("placeholder")){
			var value = $(this).attr("data-valicode"),
				txt = value ? value :"点击获取";
			if(!ie7){
			$('.valicode_1').attr("placeholder",txt);
			}
		}else{
			if(!ie7){
				if($('.valicode_1').attr("placeholder") == "点击"){
					$('.valicode_1').attr("placeholder","点击");
				}else{
					$('.valicode_1').attr("placeholder","点击获取");
				}
			}
		}
    });
	
	$(".valicode_1").one("focus",function(){
		var form = $(this).parents("form");
		form.find(".yanzhengma").show();
		form.find(".yanzhengma")[0].src="/plugins/index.php?q=imgcode&amp;t="+Math.random();
	});
	$(".yanzhengma").live("click",function(){
		this.src="/plugins/index.php?q=imgcode&amp;="+Math.random();
	});
	
	$('.valicode_1').placeholder();
};

var ajaxLoginCon = function(){
	$("body").append('<div id="popLogin" style="display:none;"><div class="ps1-bj"></div><div class="ps1-error" style="display:none;"></div><div class="ps1-close">X</div><div class="ps1-con cf"><h2>用户登录</h2><div class="popLogin-con cf"><dl class="ps1-other-login-1"><dt>使用合作账号登录</dt><dd><a href="https://api.weibo.com/oauth2/authorize?client_id=24875680&redirect_uri=http%3A%2F%2Fwww.itouzi.com%2Findex.php%3Fuser%26q%3Daction%2Foauth_weibocallback&response_type=code" target="_blank" class="register-btn weibo-btn">新浪微博</a></dd><dd><a href="https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=100450749&redirect_uri=http%3A%2F%2Fwww.itouzi.com%2Findex.php%3Fuser%26q%3Daction%2Foauth_qqcallback&state=bbff215720a1790c22011f8ef8a2059e&scope=get_user_info,add_share,list_album,add_album,upload_pic,add_topic,add_one_blog,add_weibo,check_page_fans,add_t,add_pic_t,del_t,get_repost_list,get_info,get_other_info,get_fanslist,get_idolist,add_idol,del_idol,get_tenpay_addr" target="_blank" id="a_qq_login" class="register-btn qq-btn">QQ登录</a></dd><dd class="pol1-txt">一键登录，无需注册<br/>与朋友分享你的投资经验！</dd></dl><div class="ps1-form-1"><form action="/index.php?user&amp;q=action/login" method="post" id="pop_login_form" name="login"><ul class="ps1-form cf"><li style="margin-top:0;"><label>账&nbsp; &nbsp;号</label><input type"text" placeholder="用户名/邮箱/手机"  maxlength="64" name="keywords" id="keywords_1" class="ps1-txt" autocomplete="off" /></li><li><label>密&nbsp; &nbsp;码</label><input type="password" maxlength="16" id="password_1" name="password" class="ps1-txt"/></li><li><label>验证码</label><input type="text" maxlength="4" size="8" name="valicode"class="ps1-txt valicode_1" placeholder="点击获取" style="width:87px; margin-right:5px;"/><img src="/plugins/index.php?q=imgcode&amp;width=68&amp;height=24" height="30" alt="点击刷新" class="yanzhengma" style="display:none"></li><li><label>免登录</label><span class="ps1-select"><select name="cookietime" class="cookietime_1"><option selected="selected" value="60">1小时内</option><option value="1440">1天内</option><option value="10080">7天内</option></select></span></li><li style="margin-top:20px;"><label>&nbsp;</label><input type="submit" value="登录" class="ps1-submit"/><a href="/index.php?user&amp;q=action/getpwd" class="ps1-wangji">忘记密码</a><a href="/index.php?user&amp;q=action/reg" class="ps1-mianfei">免费注册</a></li></ul></form></div></div></div></div>');
	/*<dd><a href="#" target="_blank" class="register-btn renren-btn">人人网登录</a></dd><dd><a href="#" target="_blank" class="register-btn a360-btn">360登录</a></dd>*/
	$(".pop_login_1").live("click",function(){
		$("#popLogin").dialog({
			dialogClass:"popLogin clearPop pop-style-1",
			bgiframe: true,
			modal: true,
			resizable:false,
			width:510,
			open:function(){
				$(this).find(".yanzhengma").attr("src","/plugins/index.php?q=imgcode&t="+Math.random());
			}
		});
		return false;
	});
	
	$(".ps1-close").live("click",function(){
		if($(".ps1-error").length > 0){
			$(".ps1-error").hide();
		}
		$("#popLogin").dialog("close");
	});
	
	$('#keywords_1').placeholder();
	if($(".valicode_1").length > 0){
		yanzhengmaFun();
	}
	
	$("#popLogin").delegate('#pop_login_form','submit.loginSubmit',function(event){
		ajaxLogin('/index.php?user&q=action/login');
		return false;
	});
	$.get('/index.php?user&q=action/oauth_get_qqcallback_url',{},function(data){
		if(data.code==0){
			$('#a_qq_login').attr('href',data.url);
		}
	},'json');
};
$.fn.extend({
	formCheckFun:function(arg){
		$.fn.formCheckFun.rule={
			'required':function(val,check,ele){
				var type = ele.type;
				if(type == 'text'||type == 'password'){
					return /^\S+$/.test(val);
				}else if(type == 'checkbox'){
					return $(ele).is(":checked");
				}
			},
			'rangelength':function(val,check){
				var star = check[0],
					end = check[1],
					value = $.trim(val).length;
				if(star && !end){
					if(value<star){
						return false;
					}else{
						return true;
					}
				}else{
					if(value<star||value>end){
						return false;
					}else{
						return true;
					}
				}
			},
			'Chinese':function(val){
				return /^[\u4e00-\u9fa5]+$/.test(val);
			},
			'identity':function(val){
				var aCity={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "};
				return function (sId){
					var iSum=0
					var info=""
					if(!/^\d{17}(\d|x)$/i.test(sId))return false;
						sId=sId.replace(/x$/i,"a");
					if(aCity[parseInt(sId.substr(0,2))]==null)return false;
						sBirthday=sId.substr(6,4)+"-"+Number(sId.substr(10,2))+"-"+Number(sId.substr(12,2));
					var d=new Date(sBirthday.replace(/-/g,"/"))
					if(sBirthday!=(d.getFullYear()+"-"+ (d.getMonth()+1) + "-" + d.getDate()))return false;
						for(var i = 17;i>=0;i --) iSum += (Math.pow(2,i) % 11) * parseInt(sId.charAt(17 - i),11)
					if(iSum%11!=1)return false;
						return true;
				}(val);
			}
		};
		$.fn.formCheckFun.msg={
			'required':function(ele,check){
				var type = ele.type;
				if(type == 'text' || type == 'password'){
					return '请填写此项';
				}else if(type == 'checkbox' || type =='radio'){
					return '请勾选此项';
				}
			},
			'rangelength':function(check){
				var star = check[0],
					end = check[1],
					txt = star && !end? "至少输入"+star+"个字符":"请输入"+star+"到"+end+"个字符"; 
				return txt;
			},
			'Chinese':function(){
				return "请输入正确的中文";
			},
			'identity':function(){
				return "请输入正确的身份证号";
			}
		}
		var rule = $.extend($.fn.formCheckFun.rule,{});
		var msg = $.extend($.fn.formCheckFun.msg,{});
		this.checkEleNum = function(){
			var context = this.context,
				checkEleArr = [];
			for(var i = 0 ; i<context.length ;i++){
				for(var j = 0 ; j <context[i].attributes.length;j++){
					if(context[i].attributes[j].name == 'data-validate'){
						eval("var jsonTxt = {"+context[i].attributes[j].value+"}")
						checkEleArr.push({
							ele:context[i],
							check:jsonTxt
						});
					}
				}
			}
			return checkEleArr;
		};
		
		this.checkFun = function(ele,check){
			var static = {
					ele:ele,
					eleName:$(ele).attr('data-name'),
					msg:[]
				},
				value = ele.value;
				for(str in check){
					if(check[str]){
						if(!rule[str](value,check[str],ele)){
							if(str == 'rangelength'){
								static.msg.push(msg[str](check[str]));
							}else{
								static.msg.push(msg[str](ele,check[str]));
							}
						}
					}
				}
			return static;
		};
		this.checkStatic = function(obj){
			var static = [];
			for(var i = 0 ; i<obj.length ; i++){
				static.push(that.checkFun(obj[i].ele,obj[i].check));
			}
			return static;
		};
		var that = this,
			obj = this.checkEleNum(that),
			static = this.checkStatic(obj);
		return static;
	}
});
(function(w){ // 身份证号

	function IDNo(code) {
		//if (!IDNo.validate(arguments[0])) throw new Error(['IDNo', 'create error', 'ID code is invalid']);
		return this._init.apply(this, arguments);
	}

	IDNo.prototype = function(){
		function parseArea(){return 'unknown';}
		return {
			code: null,
			code18: null,
			addressCode: null,
			birthdayCode: null,
			sequenceCode: null,
			checkCode: null,
			birthday: null,
			gender: null,
			area: null,
			valid: null,
			_init: function(code) {
				this.code = code;
				if (this.valid = IDNo.validate(code)) {
					this.code18 = IDNo.convertTo18(code);
					var res = IDNo.parse(this.code);
					this.addressCode = res.addressCode;
					this.birthdayCode = res.birthdayCode;
					this.sequenceCode = res.sequenceCode;
					this.checkCode = res.checkCode;
					this.birthday = [this.code18.substr(6,4), this.code18.substr(10,2), this.code18.substr(12,2)].join('-');
					this.gender = (parseInt(this.sequenceCode.charAt(2), 10) % 2 == 1) ? IDNo.MALE : IDNo.FEMALE;
					this.area = parseArea(this.addressCode);
				}
				return this;
			}
		}
	}();

	IDNo.MALE = 'male';
	IDNo.FEMALE = 'female';
	IDNo.TYPE_18 = '18-type';
	IDNo.TYPE_15 = '15-type';

	IDNo.parse = function(){
		return function(code) {
			if (code.length == 15) {
				return {
					addressCode: code.substr(0, 6),
					birthdayCode: code.substr(6, 6),
					sequenceCode: code.substr(12, 3)
				};
			} else if (code.length == 18) {
				return {
					addressCode: code.substr(0, 6),
					birthdayCode: code.substr(6, 8),
					sequenceCode: code.substr(14, 3),
					checkCode: code.substr(17, 1).toUpperCase()
				};
			} else {
				return false;
			}
		}
	}();

	IDNo.convertTo18 = function(){
		return function(code){
			if (code.length == 15) {
				var res = IDNo.parse(code);
				var birthdayPrefix = /^(996|997|998|999)$/.test(res.sequenceCode) ? '18' : '19';
				var code_17 = res.addressCode + birthdayPrefix + res.birthdayCode + res.sequenceCode;
				return code_17 + IDNo.calculateCheckCode(code_17);
			} else if (code.length == 18) {
				return code;
			} else {
				return null;
			}
		}
	}();

	IDNo.calculateCheckCode = function(){
		var Wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]; 
		var checkCodes = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
		return function(code) {
			if (code.length == 17 || code.length == 18) {
				var s = 0;
				for (var i=0; i<17; i++) {
					s += parseInt(code.charAt(i),10) * Wi[i];
				}
				var y = s % 11;
				return checkCodes[y];
			} else {
				return null;
			}
		}
	}();

	IDNo.validate = function(){
		var basicRe = /^(\d{15}|\d{17}[0-9xX])$/;
		function checkCodeValidate(code) {
			return IDNo.parse(code).checkCode == IDNo.calculateCheckCode(code);
		}
		function birthdayValidate(code) {
			var str = code.substr(6, 4)+'/'+code.substr(10, 2)+'/'+code.substr(12, 2);
			return code.length == 18 && !/Invalid|NaN/.test(new Date(str));
		}
		return function(code){
			//type = type || IDNo.TYPE_18;
			code = IDNo.convertTo18(code);
			return !!code && basicRe.test(code) && birthdayValidate(code) && checkCodeValidate(code);
		}
	}();

	window.IDNo = IDNo;

})(window);

var ajaxRealnameCon = function(){
	if(User.real_status !== "1" && !$('#popRealname').length>0){
		$("body").append('<div id="popRealname" style="display:none;"><div class="ps1-bj"></div><div class="ps1-error" style="display:none;width:212px;"></div><div class="ps1-close">X</div><div class="ps1-con cf"><h2>实名认证</h2><form class="js-form-validate" id="popRealname_form" name="auto-valid" action="" method="post" novalidate="novalidate"><ul class="ps1-form cf"><li><label>真实姓名</label><input type="text" maxlength="64" data-name="真实姓名" name="realname" class="ps1-txt" data-validate="required:true,rangelength:[2,6],Chinese:true" autocomplete="off" /></li><li><label>身份证号</label><input type="text" data-name="身份证号" maxlength="18" name="card_id" class="ps1-txt" data-validate="required:true,identity:true"/></li><li><label>&nbsp;</label><input type="checkbox" name="serviceAgreement" checked="checked" class="input-radio-style valid" data-validate="required:true" data-name="服务协议">阅读并同意签署爱投资<a href="/index.php?user&amp;q=code/user/contract" target="_blank" style="color:#c8050e;">"服务协议"</a></li><li><label>&nbsp;</label><input type="submit" value="确认提交" class="ps1-submit"/></li></ul><input type="hidden" name="birthday" /><input type="hidden" name="sex" value=""></form></div></div>');
	}else{
		return false;
	}
	var popRealname = $("#popRealname"),
		popError = popRealname.find(".ps1-error"),
		ps1Close = popRealname.find(".ps1-close");
		
	$(".pop_realname_1").live("click",function(){
		if(User.real_status === "3"){
			window.location.href='/index.php?user&q=code/user/realname';
			return false;
		}
		popRealname.dialog({
			dialogClass:"popLogin clearPop pop-style-1",
			bgiframe: true,
			modal: false,
			resizable:false,
			width:452,
			open:function(){
			},
			close:function(){
				$("#popRealname_form").attr("data-state","false");
			}
		});
		return false;
	});
	
	ps1Close.live("click",function(){
		if(popError.length > 0){
			popError.hide();
		}
		popRealname.dialog("close");
	});
	
	$("#popRealname_form").live("submit",function(){
		var that = $(this);
			error = that.formCheckFun(),
			static = true,
			card_idNum = that.find('[name="card_id"]').val();
		
		if($("#popRealname_form").attr("data-state") == "true"){
			return false;
		}
		
		$("#popRealname_form").attr("data-state","true");
		
		for(var i = 0 ; i<error.length ; i++){
			if(error[i].msg.length > 0){
				popError.text(error[i].eleName+":"+error[i].msg[0]).show();
				static = false;
				return false;
			}
		};
		$.ajax({
			url:"/index.php?user&q=action/check_cardid",
			type:"POST",
			dataType:"json",
			data:{card_id:card_idNum},
			beforeSend:function(jqXHR,settings){
				that.append('<img src="/themes/ruizhict/static/css/img/blue-loading.gif" style="margin-top:82px;position:absolute;top:-5px; right:40px" class="loginloding"/>');
			},
			timeout:5000,
			error: function(jqXHR,textStatus,errorThrown){
				if(textStatus == "timeout"){
					alert("抱歉~身份证验证超时失败,请重试或联系客服！");
					that.find(".loginloding").remove();
				}
			},
			success:function(data){
				that.find(".loginloding").remove();
				if(!data){
					popError.text("身份证号：身份证号已存在").show();
				}else{
					popError.empty().hide();
						if (IDNo.validate(card_idNum)) {
							var idno = new IDNo(card_idNum);
							var genderVal = (idno.gender == 'male') ? '1' : '2';
						}
					$.ajax({
						url:"/index.php?user&q=action/reg_realname",
						type:"POST",
						dataType:"json",
						data:{"sex":genderVal,"birthday":idno.birthday,"realname_type":1,"card_id":card_idNum,"realname":that[0].realname.value,"isajax":"1"},
						beforeSend:function(jqXHR,settings){
							that.append('<img src="/themes/ruizhict/static/css/img/blue-loading.gif" style="margin-top:82px;position:absolute;top:-5px; right:40px" class="loginloding"/>');
						},
						timeout:20000,
						error: function(jqXHR,textStatus,errorThrown){
							if(textStatus == "timeout"){
								that.find(".loginloding").remove();
								popError.html("身份认证请求超时，请前往 <a href='/index.php?user&q=code/user/realname' target='_blank' style='color:#666' onclick='return true'>上传认证</a>").show();
							}
						},
						success:function(data){
							that.find(".loginloding").remove();
							if(data.code!=0){
								popRealname.dialog( "option", "modal", true );
								popError.html("身份认证：失败，可前往 <a href='/index.php?user&q=code/user/realname' target='_blank' style='color:#666' onclick='return true'>上传认证</a>").show();
							}else{
								popRealname.dialog("close");
								if(popRealname.attr("data-real-status") == "true"){
									window.location.reload();
								}
							}
						}
					});
				}
			}
		});
		return false;
	});
};

//导航功能
$(function(){
	onlineServiceFun.popupInit(".header #onlineService");
	
	(function(){
		var time = 0;
		$(".navigation-item").mouseenter(function(){
			var that = $(this);
			clearTimeout(time);
			time = setTimeout(function(){
				var next = that.find(".navigation-list-two-con"),
					width = that.width(),
					eleWidth = next.width(),
					cha = (eleWidth-width)/2;
				that.addClass("select");
				next.css("left",-cha);
				next.find(".nav-sanjiao").css("left",eleWidth/2-6);
				next.stop().fadeIn(200);
			},200);
		}).mouseleave(function(){
			var that = $(this),
				listTwo = that.find(".navigation-list-two-con");
			clearTimeout(time);
			setTimeout(function(){
				if(that.hasClass("select")){
					that.removeClass("select");
					that.find(".navigation-list-two-con").stop().fadeOut(200);
				}
			},200);
		});
	})();
	
	$('.jqui-datepicker').datepicker({
		changeMonth: true,
		changeYear: true,
		showMonthAfterYear: true,
		dateFormat: 'yy-mm-dd',
		monthNames: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
		monthNamesShort: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
		dayNames: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
		dayNamesShort: ['日', '一', '二', '三', '四', '五', '六'],
		dayNamesMin: ['日', '一', '二', '三', '四', '五', '六']
	});

	$('.jqui-button').button();
	
	$('.jqui-tooltip').each(function(i, el) {
		var $el = $(el);
		var defaults = {
			"show": { 
				duration: 200 
				//, effect: "blind"
			}
			, "arrow": 'top'
			, "position": { my: "left top+6", at: "left bottom" }
		};
		var options = eval('(' + ($el.attr('data-tooltip-configs') || '{}') + ')');
		var settings = $.extend(true, {}, defaults, options);
	
		if (!!settings.arrow) {
			var html = '<span class="arrow arrow-'+settings.arrow+'"><em></em><b></b></span>';
			$(el).on( "tooltipopen", function(event, ui) {
				ui.tooltip.append(html);
			});	
		}
		$(el).tooltip(settings);
		
	});
	
	var PAGE_ENTER_TIME = new Date().getTime();
	var MAX_SHOW_LEFT_DAY = 5;
	$.countDown("auto",function(){
		var now_time = new Date().getTime();
		var diffTime = Math.round((now_time - PAGE_ENTER_TIME)/1000); //秒
		
		$('.js-countdown-time').each(function(i, el){
			var $this = $(this),
				dataMoney = $this.attr("data-money");
			var leaveTimeStart = parseInt($this.attr('data-leave-time'), 10);
			if (leaveTimeStart <= 0) {
				if($this.attr("data-last-day")=="true"){
					$this.html("<span>企业正在还款</span>");
					$this.removeClass('js-countdown-time');
				}else{
					$this.html("<span>企业已还款</span>");
					$this.removeClass('js-countdown-time');
				}
			} else {
				var leaveTime = leaveTimeStart - diffTime;
				if (leaveTime > MAX_SHOW_LEFT_DAY*24*3600 && dataMoney != "false") {
					$this.html("<span>剩余"+MAX_SHOW_LEFT_DAY+"天以上</span>");
				} else if (dataMoney != "false" && leaveTime > 0) {
					var d = parseInt(leaveTime/24/3600);
					var h = parseInt((leaveTime/3600)%24);
					var m = parseInt((leaveTime/60)%60);
					var s = parseInt(leaveTime%60);
					$this.html('<em class="days">'+d+'</em>天<em class="hours">'+h+'</em>小时<em class="minutes">'+m+'</em>分<em class="seconds">'+s+'</em>秒');
				}else if(dataMoney == "false" && $this.attr("data-day")==100){
					$this.html("<span>企业正在还款</span>");
					$this.removeClass('js-countdown-time');
				} else {
					$this.html("<span style='color:green'>时间到了！</span>");
					$this.removeClass('js-countdown-time');
				}
			}
			if ($this.parents('.recommended-item').length) {
				$this.parents('.countdown-mod').center();
			}
		});
	});
	
	//友情链接
	(function(){
		var that = $("#blogroll dd"),
			height = that.height(),
			lineHeight = height/38,
			num = height / lineHeight,
			sum = 0;
		
		$.countDown("auto",function(){
			if(lineHeight == 0){
				lineHeight = height/38;
				sum = 0;
			}
			sum = sum + num;
			that.animate({
				top: -(sum - 38) +"px"
			}, 1000, function() {
				// Animation complete.
			});
			lineHeight --;
		},5000);
	})();
	
	(function(){
		var time = 0;
		if($(".partners .list-wrap ul").find("li").length > 6){
		var state = true,
			ele  = $(".partners .list-wrap ul"),
			Ewidth = ele.width(),
			Twidth = $(".partners .list-wrap").width();
			
			var animate = function(side){
				var left = 0,
					fun = null;
				if(side == "left"){
					left = -123;
					fun = function(){
						var eleLi = ele.find("li:first");
						ele.append(eleLi.clone());
						eleLi.remove();
					};
				}else if(side == "right"){
					left = 0;
					var eleLi = ele.find("li:last");
					ele.prepend(eleLi.clone());
					eleLi.remove();
					ele.css("left","-123px");
				}
				
				ele.stop().animate({
					"left":left+"px"
				},500,function(){
					state = true;
					if(side == "left"){
						fun();
					}
					ele.css("left","0px");
				});
				
			};
			
			$("#partnersPrev").click(function(){
				state = false;
				clearTimeout(time);
				time = setTimeout(function(){
					animate("right");
				},300);
				
			});
			
			$("#partnersNext").click(function(){
				state = false;
				clearTimeout(time);
				time = setTimeout(function(){
					animate("left");
				},300);
			});
			
			$(".partners .list-wrap").mouseenter(function(){
				state = false;
			}).mouseleave(function(){
				state = true;
			});
			
			$.countDown("auto",function(){
				if(state){
					animate("left");
				}
			},5000);
			
		}
	})();
	
	var jsPath = "/themes/ruizhict/static/newJs/plugins/",
		loadState = [jsPath+"jquery.placeholder.min.js"];//watermark
	
	if($(".pop_login_1").length > 0){
		if(typeof $.fn.placeholder == 'undefined'){
			delayGetScript(loadState,function(data){
				ajaxLoginCon();
			});
		}else{
			ajaxLoginCon();
		}
	}
	
	if(User.real_status !== "1"){
		ajaxRealnameCon();
	}
	
	if($(".valicode_1").length > 0 ){
		if(typeof $.fn.placeholder == 'undefined'){
			delayGetScript(loadState,function(data){
				yanzhengmaFun();
			});
		}else{
				yanzhengmaFun();
		}
	}
	
	$(".ps1-txt").live("focus",function(){
		$(this).addClass("b1s-1");
	}).live("focusout",function(){
		$(this).removeClass("b1s-1");
	});
	
	(function(){
		var time = 0;
		if($(".pic-customer-service-1").length > 0 ){
			var loginTxt = !window.User.user_id ? '<ul class="ps1-form" id="index_feedback_username" style="margin:0 0 10px 0; width:468px"><li><label>联系方式:</label><input type="text" maxlength="100" size="8" class="ps1-txt phone" style="width:370px;" placeholder="手机/QQ/微博/邮箱" /></li></ul>':"";
			$("body").append('<div class="index_feedback pop-style-2" id="index_feedback_id" style="display:none;"><div class="ps1-error" style="display:none; top:20px; left:180px; width:120px;"></div><a class="ps2-close" href="#">X</a><div class="ps2-con cf"><h2>亲，有什么建议你就说嘛，不说我怎么知道呢 ^_^</h2><div class="ps2-txt-con cf">'+loginTxt+'<textarea maxlength="200"></textarea><div class="ps2-submit cf"><form><ul class="ps1-form"><li><label>验&nbsp; 证&nbsp; 码:</label><input type="text" maxlength="4" size="8" class="ps1-txt valicode_2" style="width:87px; margin-right:5px;" /><img src="" height="30" alt="点击刷新" class="yanzhengma2" style="display:none" /></li></ul><input type="submit" class="ps2-btn" value="提交" /></form></div></div></div></div>');
			
			var index_feedback = $("#index_feedback_id");
			
			$(".pic-customer-service-1").live("click",function(){
				if(index_feedback.attr("data-state") == "true"){
					return false;
				}
				
				index_feedback.find("textarea").val("").css({"height":"150px","width":"448px"});
				index_feedback.find(".valicode_2").val("");
				
				if(!window.User.user_id){
					$("#index_feedback_username input").val("");
					$("#index_feedback_username input").placeholder();
				}
				if(!index_feedback.is(':visible')){
					index_feedback.dialog({
						dialogClass:"clearPop box-shadow-5",
						resizable:false,
						modal: true,
						width:500,
						open:function(){
							if(window.User.user_id){
								if($("#index_feedback_username").length > 0){
									$("#index_feedback_username").remove();
								}
								index_feedback.find(".ps2-txt-con").css("padding","30px 0 0 0");
							}
							index_feedback.find(".ps1-error").css("display","none");
							index_feedback.find(".yanzhengma2")[0].src="/plugins/index.php?q=imgcode&amp;t="+Math.random();
							index_feedback.find(".yanzhengma2").show();
						}
					});
				}
				return false;
			});
			
			index_feedback.find(".yanzhengma2").click(function(){
				this.src="/plugins/index.php?q=imgcode&amp;t="+Math.random();
			})
			
			index_feedback.find(".ps2-close").live("click",function(){
				if(index_feedback.attr("data-state") == "true"){
					index_feedback.dialog("close");
					window.location.reload();
				}else{
					index_feedback.dialog("close");
				}
				return false;
			});
			
			index_feedback.find("input").keyup(function(){
				index_feedback.find(".ps1-error").css("display","none");
			}).end().find("textarea").keyup(function(){
				index_feedback.find(".ps1-error").css("display","none");
			});
			
			index_feedback.find("form").submit(function(){
				if(!window.User.user_id && $("#index_feedback_username input").val()==''){
					index_feedback.find(".ps1-error").html("请填写联系方式").show();
					return false;
				}
				if($.trim(index_feedback.find("textarea").val()).length < 10){
					index_feedback.find(".ps1-error").html("最少输入10个字符").show();
					return false;
				}
				if(ie6 || ie7){
					if($.trim(index_feedback.find("textarea").val()).length > 200){
						index_feedback.find(".ps1-error").html("最多输入200个字符").show();
						return false;
					}
				}
				clearTimeout(time);
				var username_val = window.User.user_id ? window.User.user_id : $("#index_feedback_username input").val();
				time = setTimeout(function(){
					$.ajax({
						url:"/index.php?user&q=action/addleavemsg",
						type:"POST",
						dataType:"json",
						data:{"msg":index_feedback.find("textarea").val(),valicode:index_feedback.find(".valicode_2").val(),username:username_val},
						beforeSend:function(jqXHR,settings){
							index_feedback.find(".ps2-con").append('<img src="/themes/ruizhict/static/css/img/blue-loading.gif" style="margin-top:82px;position:absolute;top:175px; right:110px" class="loginloding"/>');
						},
						timeout:20000,
						error: function(jqXHR,textStatus,errorThrown){
							if(textStatus == "timeout"){
								index_feedback.find(".loginloding").remove();
								index_feedback.find(".ps1-error").html("提交请求超时，请重新提交").show();
							}
						},
						success:function(data){
							index_feedback.find(".loginloding").remove();
							if(data.code==1){
								index_feedback.find(".ps1-error").html("验证码不能为空").show();
								index_feedback.find(".yanzhengma2")[0].src="/plugins/index.php?q=imgcode&amp;t="+Math.random();
							}else if(data.code==2){
								index_feedback.find(".ps1-error").html("验证码不正确").show();
								index_feedback.find(".yanzhengma2")[0].src="/plugins/index.php?q=imgcode&amp;t="+Math.random();
							}else if(data.code==3){
								index_feedback.find(".ps1-error").html("留言不能为空").show();
								index_feedback.find(".yanzhengma2")[0].src="/plugins/index.php?q=imgcode&amp;t="+Math.random();
							}else if(data.code==0){
								index_feedback.find(".ps2-txt-con").empty();
								index_feedback.find(".ps2-txt-con").append('<p style="text-align:left; font-size:14px; line-height:24px; padding-left:100px; padding-top:45px;"><strong>您的建议提交成功！</strong><br/><br/>感谢您对爱投资的支持！<br/>我们将认真参考并定期在 <a href="http://e.weibo.com/itouzicom" target="_blank" title="爱投资官微博" style="color:#C8050E;"> @爱投资官微 </a> 中统一回复！<br/><br/><b>15</b>秒后自动关闭</p>');
								index_feedback.attr("data-state","true");
								$.countDown(15,function(num){
									index_feedback.find(".ps2-txt-con b").text(num);
									if(!num){
										window.location.reload();
									}
								})
							}
						}
					});
				},500);
				return false;
			})
		}
	})();
	
});

//评论回复插件功能
function nl2br(value) { value;return value.replace(/\n/g,"</br>") }
function nl2nbsp(value) { value;return value.replace(/\r|\n/g," ") }
function pinglun(code,id) {
	var comment = encodeURIComponent($("#comment_content").val());
	var valicode = $("#valicodePingLun").val();
	tipsWindown("评论","url:get?/index.php?comment&type=add&code="+code+"&article_id="+id+"&comment="+comment+"&valicode="+valicode,300,120,"false",3000,"false","text",function(html){
		if(html.code != "1"){
			$("#windown-content").html("<br/>"+html.info+"<br/><br/>系统3秒后关闭");
		}else{
			$("#windown-content").html("<br/>"+html.info+"<br/><br/>系统3秒后跳转");
			setTimeout(function(){
				window.location.reload(); 
			},3000)
		}
	});
}
function comment_close() {
	$("#windownbg").remove();
	$("#windown-box").fadeOut("slow",function(){$(this).remove();});
}

//加载方法
(function(win,$){
	var delayGetScript = function(arr,fn){
		var i,l=arr.length,num=1;
		for( i=0 ; i<l ; i++ ){
			$.getScript(arr[i],function(data,state){
				if(state == "success"){
					if(l == num){
						fn(data);
					}
					num++;
				}
			})
		}
	}
	win.delayGetScript = delayGetScript;
})(window,jQuery);

//在线客服
var onlineServiceFun = function(){
	var popup = {
			init:function(servIcon){
				var that = $(servIcon);
				if(that.length == 0){return false;}
				that.click(function(){
					var iTop = (window.screen.availHeight-30-630)/2;
					var iLeft = (window.screen.availWidth-10-760)/2;
					window.open('http://qiao.baidu.com/v3/?module=default&controller=webim&action=index&siteid=2486763&groupid=0&groupname=%E6%8A%95%E8%B5%84%E5%92%A8%E8%AF%A2','service','height=630,width=760,top='+iTop+',left='+iLeft+',toobar=no,menubar=no,scrollbars=no,resizable=no,location=no, status=no');
					return false;
				});
			}
		},
		addEvent = {
			init:function(servIcon,handler){
				if($.browser.msie && $.browser.version == "6.0"){
					popup.init(servIcon);
					return false;
				}
				this.mouseenter(servIcon,handler.mHandler);
				this.clickFun(servIcon,handler.cHandler);
			},
			mouseenter:function(servIcon,fn){
				$(servIcon).mouseenter(fn).mouseout(fn);
			},
			clickFun:function(servIcon,fn){
				$(servIcon).click(fn);
			}
		},
		handler = {
			mHandler:function(event){
				var off = $(this).offset(),
					top = off.top,
					left = off.left;
				$("#BDBridgeIconWrap").css({"height":"60px","width":"60px","position":"absolute","top":top+"px","left":left+"px","overflow":"hidden","z-index":"10000","margin":"0px"});
				$("#bdbridgeIconBg").css({"height":"60px","width":"60px","position":"absolute","top":top+"px","left":left+"px","overflow":"hidden","z-index":"10000","margin":"0px"});
				$("#IconContainer").css({"height":"60px","width":"60px","z-index":"10000","overflow":"hidden"});
				$("#bridgehead").css({"height":"60px","width":"60px","z-index":"10000","overflow":"hidden"});
				
			},
			cHandler:function(){
				if($(".btn-max").length > 0){
					$(".btn-max").trigger("click");
					return false;
				}else if($("#bridgehead").length>0){
					$("#bridgehead").trigger("click");
					return false;
				}
			}
		};
	return {
		init:function(servIcon){
			addEvent.init(servIcon,handler);
		},
		popupInit:function(servIcon){
			popup.init(servIcon);
		}
	}
}();

(function($){
	$.fn.apostrophe = function(arg){
		var settings = $.extend(arg);
		$(this).each(function(index,ele){
			var ele = $(ele);
				cEle = settings.cEle || ele.find(".apostrophe-con");
			if(cEle.height() > ele.height()){
				var text = $.trim(cEle.html()),
					num = 0;
				cEle.html("");
				for(var i = 0 ; cEle.height() <= ele.height() && i<200;i++){
					cEle.html(text.slice(0,num+=25));
				}
				text = cEle.html();
				for(var i = 0 ; cEle.height() > ele.height() && i<200;i++){
					text = $.trim(text);
					if(/(&[a-zA-Z0-9]{1,8};?$)|(\s$)|(<[\/\!]*?[^<>]*?>$)/.test(text)){
						text = text.replace(/(&[a-zA-Z0-9]{1,6};?$)|(\s$)|(<[\/\!]*?[^<>]*?>$)/,"");
						continue;
					}
					text = text.slice(0,text.length-1);
					cEle.html(text);
				}
				for(var i = 0 ; /(&[a-zA-Z0-9]{1,6};?$)|(\s$)|(<[\/\!]*?[^<>]*?>$)/.test(text) || i<4 ;i++){
					text = $.trim(text);
					if(/(&[a-zA-Z0-9]{1,6};?$)|(\s$)|(<[\/\!]*?[^<>]*?>$)/.test(text)){
						text = text.replace(/(&[a-zA-Z0-9]{1,6};?$)|(\s$)|(<\/?[^>]*>$)/,"");
						i = 0;
						continue;
					}
					text = text.slice(0,text.length-1);
				}
				if(!cEle.attr("data-string")){
					cEle.html(text);
					text = cEle.html();  
					cEle.html(text+"...");
				}else{
					cEle.html(text+"...");
				}
			}
		});
	}
})(jQuery);

(function(){
	$.fn.extend({
		iShare:function(param){
			var that = $(this);
			var ShareWeb = function(){
				var arr = [];
				that.find("a").each(function(index){
					arr.push({
						name:$(this).attr("data-ishare"),
						ele:$(this)
					});
				});
				return arr;
			}();
			
			var ShareCoding = function(obj,argObj){
				return obj.url+"&"+$.param(argObj);
			};
			
			var ShareObj = {
				qqkongjian:{
					//qq空间 encodeURIComponent
					url:'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?summary=&site=',
					coding : "encodeURIComponent",
					param:function(arg){
						var argObj = {
							url : arg.url,
							title : arg.title,
							desc : arg.content+'爱投资官方群：242368590。分享项目地址，猛戳：',
							pics : arg.image
						};
						this.url = ShareCoding(this,argObj);
					}
				},
				sinaweibo:{
					//新浪微博 encodeURIComponent
					url : 'http://service.weibo.com/share/share.php?content=',
					coding : "encodeURIComponent",
					param:function(arg){
						var argObj = {
							url : arg.url.indexOf("?") >= 1 ? arg.url+"&fr=&src=weibo":arg.url+"?fr&src=weibo",
							title : arg.content+'敬请关注：@爱投资官微。分享项目地址，猛戳：',
							pic : arg.image
						};
						this.url = ShareCoding(this,argObj);
					}
				},
				qqweibo:{
					//腾讯微博 encodeURI
					url : 'http://share.v.t.qq.com/index.php?c=share&a=index&appkey=',
					coding : "encodeURI",
					param:function(arg){
						var argObj = {
							url : arg.url,
							title : arg.content+'爱投资官方群：242368590。分享项目地址，猛戳：',
							pic : arg.image
						};
						this.url = ShareCoding(this,argObj);
					}
				},
				renren:{
					//人人网 encodeURIComponent
					url : 'http://widget.renren.com/dialog/share?srcUrl=',
					coding : "encodeURIComponent",
					param:function(arg){
						var argObj = {
							resourceUrl : arg.url,
							title : arg.title,
							message:arg.content+'爱投资官方群：242368590。分享项目地址，猛戳：',
							description:arg.content+'爱投资官方群：242368590。分享项目地址，猛戳：',
							pic : arg.image
						};
						this.url = ShareCoding(this,argObj);
					}
				},
				qqhaoyou:{
					//QQ好友 encodeURIComponent
					url : 'http://connect.qq.com/widget/shareqq/index.html?url=&title=&desc=&summary=&site=baidu&pics=',
					coding : "encodeURIComponent"
				},
				sohuweibo:{
					//搜狐微博 unescape title encodeURIComponen
					url : 'http://t.sohu.com/third/post.jsp?url=&title=&pic=',
					coding : ["escape",[{name:"title",coding:"encodeURIComponent"}]]
				},
				wangyiweibo:{
					//网易微博 encodeURIComponent
					url : 'http://t.163.com/article/user/checkLogin.do?info=&source=&images=&togImg=true',
					coding : "encodeURIComponent"
				},
				kaixinwang:{
					//开心网 encodeURIComponent
					url : 'http://www.kaixin001.com/rest/records.php?url=&style=11&content=&stime=&sig=',
					coding : "encodeURIComponent"
				},
				baidukongjian:{
					//百度空间 encodeURIComponent
					url : 'http://hi.baidu.com/pub/show/share?url=&title=&content=&linkid=',
					coding : "encodeURIComponent"
				},
				hexunwang:{
					//和讯网 unescape  title encodeURIComponent
					url : 'http://bookmark.hexun.com/post.aspx?url=&title=',
					coding : ["escape",[{name:"title",coding:"encodeURIComponent"}]]
				},
				hexunweibo:{
					//和讯微博 unescape title encodeURIComponent
					url : 'http://t.hexun.com/channel/shareweb.aspx?appkey=',
					coding : ["escape",[{name:"title",coding:"encodeURIComponent"}]],
					param:function(arg){
						var argObj = {
							url : arg.url,
							title : arg.content+'爱投资官方群：242368590。分享项目地址，猛戳：'
						};
						this.url = ShareCoding(this,argObj);
					}
				}
			};
			
			var ShareSet = function(){
				var obj = {};
				for(var i = 0 ; i < ShareWeb.length ; i ++){
					var name = ShareWeb[i].name;
					obj[name] = ShareObj[name];
					obj[name]['ele'] = ShareWeb[i].ele;
					if(typeof obj[name]['param'] == 'function'){
						obj[name]['param'](param);
						obj[name].ele.attr("href",obj[name].url);
					}
				}
				return obj;
			};
			
			var ShareHandler = function(){
				if(that.find("a").length > 0){
					that.find("a").click(function(){
						window.open (this.href,'newwindow','height=640,width=640,top='+(window.screen.availHeight-30-640)/2+',left='+(window.screen.availWidth-10-640)/2+',toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no');
						return false;	
					})
				}
			};
			
			var ShareInit = function(){
				var curObj = ShareSet();
				ShareHandler();
			};
			
			ShareInit();
		}
	});
})();
