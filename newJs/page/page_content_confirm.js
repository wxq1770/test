var jsPath = "/themes/ruizhict/static/newJs/plugins/",
	loadState = [
				jsPath+"jquery.itz.AmountInput.js",//Ͷ�ʵ������϶����
				jsPath+"tipsWindow.js",//��������
				jsPath+"jquery.watermark.min.js",
				jsPath+"jquery-lightbox/jquery.lightbox.js"//��������
				];
var index_questionnaire_fun = function(real_name,fn){
	if(!$("#index_questionnaire").length){
		$("body").append('<div class="index_questionnaire pop-style-2" id="index_questionnaire" style="display:none;"><div class="ps1-error" style="display:none; top:702px; left:79px; width:74px;"></div><a class="ps2-close"  href="#">X</a><div class="ps2-con cf"><h2 style="text-align:center;">��Ͷ�ʸ��˿ͻ����ղ����ʾ�</h2><div class="ps2-txt-con cf"><div class="index_questionnaire_hi">�װ��İ�Ͷ���û���<strong>'+real_name+'</strong> ���ã�</div><div class="index_questionnaire_prompt"><p><strong>��Ҫ��ʾ��������ϸ�Ķ�</strong><br/>1���ڰ�Ͷ������ƽ̨�״�Ͷ��ǰ����������������ʵ�����д���ʾ�<br/>2����Ͷ�ʹ�����������Ͷ�ʣ��ڴˣ����������з��ս�ʾ��Ͷ���з��գ���������Ͷ�ʡ�Ͷ�ʿ����漰���������������ڱ���Ҹ����г��������ԡ����ʡ����á����ʡ���˰�ȸ�����ա� </p></div><div class="ps2-submit cf"><h3>��������������ʵ���������</h3><form><div class="index_questionnaire_con"><dl><dt>1.�������µ�ְҵ�ǣ�</dt><dd><ul class="cf iqc_li"><li><input type="radio" class="input-radio-style" value="1" name="questionnaire1" id="questionnaire01" /><label for="questionnaire01">A.����/��ҵ��λ��Ա</label></li><li><input type="radio" class="input-radio-style" value="2" name="questionnaire1"  id="questionnaire02"  /><label for="questionnaire02">B.��ҵ��Ա��������������˽��ȣ�</label></li><li><input type="radio" class="input-radio-style" value="3" name="questionnaire1"  id="questionnaire03"  /><label for="questionnaire03">C.˽Ӫҵ��</label></li><li><input type="radio" class="input-radio-style" value="4" name="questionnaire1"  id="questionnaire04"  /><label for="questionnaire04">D.��ҵ������ѧ��������ְҵ�����ݣ�</label></li></ul></dd></dl><dl><dt>2.���Ļ���״��</dt><dd><ul class="cf iqc_li"><li><input type="radio" class="input-radio-style" value="1" name="questionnaire2" id="questionnaire05" /><label for="questionnaire05">A.δ��</label></li><li><input type="radio" class="input-radio-style" value="2" name="questionnaire2" id="questionnaire06" /><label for="questionnaire06">B.�ѻ�</label></li><li><input type="radio" class="input-radio-style" value="3" name="questionnaire2" id="questionnaire07" /><label for="questionnaire07">C.����</label></li><li><input type="radio" class="input-radio-style" value="4" name="questionnaire2" id="questionnaire08" /><label for="questionnaire08">D.����</label></li></ul></dd></dl><dl><dt>3.��Ͷ�ʵ��ʽ���Դ�ǣ�</dt><dd><ul class="cf iqc_li"><li><input type="radio" class="input-radio-style" name="questionnaire3" value="1" id="questionnaire09" /><label for="questionnaire09">A.н������</label></li><li><input type="radio" class="input-radio-style" name="questionnaire3" value="2" id="questionnaire010" /><label for="questionnaire010">B.Ͷ������</label></li><li><input type="radio" class="input-radio-style" name="questionnaire3" value="3" id="questionnaire111" /><label for="questionnaire111">C.��Ӫ����</label></li><li><input type="radio" class="input-radio-style" name="questionnaire3" value="4" id="questionnaire012" /><label for="questionnaire012">D.����</label></li></ul></dd></dl><dl><dt>4.���ƻ���Ͷ�������ǣ�</dt><dd><ul class="cf"><li><input type="radio" class="input-radio-style" name="questionnaire4" value="1" id="questionnaire013" /><label for="questionnaire013">A.����֮��,�ҿ��ܻ���ʱ����Ͷ���ʽ𣬶���������Ҫ��ܸ�</label></li><li><input type="radio" class="input-radio-style" value="2" name="questionnaire4" id="questionnaire014" /><label for="questionnaire014">B.������1��,Ϊ�����������棬��һ���ڲ��ᶯ��Ͷ���ʽ�</label></li><li><input type="radio" class="input-radio-style" name="questionnaire4" value="3" id="questionnaire015" /><label for="questionnaire015">C.1����3�꣬�һ�����Խϳ���һ��ʱ���ڽ���Ͷ�ʣ���������Ҫ��ϵ�</label></li><li><input type="radio" value="4" class="input-radio-style" name="questionnaire4" id="questionnaire016" /><label for="questionnaire016">D.3�����ϣ�Ϊ�ﵽ���Ŀ�꣬�һ�����Ľ���Ͷ��</label></li></ul></dd></dl><dl><dt>5.�����������������Ͷ��̬�� ��</dt><dd><ul class="cf"><li><input type="radio" class="input-radio-style" name="questionnaire5" value="1" id="questionnaire017" /><label for="questionnaire017">A.����ٷְٱ��ϣ���ʹͶ�������ʵ���ͨ������</label></li><li><input type="radio" class="input-radio-style" name="questionnaire5" value="2" id="questionnaire018" /><label for="questionnaire018">B.�����Ը����г���Ʋ�Ʒƽ���ر����ҿ��Գ��ܱ���10%���ڵ���ʧ</label></li><li><input type="radio" class="input-radio-style" name="questionnaire5" value="3" id="questionnaire019" /><label for="questionnaire019">C.�����нϸ�Ͷ�ʻر����ҿ��Գ��ܱ���30%���ڵ���ʧ</label></li><li><input type="radio" class="input-radio-style" name="questionnaire5" value="4" id="questionnaire020" /><label for="questionnaire020">D.ֻҪ��ȡ�ø����棬��ʹ������ʧ����50%��������Գ���</label></li></ul></dd></dl><dl><dt>6.����Ͷ��ռ�����ʲ���ֵ������Ͷ����ҵ����ס��ҵ���������ý𣩱���ԼΪ��</dt><dd><ul class="cf iqc_li"><li><input type="radio" class="input-radio-style" name="questionnaire6" value="1" id="questionnaire021" /><label for="questionnaire021">A.С��10%</label></li><li><input type="radio" class="input-radio-style" name="questionnaire6" value="2" id="questionnaire022" /><label for="questionnaire022">B.10%��25%</label></li><li><input type="radio" class="input-radio-style" name="questionnaire6" value="3" id="questionnaire023" /><label for="questionnaire023">C.25%��50% </label></li><li><input type="radio" class="input-radio-style" name="questionnaire6" value="4" id="questionnaire024" /><label for="questionnaire024">D.����50%</label></li></ul></dd></dl><dl><dt>7.�����й���Ͷ�ʾ����ǣ��������������ڴ�����桢���֤����ծȯ�����𡢽ṹ��Ʊ�ݡ��ҹ�����Ʊ��P2P�����������С��ƽ𡢷��ز��ȣ���</dt><dd><ul class="cf iqc_li"><li><input type="radio" class="input-radio-style" name="questionnaire7" value="1" id="questionnaire025" /><label for="questionnaire025">A.���κ�Ͷ�ʾ���</label></li><li><input type="radio" class="input-radio-style" name="questionnaire7" value="2" id="questionnaire026" /><label for="questionnaire026">B.1������</label></li><li><input type="radio" class="input-radio-style" name="questionnaire7" value="3" id="questionnaire027" /><label for="questionnaire027">C.1����3�� </label></li><li><input type="radio" class="input-radio-style" name="questionnaire7" value="4" id="questionnaire028" /><label for="questionnaire028">D.����3��</label></li></ul></dd></dl><dl><dt>8.�������ļ����Ƿ�����ĿǰͶ�ʻر�������֧���ճ����֧��</dt><dd><ul class="cf"><li><input type="radio" class="input-radio-style" name="questionnaire8" value="1" id="questionnaire029" /><label for="questionnaire029">A.�ǵģ�����Ҫ��������Ͷ�ʻر�֧���ճ����֧</label></li><li><input type="radio" class="input-radio-style" name="questionnaire8" value="2" id="questionnaire030" /><label for="questionnaire030">B.�ǵģ�����Ҫ��������Ͷ�ʱ���֧���ճ����֧</label></li><li><input type="radio" class="input-radio-style" name="questionnaire8" value="3" id="questionnaire031" /><label for="questionnaire031">C.�����ڲ���Ҫ����Ͷ�ʻر�����δ��������Ҫ��ȡ������ά���ճ����� </label></li><li><input type="radio" class="input-radio-style" name="questionnaire8" value="4" id="questionnaire032" /><label for="questionnaire032">D.����Ҫ���ҵ�����Ͷ��ȫ��Ϊ�Ƹ�����</label></li></ul></dd></dl><dl><dt>9.���Ƿ����֪��Ͷ��P2P���������Ʒ��Ҫһ�����ճ���������</dt><dd><ul class="cf iqc_li"><li><input type="radio" class="input-radio-style" name="questionnaire9" value="1" id="questionnaire033" /><label for="questionnaire033">A.��</label></li><li><input type="radio" class="input-radio-style" name="questionnaire9" value="2" id="questionnaire034" /><label for="questionnaire034">B.��</label></li></ul></dd></dl><dl><dt>10.���Ƿ�ȷ��Ͷ���ʽ�ϵ���˺Ϸ����вƲ�����Ͷ����Ϊ����������ȷ�ϣ�</dt><dd><ul class="cf iqc_li"><li><input type="radio" class="input-radio-style" name="questionnaire10" value="1" id="questionnaire035" /><label for="questionnaire035">A.��</label></li><li><input type="radio" class="input-radio-style" name="questionnaire10" value="2" id="questionnaire036" /><label for="questionnaire036">B.��</label></li></ul></dd></dl></div><div class="iqc_ps2-btn cf"><ul class="ps1-form" style="float:left; padding-left:18px;"><li style="margin-top:0;"><label style="width:55px;">��֤��:</label><input type="text" maxlength="4" size="8" class="ps1-txt valicode_2" style="width:87px; margin-right:5px;" /><img src="" height="30" alt="���ˢ��" class="yanzhengma3" style="display:none;" /></li></ul><input type="submit" class="ps2-btn" value="ȷ���ύ" style="float:left;" /></div></form></div></div></div></div>');
		
		$("body").append('<div class="index_questionnaire_win pop-style-2" id="index_questionnaire_win" style="display:none;" ><div class="ps1-error" style="display:none; top:24px; left:180px; width:120px;"></div><a class="ps2-close" href="#">X</a><div class="ps2-con cf"><h2>�ʾ���</h2><div class="ps2-txt-con cf"><div class="index_questionnaire_prompt"><p>�ʾ�÷֣�<strong id="wenjuandefen"></strong></p></div><div class="ps2-submit cf"><h3>�÷�˵��</h3><table width="260" border="1" class="index_questionnaire_value"><tr><th>�÷ֽ��</th><th>����ƫ��</th></tr><tr><td>0-49<br/>50-79<br/>80-100</td><td>���������<br/>����������<br/>����ƫ����</td></tr></table><dl id="diaochashengming" style="display:none;"><dt>��Ͷ��������</dt><dd>1���������÷ְ������ж��Ƿ��ʺ��ڰ�Ͷ��ƽ̨����Ͷ�ʣ����÷ֵ���50�֣�����ζ��Ŀǰ״��������ͨ����Ͷ��ƽ̨�����κ�Ͷ�ʣ������½⣻<br/>2�����η��ղ������������Ϊ�κ�Ͷ�ʲ�Ʒ�����ۻ������룻<br/>3���������κ����ʣ����µ簮Ͷ�ʿͷ����������ѯ��<br/><strong>�ͷ��绰��400-600-4300</strong></dd></dl><div class="iqc_ps2-btn"><input type="submit" class="ps2-btn" value="ȷ��" /></div></div></div></div></div>');
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
						eleRedioDt.append("<b>����δѡ��</b>");
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
						index_questionnaire.find(".ps1-error").text("����д��֤��").show();
						index_questionnaire.find(".yanzhengma3")[0].src="/plugins/index.php?q=imgcode&amp;t="+Math.random();
					}else if(data.code == 2){
						index_questionnaire.find(".ps1-error").text("��֤�벻��ȷ").show();
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
			var re = /[`~!@#\$%\^\&\*\(\)_\-\=\+<>\?:"\{\}\��\��\����\��\��\��\��\��\��\��\��\"\"\;\��\'\'\��\��\��\��\��\��\��\��\��\��\��\,\����\��\��\��\��\��\��\\\/;'\[\]a-zA-Z\u4e00-\u9fa5]/im;
			
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
				balance.find(".td-name").text("Ͷ�ʺ���");
				balance.find(".td-value strong").text(thatVal.val2.toFixed(2)).css("color","#CB282D");
				balance.find(".td-operate").hide();
			}else{
				cur_reward_money_id.text(thatVal.val3.toFixed(2));
				balance.find(".td-name").text("�����");
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
					alert("Ͷ�����Ϊ��");
					return false;
				}else if (account>use_money ){
					alert("���Ŀ������С������Ͷ��ҪͶ�����ȳ�ֵ��");
					return false;
				}else if (account>most && most>0){
					alert("Ͷ����ܴ�������޶�"+most+"Ԫ");
					return false;
				}else if(account<lowest && lowest>0){
					alert("Ͷ����ܵ�����С�޶�"+lowest+"Ԫ");
					return false;
				}
				return true;	
			}
		});

		$form.find('[name=paypassword]').rules("add", {
			required: true,
			messages: {
				required: '������֧������'
			}
		});

		$form.find('[name=agree-protocol]').rules("add", {
			required: true,
			messages: {
				required: '��δͬ����Э��'
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

		//Ͷ�ʽ��ѡ������
		$('.btn-invest-imm, .btn-modify-investment').click(function(e){
			e.preventDefault();
			var options = eval('('+$(this).attr("data-invest-amount-configs")+')');
			new $.itz.AmountInput($('#invest-amount'), options);
			$('#panel-input-invest-money').find('form').attr('action', $(this).attr('href') + '?detail=true');
				if(ie6){
					setTimeout(function(){
						$('#panel-input-invest-money').dialog({
							title: '��дͶ�ʽ��',
							width: 510,
							modal: true,
							show: {effect:'fade', duration:200}
						});
					},700)
				}else{
					$('#panel-input-invest-money').dialog({
						title: '��дͶ�ʽ��',
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