var jsPath = "/themes/ruizhict/static/newJs/plugins/",
	loadState = [
				jsPath+"jquery.itz.AmountInput.js",//投资弹出框拖动插件
				jsPath+"tipsWindow.js",//弹出窗口
				jsPath+"jquery.watermark.min.js",
				jsPath+"jquery-lightbox/jquery.lightbox.js"//弹出窗口
				];
var index_questionnaire_fun = function(real_name,fn){
	if(!$("#index_questionnaire").length){
		$("body").append('<div class="index_questionnaire pop-style-2" id="index_questionnaire" style="display:none;"><div class="ps1-error" style="display:none; top:702px; left:79px; width:74px;"></div><a class="ps2-close"  href="#">X</a><div class="ps2-con cf"><h2 style="text-align:center;">爱投资个人客户风险测评问卷</h2><div class="ps2-txt-con cf"><div class="index_questionnaire_hi">亲爱的爱投资用户：<strong>'+real_name+'</strong> 您好！</div><div class="index_questionnaire_prompt"><p><strong>重要提示，请您仔细阅读</strong><br/>1、在爱投资线上平台首次投资前，请您依据自身真实情况填写本问卷；<br/>2、爱投资关心您及您的投资，在此，特向您进行风险揭示：投资有风险，望您谨慎投资。投资可能涉及到包括并不仅限于本金兑付、市场、流动性、汇率、信用、利率、赋税等各类风险。 </p></div><div class="ps2-submit cf"><h3>请您根据自身真实情况给出答案</h3><form><div class="index_questionnaire_con"><dl><dt>1.您所从事的职业是？</dt><dd><ul class="cf iqc_li"><li><input type="radio" class="input-radio-style" value="1" name="questionnaire1" id="questionnaire01" /><label for="questionnaire01">A.政府/事业单位雇员</label></li><li><input type="radio" class="input-radio-style" value="2" name="questionnaire1"  id="questionnaire02"  /><label for="questionnaire02">B.企业雇员（包括国企、外企、私企等）</label></li><li><input type="radio" class="input-radio-style" value="3" name="questionnaire1"  id="questionnaire03"  /><label for="questionnaire03">C.私营业主</label></li><li><input type="radio" class="input-radio-style" value="4" name="questionnaire1"  id="questionnaire04"  /><label for="questionnaire04">D.无业（包括学生、自由职业及退休）</label></li></ul></dd></dl><dl><dt>2.您的婚姻状况</dt><dd><ul class="cf iqc_li"><li><input type="radio" class="input-radio-style" value="1" name="questionnaire2" id="questionnaire05" /><label for="questionnaire05">A.未婚</label></li><li><input type="radio" class="input-radio-style" value="2" name="questionnaire2" id="questionnaire06" /><label for="questionnaire06">B.已婚</label></li><li><input type="radio" class="input-radio-style" value="3" name="questionnaire2" id="questionnaire07" /><label for="questionnaire07">C.离异</label></li><li><input type="radio" class="input-radio-style" value="4" name="questionnaire2" id="questionnaire08" /><label for="questionnaire08">D.其他</label></li></ul></dd></dl><dl><dt>3.您投资的资金来源是？</dt><dd><ul class="cf iqc_li"><li><input type="radio" class="input-radio-style" name="questionnaire3" value="1" id="questionnaire09" /><label for="questionnaire09">A.薪资所得</label></li><li><input type="radio" class="input-radio-style" name="questionnaire3" value="2" id="questionnaire010" /><label for="questionnaire010">B.投资所得</label></li><li><input type="radio" class="input-radio-style" name="questionnaire3" value="3" id="questionnaire111" /><label for="questionnaire111">C.经营所得</label></li><li><input type="radio" class="input-radio-style" name="questionnaire3" value="4" id="questionnaire012" /><label for="questionnaire012">D.其他</label></li></ul></dd></dl><dl><dt>4.您计划的投资期限是？</dt><dd><ul class="cf"><li><input type="radio" class="input-radio-style" name="questionnaire4" value="1" id="questionnaire013" /><label for="questionnaire013">A.半年之内,我可能会随时动用投资资金，对其流动性要求很高</label></li><li><input type="radio" class="input-radio-style" value="2" name="questionnaire4" id="questionnaire014" /><label for="questionnaire014">B.半年至1年,为获得满意的收益，我一年内不会动用投资资金</label></li><li><input type="radio" class="input-radio-style" name="questionnaire4" value="3" id="questionnaire015" /><label for="questionnaire015">C.1年至3年，我会在相对较长的一段时间内进行投资，对流动性要求较低</label></li><li><input type="radio" value="4" class="input-radio-style" name="questionnaire4" id="questionnaire016" /><label for="questionnaire016">D.3年以上，为达到理财目标，我会持续的进行投资</label></li></ul></dd></dl><dl><dt>5.以下哪项最符合您的投资态度 ？</dt><dd><ul class="cf"><li><input type="radio" class="input-radio-style" name="questionnaire5" value="1" id="questionnaire017" /><label for="questionnaire017">A.本金百分百保障，即使投资收益率低于通货膨胀</label></li><li><input type="radio" class="input-radio-style" name="questionnaire5" value="2" id="questionnaire018" /><label for="questionnaire018">B.若能略高于市场理财产品平均回报，我可以承受本金10%以内的损失</label></li><li><input type="radio" class="input-radio-style" name="questionnaire5" value="3" id="questionnaire019" /><label for="questionnaire019">C.若能有较高投资回报，我可以承受本金30%以内的损失</label></li><li><input type="radio" class="input-radio-style" name="questionnaire5" value="4" id="questionnaire020" /><label for="questionnaire020">D.只要能取得高收益，即使本金损失超过50%，我亦可以承受</label></li></ul></dd></dl><dl><dt>6.本次投资占您总资产净值（不含投资物业、自住物业及紧急备用金）比例约为？</dt><dd><ul class="cf iqc_li"><li><input type="radio" class="input-radio-style" name="questionnaire6" value="1" id="questionnaire021" /><label for="questionnaire021">A.小于10%</label></li><li><input type="radio" class="input-radio-style" name="questionnaire6" value="2" id="questionnaire022" /><label for="questionnaire022">B.10%至25%</label></li><li><input type="radio" class="input-radio-style" name="questionnaire6" value="3" id="questionnaire023" /><label for="questionnaire023">C.25%至50% </label></li><li><input type="radio" class="input-radio-style" name="questionnaire6" value="4" id="questionnaire024" /><label for="questionnaire024">D.大于50%</label></li></ul></dd></dl><dl><dt>7.您曾有过的投资经验是（包括并不仅限于储蓄、定存、存款证明、债券、基金、结构性票据、挂钩存款、股票、P2P、网贷、信托、黄金、房地产等）？</dt><dd><ul class="cf iqc_li"><li><input type="radio" class="input-radio-style" name="questionnaire7" value="1" id="questionnaire025" /><label for="questionnaire025">A.无任何投资经验</label></li><li><input type="radio" class="input-radio-style" name="questionnaire7" value="2" id="questionnaire026" /><label for="questionnaire026">B.1年以下</label></li><li><input type="radio" class="input-radio-style" name="questionnaire7" value="3" id="questionnaire027" /><label for="questionnaire027">C.1年至3年 </label></li><li><input type="radio" class="input-radio-style" name="questionnaire7" value="4" id="questionnaire028" /><label for="questionnaire028">D.超过3年</label></li></ul></dd></dl><dl><dt>8.您或您的家属是否依赖目前投资回报及本金支付日常生活开支？</dt><dd><ul class="cf"><li><input type="radio" class="input-radio-style" name="questionnaire8" value="1" id="questionnaire029" /><label for="questionnaire029">A.是的，我需要依赖现有投资回报支付日常生活开支</label></li><li><input type="radio" class="input-radio-style" name="questionnaire8" value="2" id="questionnaire030" /><label for="questionnaire030">B.是的，我需要依赖本笔投资本金支付日常生活开支</label></li><li><input type="radio" class="input-radio-style" name="questionnaire8" value="3" id="questionnaire031" /><label for="questionnaire031">C.短期内不需要动用投资回报，但未来可能需要提取部分以维持日常生活 </label></li><li><input type="radio" class="input-radio-style" name="questionnaire8" value="4" id="questionnaire032" /><label for="questionnaire032">D.不需要，我的所有投资全部为财富积累</label></li></ul></dd></dl><dl><dt>9.您是否清楚知晓投资P2P、网贷类产品需要一定风险承受能力？</dt><dd><ul class="cf iqc_li"><li><input type="radio" class="input-radio-style" name="questionnaire9" value="1" id="questionnaire033" /><label for="questionnaire033">A.是</label></li><li><input type="radio" class="input-radio-style" name="questionnaire9" value="2" id="questionnaire034" /><label for="questionnaire034">B.否</label></li></ul></dd></dl><dl><dt>10.您是否确认投资资金系本人合法所有财产，且投资行为经本人亲自确认？</dt><dd><ul class="cf iqc_li"><li><input type="radio" class="input-radio-style" name="questionnaire10" value="1" id="questionnaire035" /><label for="questionnaire035">A.是</label></li><li><input type="radio" class="input-radio-style" name="questionnaire10" value="2" id="questionnaire036" /><label for="questionnaire036">B.否</label></li></ul></dd></dl></div><div class="iqc_ps2-btn cf"><ul class="ps1-form" style="float:left; padding-left:18px;"><li style="margin-top:0;"><label style="width:55px;">验证码:</label><input type="text" maxlength="4" size="8" class="ps1-txt valicode_2" style="width:87px; margin-right:5px;" /><img src="" height="30" alt="点击刷新" class="yanzhengma3" style="display:none;" /></li></ul><input type="submit" class="ps2-btn" value="确认提交" style="float:left;" /></div></form></div></div></div></div>');
		
		$("body").append('<div class="index_questionnaire_win pop-style-2" id="index_questionnaire_win" style="display:none;" ><div class="ps1-error" style="display:none; top:24px; left:180px; width:120px;"></div><a class="ps2-close" href="#">X</a><div class="ps2-con cf"><h2>问卷结果</h2><div class="ps2-txt-con cf"><div class="index_questionnaire_prompt"><p>问卷得分：<strong id="wenjuandefen"></strong></p></div><div class="ps2-submit cf"><h3>得分说明</h3><table width="260" border="1" class="index_questionnaire_value"><tr><th>得分结果</th><th>风险偏好</th></tr><tr><td>0-49<br/>50-79<br/>80-100</td><td>风险厌恶型<br/>风险适中型<br/>风险偏好型</td></tr></table><dl id="diaochashengming" style="display:none;"><dt>爱投资申明：</dt><dd>1、本测评得分帮助您判断是否适合在爱投资平台进行投资，若得分低于50分，则意味您目前状况不适宜通过爱投资平台进行任何投资，请您谅解；<br/>2、本次风险测评结果不可视为任何投资产品的销售或购买邀请；<br/>3、若您有任何疑问，请致电爱投资客服代表进行咨询。<br/><strong>客服电话：400-600-4300</strong></dd></dl><div class="iqc_ps2-btn"><input type="submit" class="ps2-btn" value="确定" /></div></div></div></div></div>');
	}
		var index_questionnaire = $("#index_questionnaire"),
			index_questionnaire_win = $("#index_questionnaire_win");
		
		index_questionnaire.find(".valicode_2").one("click",function(){
			index_questionnaire.find(".yanzhengma3")[0].src="/plugins/index.php?q=imgcode&amp;t="+Math.random();
			index_questionnaire.find(".yanzhengma3").show();
		});
		
		index_questionnaire.find(".yanzhengma3").click(function(){
			index_questionnaire.find(".yanzhengma3")[0].src="/plugins/index.php?q=imgcode&amp;t="+Math.random();
		});
		
		index_questionnaire.dialog({
			dialogClass:"clearPop box-shadow-5",
			modal: true,
			width:650,
			open:function(){
				
			}
		});
		
		index_questionnaire.find(":radio").removeAttr("checked");
		index_questionnaire.find(".ps1-error").css("display","none");
		index_questionnaire.find(".valicode_2").val("");
		$("#diaochashengming").hide();
		
		index_questionnaire.find(":radio").click(function(){
			$(this).parents("dl").find("dt b").remove();
		})
		
		index_questionnaire.find("form").submit(function(){
			
			var that = $(this),
				eleRedio = null,
				state = true,
				arr = {};
				
			for(var i = 1;i < 11 ; i++){
				eleRedio = $(this['questionnaire'+i]);
				eleRedioDt = eleRedio.parents("dl").find("dt");
				if(!eleRedio.is(":checked")){
					if(!eleRedioDt.find("b").length){
						eleRedioDt.append("<b>此项未选择</b>");
					}
					state = false;
				}else{
					if(eleRedioDt.find("b").length > 0){
						eleRedioDt.find("b").remove();
					}
					arr['questionnaire'+i] = function(){
						for(var x=0 ;x < eleRedio.length ;x++){
							if($(eleRedio[x]).is(":checked")){
								return eleRedio[x].value;
							}
						}
					}();
				}
			}
			
			if(!state){
				return false;
			}
			var ajaxData = $.extend(arr,{valicode:index_questionnaire.find(".valicode_2").val()});
			$.ajax({
				url:'/index.php?user&q=action/addqnlog',
				type:"POST",
				dataType:"json",
				data:ajaxData,
				timeout:10000,
				beforeSend:function(jqXHR,settings){
					$("#index_questionnaire .ps2-txt-con").append('<img src="/themes/ruizhict/static/css/img/blue-loading.gif" style="margin-top:82px;position:absolute;top:642px; right:200px" id="loginloding"/>');
				},
				error: function(jqXHR,textStatus,errorThrown){
					if(textStatus == "timeout"){
						$("#index_questionnaire .ps2-txt-con #loginloding").remove();
					}
				},
				success:function(data){
					$("#index_questionnaire .ps2-txt-con #loginloding").remove();
					if(data.code == 1){
						index_questionnaire.find(".ps1-error").text("请填写验证码").show();
						index_questionnaire.find(".yanzhengma3")[0].src="/plugins/index.php?q=imgcode&amp;t="+Math.random();
					}else if(data.code == 2){
						index_questionnaire.find(".ps1-error").text("验证码不正确").show();
						index_questionnaire.find(".yanzhengma3")[0].src="/plugins/index.php?q=imgcode&amp;t="+Math.random();
					}else if(data.code==0){
						if(data.score < 50){
							$("#diaochashengming").show();
						}
						setTimeout(function(){
							index_questionnaire.dialog("close");
							index_questionnaire_win.dialog({
								dialogClass:"clearPop box-shadow-5",
								resizable:false,
								modal: true,
								width:500,
								open:function(){
									$("#wenjuandefen").text(data.score);
									window.User.qn_score = data.score;
								}
							});
						},1000);
					}
				}
			});
			return false;
		});
		
		index_questionnaire.find(".ps2-close").click(function(){
			index_questionnaire.dialog("close");
			return false;
		});
		
		index_questionnaire_win.find(".ps2-close").click(function(){
			index_questionnaire_win.dialog("close");
			return false;
		});
		
		index_questionnaire_win.find("input").click(function(){
			index_questionnaire_win.dialog("close");
			fn(window.User.qn_score);
			return false;
		});
};
delayGetScript(loadState,function(data){
		var arg1 = $("#form-invest-confirm").attr("data-arg-one"),
		      arg2 = $("#form-invest-confirm").attr("data-arg-two");
		var url = function(arg4){
			var arg3 = arg4?arg4:shortAmount;
			return "/index.php?user&q=code/account/recharge_new&recharge_amount="+arg3+"&ret_url="+arg1+"&invest_amount="+arg2;
		};
		
		var virtual_money = $("#virtual_money"),
			remain_amount_id = $("#remain_amount"),
			rai_val = parseFloat(remain_amount_id.text()),
			cur_reward_money_id = $("#cur_reward_money"),
			crm_val = parseFloat(cur_reward_money_id.text()),
			shortAmount_id = $("#shortAmount"),
			sa_val = parseFloat(shortAmount_id.text()),
			top_up_id = $("#top_up"),
			tu_val = shortAmount,
			balance = $("#balance");
			
		function yunsuan(that){
			var re = /[`~!@#\$%\^\&\*\(\)_\-\=\+<>\?:"\{\}\＠\￥\……\·\〈\〉\。\＼\、\“\”\"\"\;\；\'\'\’\》\‘\：\？\＞\＜\（\）\＊\！\,\——\＆\｜\＼\）\，\《\\\/;'\[\]a-zA-Z\u4e00-\u9fa5]/im;
			
			var thisVal = that.val($.trim(that.val()));

			if( $.makeArray(that.val().match(/\./g)).length > 1 ||  $.makeArray(that.val().match(re)).length > 0 || that.val() == "." ){
				that.val("");
			}
			
			var thatVal = that.val() ? parseFloat(that.val()) : 0;
			
			if(!/^(-)?(([1-9]{1}\d*)|([0]{1}))(\.(\d){1,2})?$/.test(thatVal)){
				that.val(thatVal.toFixed(2));
			}
			
			var thatVal = that.val() ? parseFloat(that.val()) : 0;
			
			var mathMin = Math.min(cur_reward_money,cur_invest_money);
			
			if( thatVal > mathMin ){
				
				that.val(mathMin);
				thatVal = parseFloat(that.val());
			
			}			
			
			var sum = user_money + thatVal;
			
			if( sum >= cur_invest_money ){
			
				return {
					val2 : sum - cur_invest_money,
					val3 : cur_reward_money - thatVal,
					type : 1
				}
			
			}else{
				
				return{
					val2 : cur_invest_money - sum,
					val3 : cur_reward_money - thatVal,
					type : 0
				}
				
			}
		}
		
		function checkYunSuan(that){
			var thatVal = yunsuan(that);
			
			if(thatVal.type == "1"){
				cur_reward_money_id.text(thatVal.val3.toFixed(2));
				balance.find(".td-name").text("投资后余额：");
				balance.find(".td-value strong").text(thatVal.val2.toFixed(2)).css("color","#CB282D");
				balance.find(".td-operate").hide();
			}else{
				cur_reward_money_id.text(thatVal.val3.toFixed(2));
				balance.find(".td-name").text("还需金额：");
				balance.find(".td-value strong").text(thatVal.val2.toFixed(2)).css("color","#2C981E");
				balance.find(".td-operate").show();
				top_up_id.attr("href",url(thatVal.val2.toFixedOne(2)));
			}
		}

		virtual_money.val(cur_invest_money);
			
		checkYunSuan(virtual_money);
			
		virtual_money.keypress(function(){
			yunsuan($(this));
		})
			
		virtual_money.keyup(function(){
			var that = $(this);
				checkYunSuan(that);
		})
		
		if(window.User.real_status && window.User.real_status > 0 && window.User.qn_score < 10){
			index_questionnaire_fun(window.User.real_name,function(num){});
		}
		
		var $form = $('#form-invest-confirm');
		$form.validate({
			submitHandler: function(form, e) {
				account = form['money'].value;
				if (account==""){
					alert("投标金额不能为空");
					return false;
				}else if (account>use_money ){
					alert("您的可用余额小于您的投标额，要投标请先充值。");
					return false;
				}else if (account>most && most>0){
					alert("投标金额不能大于最大限额"+most+"元");
					return false;
				}else if(account<lowest && lowest>0){
					alert("投标金额不能低于最小限额"+lowest+"元");
					return false;
				}
				return true;	
			}
		});

		$form.find('[name=paypassword]').rules("add", {
			required: true,
			messages: {
				required: '请输入支付密码'
			}
		});

		$form.find('[name=agree-protocol]').rules("add", {
			required: true,
			messages: {
				required: '您未同意借款协议'
			}
		});

		$form.submit(function(){
			if($form.valid()){
				if($form.data("data-submit")){
					return false;
				}
				$form.data("data-submit","true");
			}
			return true;
		})
		
		$(".btn-bk").hover(function(){
			$(this).addClass("btn-bk-hover");
		},function(){
			$(this).removeClass("btn-bk-hover");
		});

		//投资金额选定功能
		$('.btn-invest-imm, .btn-modify-investment').click(function(e){
			e.preventDefault();
			var options = eval('('+$(this).attr("data-invest-amount-configs")+')');
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
		});

		if($(".vcode").data("triggerType")!="true"){
			$(".vcode").data("triggerType","true").find("img").trigger("click");
		}
})