 /**
 * jQuery Validation Plugin 1.11.0pre
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 */

var sensitiveWord = ["bitch","shit","falun","tianwang","cdjp","bignews","boxun","chinaliberal","chinamz","chinesenewsnet","cnd","creaders","dafa","dajiyuan","dfdz","dpp","falu","falundafa","flg","freechina","freenet","fuck","GCD","hongzhi","hrichina","huanet","hypermart","incest","jiangdongriji","lihongzhi","making","minghui","minghuinews","nacb","naive","nmis","paper","peacehall","playboy","renminbao","renmingbao","rfa","safeweb","sex","simple","svdc","taip","tibetalk","triangle","triangleboy","UltraSurf","unixbox","ustibet","voa","wangce","wstaiji","xinsheng","yuming","zhengjian","zhengjianwang","zhenshanren","zhuanfalun","xxx","anime","censor","hentai","[hz]","(hz)","[av]","(av)","[sm]","(sm)","porn","multimedia","toolbar","downloader","顶级","女優","小泽玛莉亚","强歼","乱交","色友","婊子","蒲团","美女","女女","喷尿","绝版","三級","武腾兰","凌辱","暴干","诱惑","阴唇","小泽圆","插插","坐交","長瀨愛","川島和津實","草莓牛奶","小澤園","飯島愛","星崎未來","及川奈央","朝河蘭","夕樹舞子","大澤惠","金澤文子","三浦愛佳","伊東","慰安妇","女教師","武藤蘭","学生妹","无毛","猛插","护士","自拍","A片","A级","喷精","偷窥","小穴","大片","被虐","黄色","被迫","被逼","强暴","口技","破处","精液","幼交","狂干","兽交","群交","叶子楣","舒淇","翁虹","大陆","露点","露毛","武藤兰","饭岛爱","波霸","少儿不宜","成人","偷情","叫床","上床","制服","亚热","援交","走光","情色","肉欲","美腿","自摸","18禁","捆绑","丝袜","潮吹","肛交","黄片","群射","内射","少妇","卡通","臭作","薄格","調教","近親","連發","限制","乱伦","母子","偷拍","更衣","無修正","一本道","1Pondo","櫻井","風花","夜勤病栋","菱恝","虐待","激情","麻衣","三级","吐血","三个代表","一党","多党","民主","专政","行房","自慰","吹萧","色狼","胸罩","内裤","底裤","私处","爽死","变态","妹疼","妹痛","弟疼","弟痛","姐疼","姐痛","哥疼","哥痛","同房","打炮","造爱","作爱","做爱","鸡巴","阴茎","阳具","开苞","肛门","阴道","阴蒂","肉棍","肉棒","肉洞","荡妇","阴囊","睾丸","捅你","捅我","插我","插你","插她","插他","干你","干她","干他","射精","口交","屁眼","阴户","阴门","下体","龟头","阴毛","避孕套","你妈逼","大鸡巴","高潮","政治","大法","弟子","大纪元","真善忍","明慧","洪志","红志","洪智","红智","法轮","法论","法沦","法伦","发轮","发论","发沦","发伦","轮功","轮公","轮攻","沦功","沦公","沦攻","论攻","论功","论公","伦攻","伦功","伦公","打倒","民运","六四","台独","王丹","柴玲","李鹏","天安门","江泽民","朱容基","朱镕基","李长春","李瑞环","胡锦涛","魏京生","台湾独立","藏独","西藏独立","疆独","新疆独立","警察","民警","公安","邓小平","大盖帽","革命","武警","黑社会","交警","消防队","刑警","夜总会","妈个","公款","首长","书记","坐台","腐败","城管","暴动","暴乱","李远哲","司法警官","高干","人大","尉健行","李岚清","黄丽满","于幼军","文字狱","宋祖英","自焚","骗局","猫肉","吸储","张五常","张丕林","空难","温家宝","吴邦国","曾庆红","黄菊","罗干","吴官正","贾庆林","专制","三個代表","一黨","多黨","專政","大紀元","紅志","紅智","法輪","法論","法淪","法倫","發輪","發論","發淪","發倫","輪功","輪公","輪攻","淪功","淪公","淪攻","論攻","論功","論公","倫攻","倫功","倫公","民運","台獨","李鵬","天安門","江澤民","朱鎔基","李長春","李瑞環","胡錦濤","臺灣獨立","藏獨","西藏獨立","疆獨","新疆獨立","鄧小平","大蓋帽","黑社會","消防隊","夜總會","媽個","首長","書記","腐敗","暴動","暴亂","李遠哲","高幹","李嵐清","黃麗滿","於幼軍","文字獄","騙局","貓肉","吸儲","張五常","張丕林","空難","溫家寶","吳邦國","曾慶紅","黃菊","羅幹","賈慶林","專制","八九","八老","巴赫","白立朴","白梦","白皮书","保钓","鲍戈","鲍彤","暴政","北大三角地论坛","北韩","北京当局","北京之春","北美自由论坛","博讯","蔡崇国","曹长青","曹刚川","常劲","陈炳基","陈军","陈蒙","陈破空","陈希同","陈小同","陈宣良","陈一谘","陈总统","程凯","程铁军","程真","迟浩田","持不同政见","赤匪","赤化","春夏自由论坛","达赖","大参考","大纪元新闻网","大纪园","大家论坛","大史","大史记","大史纪","大中国论坛","大中华论坛","大众真人真事","戴相龙","弹劾","登辉","邓笑贫","迪里夏提","地下教会","地下刊物","第四代","电视流氓","钓鱼岛","丁关根","丁元","丁子霖","东北独立","东方红时空","东方时空","东南西北论谈","东社","东土耳其斯坦","东西南北论坛","动乱","独裁","独夫","独立台湾会","杜智富","多维","屙民","俄国","发愣","发正念","反封锁技术","反腐败论坛","反攻","反共","反人类","反社会","方励之","方舟子","飞扬论坛","斐得勒","费良勇","分家在","分裂","粉饰太平","风雨神州","风雨神州论坛","封从德","封杀","冯东海","冯素英","佛展千手法","付申奇","傅申奇","傅志寰","高官","高文谦","高薪养廉","高瞻","高自联","戈扬","鸽派","歌功颂德","蛤蟆","个人崇拜","工自联","功法","共产","共党","共匪","共狗","共军","关卓中","贯通两极法","广闻","郭伯雄","郭罗基","郭平","郭岩华","国家安全","国家机密","国军","国贼","韩东方","韩联潮","何德普","何勇","河殇","红灯区","红色恐怖","宏法","洪传","洪吟","洪哲胜","胡紧掏","胡锦滔","胡锦淘","胡景涛","胡平","胡总书记","护法","花花公子","华建敏","华通时事论坛","华夏文摘","华语世界论坛","华岳时事论坛","黄慈萍","黄祸","黄菊　","黄翔","回民暴动","悔过书","鸡毛信文汇","姬胜德","积克馆","基督","贾廷安","贾育台","建国党","江core","江八点","江流氓","江罗","江绵恒","江青","江戏子","江则民","江泽慧","江贼","江贼民","江折民","江猪","江猪媳","江主席","姜春云","将则民","僵贼","僵贼民","讲法","酱猪媳","交班","教养院","接班","揭批书","金尧如","锦涛","禁看","经文","开放杂志","看中国","抗议","邝锦文","劳动教养所","劳改","劳教","老江","老毛","黎安友","李大师","李登辉","李红痔","李宏志","李洪宽","李继耐","李兰菊","李老师","李录","李禄","李少民","李淑娴","李旺阳","李文斌","李小朋","李小鹏","李月月鸟","李志绥","李总理","李总统","连胜德","联总","廉政大论坛","炼功","梁光烈","梁擎墩","两岸关系","两岸三地论坛","两个中国","两会","两会报道","两会新闻","廖锡龙","林保华","林长盛","林樵清","林慎立","凌锋","刘宾深","刘宾雁","刘刚","刘国凯","刘华清","刘俊国","刘凯中","刘千石","刘青","刘山青","刘士贤","刘文胜","刘晓波","刘晓竹","刘永川","流亡","龙虎豹","陆委会","吕京花","吕秀莲","抡功","轮大","罗礼诗","马大维","马良骏","马三家","马时敏","卖国","毛厕洞","毛贼东","美国参考","美国之音","蒙独","蒙古独立","密穴","绵恒","民国","民进党","民联","民意","民意论坛","民阵","民猪","民主墙","民族矛盾","莫伟强","木犀地","木子论坛","南大自由论坛","闹事","倪育贤","你说我说论坛","潘国平","泡沫经济","迫害","祁建","齐墨","钱达","钱国梁","钱其琛","抢粮记","乔石","亲美","钦本立","秦晋","轻舟快讯","情妇","庆红","全国两会","热比娅","热站政论网","人民报","人民内情真相","人民真实","人民之声论坛","人权","瑞士金融大学","善恶有报","上海帮","上海孤儿院","邵家健","神通加持法","沈彤","升天","盛华仁","盛雪","师父","石戈","时代论坛","时事论坛","世界经济导报","事实独立","双十节","水扁","税力","司马晋","司马璐","司徒华","斯诺","四川独立","宋平","宋书元","苏绍智","苏晓康","台盟","台湾狗","台湾建国运动组织","台湾青年独立联盟","台湾政论区","台湾自由联盟","太子党","汤光中","唐柏桥","唐捷","滕文生","天怒","天葬","童屹","统独","统独论坛","统战","屠杀","外交论坛","外交与方略","万润南","万维读者论坛","万晓东","汪岷","王宝森","王炳章","王策","王超华","王辅臣","王刚","王涵万","王沪宁","王军涛","王力雄","王瑞林","王润生","王若望","王希哲","王秀丽","王冶坪","网特","魏新生","温元凯","文革","无界浏览器","吴百益","吴方城","吴弘达","吴宏达","吴仁华","吴学灿","吴学璨","吾尔开希","五不","伍凡","西藏","洗脑","项怀诚","项小吉","小参考","肖强","邪恶","谢长廷","谢选骏","谢中之","辛灏年","新观察论坛","新华举报","新华内情","新华通论坛","新生网","新闻封锁","新语丝","信用危机","邢铮","熊炎","熊焱","修炼","徐邦秦","徐才厚","徐匡迪","徐水良","许家屯","薛伟","学潮","学联","学习班","学运","学自联","雪山狮子","严家其","严家祺","阎明复","颜射","央视内部晚会","杨怀安","杨建利","杨巍","杨月清","杨周","姚月谦","夜话紫禁城","一中一台","义解","亦凡","异见人士","异议人士","易丹轩","易志熹","尹庆民","由喜贵","游行","幼齿","于大海","于浩成","余英时","舆论","舆论反制","宇明网","圆满","远志明","岳武","在十月","则民","择民","泽民","贼民","曾培炎","张伯笠","张钢","张宏堡","张健","张林","张万年","张伟国","张昭富","张志清","赵海青","赵南","赵品潞","赵晓微","赵紫阳","哲民","真相","真象","镇压","争鸣论坛","正见网","正义党论坛","郑义","包夜","冰火","插B","操B","处女","打飞机","风骚","黄色电影","激情视频","叫春","狂插","狂操","狂搞","露乳","裸聊","裸体","屁股","强奸","三级片","色情","脱光","脱衣","性爱","性感","性高潮","性交","胸部","艳舞","一夜情","欲望","操你","你他妈","傻逼","傻B","TMD","TNND","TND","法轮功","江氏","李洪志","新唐人","淫靡","淫水","六四事件","迷药","迷昏药","窃听器","六合彩","买卖枪支","退党","三唑仑","麻醉药","麻醉乙醚","短信群发器","帝国之梦","毛一鲜","黎阳平","色情服务","对日强硬","出售枪支","摇头丸","西藏天葬","鬼村","军长发威","PK黑社会","恶搞晚会","枪决女犯","投毒杀人","强硬发言","出售假币","监听王","昏药","侦探设备","麻醉钢枪","反华","官商勾结","升达毕业证","手机复制","戴海静","自杀指南","自杀手册","张小平","佳静安定片","蒙汗药粉","古方迷香","强效失意药","迷奸药","透视眼镜","远程偷拍","自制手枪","子女任职名单","激情小电影","黄色小电影","色情小电影","天鹅之旅","盘古乐队","高校暴乱","高校群体事件","大学骚乱","高校骚乱","催情药","拍肩神药","春药","窃听器材","身份证生成器","枪决现场","出售手枪","麻醉枪","办理证件","办理文凭","疆独藏独","高干子弟","高干子女","枪支弹药","血腥图片","反政府","禁书","特码","成人片","成人电影","换妻","发票","增值税","迷幻药","隐形","耳机","法","轮","功","李","宏","志","真","善","忍","宏志","杀死","奖","发抡","拉登","拉丹","法抡","法囵","法仑","法纶","发仑","发囵","国研新闻邮件","自由运动","法轮大法","淫秽","E周刊","龙卷风","正法","三陪","嫖娼","静坐","政变","造反","独立","发轮功","功友","人民大众时事参考","示威","罢工","大法弟子","印尼伊斯兰祈祷团","中俄边界新约","政治运动","压迫","非典","共产党","反革命","十六大","江独裁","台湾","东突厥斯坦伊斯兰运动","一边一国","回民","中华民国","政治风波","古怪歌","突厥斯坦","简鸿章","联总之声传单","人民报讯","东突","人民真实报道","教徒","推翻","小灵通","操你奶奶","操你妈","falun","IP17908","falong","陈水扁","主席","改革","他妈的","人民真实报导","开放","杂志","中俄","边界新约","（诽闻）","无能","印尼依斯兰祈祷团","东突厥斯坦依斯兰运动","本拉登","维吾尔自由运动","国际地质科学联合会","中国民主正义党","www.cdjp.org","民主中国","www.chinamz.org","中国民主同盟","支联会","天安门母亲","张戎","西藏流亡政府","邓力群","龙新民","www.bignews.org","www.boxun.com","也就是博讯","www.cnd.org","www.chinesenewsnet.com","纪元","www.dajiyuan.com","大纪元时报","自由亚洲","www.rfa.org","www.renminbao.com","维基百科","www.itouzi.com","根敦.确吉尼玛","根敦.确吉","确吉尼玛","西藏论坛","www.tibetalk.com","破网软件","无界","自由门","花园网","我的奋斗","itouzi","爱投资","安投融","毛泽东","王博","谷云","赵春霞","王晓文","孟繁春"," ","　"];

(function($) {

var conf_metadata = {'type':'attr','name':'data-validate'};

$.datepicker.setDefaults({
	changeMonth: true,
	changeYear: true,
	showMonthAfterYear: true,
	dateFormat: 'yy-mm-dd',
	monthNames: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
	monthNamesShort: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
	dayNames: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
	dayNamesShort: ['日', '一', '二', '三', '四', '五', '六'],
	dayNamesMin: ['日', '一', '二', '三', '四', '五', '六']
})


$(function(){

	$('[data-validate]').each(function(i,el){
		var $el = $(el);
		if (!!$.metadata) {
			// required
			if (!!$el.metadata(conf_metadata)['required']) {
				$el.parents('.field').parent().addClass('required');
			}
			// date
			if (!!$el.metadata(conf_metadata)['dateISO']) {
				$el.datepicker();
			}
			// birthday
			if (!!$el.metadata(conf_metadata)['birthday']) {
				var nowYear = new Date().getFullYear();
				$el.datepicker();
				$el.datepicker("option", "yearRange", '1900:'+nowYear);
			}
		}
		
	});
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


$.extend($.fn, {
	// http://docs.jquery.com/Plugins/Validation/validate
	validate: function( options ) {

		// if nothing is selected, return nothing; can't chain anyway
		if (!this.length) {
			if (options && options.debug && window.console) {
				console.warn( "nothing selected, can't validate, returning nothing" );
			}
			return;
		}

		// check if a validator for this form was already created
		var validator = $.data(this[0], 'validator');
		if ( validator ) {
			return validator;
		}

		// Add novalidate tag if HTML5.
		if (typeof (Worker) !== "undefined") { this.attr('novalidate', 'novalidate'); }
		// 根据配置构造校验器
		validator = new $.validator( options, this[0] );
		$.data(this[0], 'validator', validator);

		
		if ( validator.settings.onsubmit ) { // 如果校验器设置了[onsubmit] 即提交时进行校验

			// 提交按钮点击时触发
			this.validateDelegate( ":submit", "click", function(ev) {

				// 如果校验器设置了[submitHandler]，则设置校验器的[submitButton]为当前事件对象
				if ( validator.settings.submitHandler ) {
					validator.submitButton = ev.target;
				}

				// 如果提交按钮带有样式类cancel，则将校验器的[cancelSubmit]为true
				if ( $(ev.target).hasClass('cancel') ) {
					validator.cancelSubmit = true;
				}

			});

			// 注册表单提交回调函数
			this.submit( function( event ) {
				
				if ( validator.settings.debug ) {
					// debug时阻止提交，方便查看console信息
					event.preventDefault();
				}

				function handle() {
					var hidden;
					if ( validator.settings.submitHandler ) {
						if (validator.submitButton) {
							// 啥意思？ 构造一个很submitButton一样的表单域数据？
							// insert a hidden input as a replacement for the missing submit button
							hidden = $("<input type='hidden'/>").attr("name", validator.submitButton.name).val(validator.submitButton.value).appendTo(validator.currentForm);
						}
						validator.settings.submitHandler.call( validator, validator.currentForm, event );
						if (validator.submitButton) {
							// and clean up afterwards; thanks to no-block-scope, hidden can be referenced
							hidden.remove();
						}
						return false;
					}
					return true;
				}

				// prevent submit for invalid forms or custom submit handlers
				if ( validator.cancelSubmit ) {
					validator.cancelSubmit = false; // [cancelSubmit]恢复初始值？
					return handle();
				}
				if ( validator.form() ) { // 表单验证通过
					if ( validator.pendingRequest ) { //pendingRequest？
						validator.formSubmitted = true;
						return false;
					}
					return handle();
				} else { // 不通过则focus到校验不通过域
					validator.focusInvalid();
					return false;
				}
			});
			//END 注册表单提交回调函数

		}

		return validator;
	},
	// http://docs.jquery.com/Plugins/Validation/valid
	valid: function() {
		if ( $(this[0]).is('form')) {
			return this.validate().form();
		} else {
			var valid = true;
			var validator = $(this[0].form).validate();
			this.each(function() {
				valid &= validator.element(this);
			});
			return valid;
		}
	},
	// attributes: space seperated list of attributes to retrieve and remove
	removeAttrs: function(attributes) {
		var result = {},
			$element = this;
		$.each(attributes.split(/\s/), function(index, value) {
			result[value] = $element.attr(value);
			$element.removeAttr(value);
		});
		return result;
	},
	// http://docs.jquery.com/Plugins/Validation/rules
	rules: function(command, argument) {
		var element = this[0];
		if(!element){
			return false;
		}
		if (command) {
			var settings = $.data(element.form, 'validator').settings;
			var staticRules = settings.rules;
			var existingRules = $.validator.staticRules(element);
			switch(command) {
			case "add":
				$.extend(existingRules, $.validator.normalizeRule(argument));
				staticRules[element.name] = existingRules;
				if (argument.messages) {
					settings.messages[element.name] = $.extend( settings.messages[element.name], argument.messages );
				}
				break;
			case "remove":
				if (!argument) {
					delete staticRules[element.name];
					return existingRules;
				}
				var filtered = {};
				$.each(argument.split(/\s/), function(index, method) {
					filtered[method] = existingRules[method];
					delete existingRules[method];
				});
				return filtered;
			}
		}

		var data = $.validator.normalizeRules(
		$.extend(
			{},
			$.validator.metadataRules(element),
			$.validator.classRules(element),
			$.validator.attributeRules(element),
			$.validator.staticRules(element)
		), element);

		// make sure required is at front
		if (data.required) {
			var param = data.required;
			delete data.required;
			data = $.extend({required: param}, data);
		}

		return data;
	}
});

// Custom selectors
$.extend($.expr[":"], {
	// http://docs.jquery.com/Plugins/Validation/blank
	blank: function(a) {return !$.trim("" + a.value);},
	// http://docs.jquery.com/Plugins/Validation/filled
	filled: function(a) {return !!$.trim("" + a.value);},
	// http://docs.jquery.com/Plugins/Validation/unchecked
	unchecked: function(a) {return !a.checked;}
});

// constructor for validator
$.validator = function( options, form ) {
	this.settings = $.extend( true, {}, $.validator.defaults, options );
	this.currentForm = form;
	this.init();
};

$.validator.format = function(source, params) {
	if ( arguments.length === 1 ) {
		return function() {
			var args = $.makeArray(arguments);
			args.unshift(source);
			return $.validator.format.apply( this, args );
		};
	}
	if ( arguments.length > 2 && params.constructor !== Array  ) {
		params = $.makeArray(arguments).slice(1);
	}
	if ( params.constructor !== Array ) {
		params = [ params ];
	}
	$.each(params, function(i, n) {
		source = source.replace(new RegExp("\\{" + i + "\\}", "g"), n);
	});
	return source;
};

$.extend($.validator, {

	defaults: {
		messages: {},
		groups: {},
		rules: {},
		errorClass: "error",
		validClass: "valid",
		errorElement: "label",
		focusInvalid: true,
		errorContainer: $( [] ),
		errorLabelContainer: $( [] ),
		onsubmit: true, // 是否在提交时校验
		ignore: ":hidden",
		ignoreTitle: false,
		onfocusin: function(element, event) {
			this.lastActive = element;

			// hide error label and remove error class on focus if enabled
			if ( this.settings.focusCleanup && !this.blockFocusCleanup ) {
				if ( this.settings.unhighlight ) {
					this.settings.unhighlight.call( this, element, this.settings.errorClass, this.settings.validClass );
				}
				this.addWrapper(this.errorsFor(element)).hide();
			}
		},
		onfocusout: function(element, event) {
			if ( !this.checkable(element) && (element.name in this.submitted || !this.optional(element)) ) {
				this.element(element);
			}
		},
		onkeyup: function(element, event) {
			if ( event.which === 9 && this.elementValue(element) === '' ) {
				return;
			} else if ( element.name in this.submitted || element === this.lastElement ) {
				this.element(element);
			}
		},
		onclick: function(element, event) {
			// click on selects, radiobuttons and checkboxes
			if ( element.name in this.submitted ) {
				this.element(element);
			}
			// or option elements, check parent select in that case
			else if (element.parentNode.name in this.submitted) {
				this.element(element.parentNode);
			}
		},
		highlight: function(element, errorClass, validClass) {
			if (element.type === 'radio') {
				this.findByName(element.name).addClass(errorClass).removeClass(validClass);
			} else {
				$(element).addClass(errorClass).removeClass(validClass);
			}
		},
		unhighlight: function(element, errorClass, validClass) {
			if (element.type === 'radio') {
				this.findByName(element.name).removeClass(errorClass).addClass(validClass);
			} else {
				$(element).removeClass(errorClass).addClass(validClass);
			}
		}
	},

	// http://docs.jquery.com/Plugins/Validation/Validator/setDefaults
	setDefaults: function(settings) {
		$.extend( $.validator.defaults, settings );
	},

	messages: {
		required: function(val, el, param){
			return param || "请填写此项内容";
		},
		remote: "请修正该字段",
		email: "请输入正确格式的电子邮件",
		url: "请输入合法的网址",
		date: "请输入合法的日期",
		dateISO: "请输入合法的日期 (ISO).",
		number: "请输入合法的数字",
		digits: "只能输入整数",
		creditcard: "请输入合法的信用卡号",
		equalTo: "请再次输入相同的值",
		accept: "请输入拥有合法后缀名的字符串",
		maxlength: $.validator.format("请输入一个长度最多是 {0} 的字符串"),
		minlength: $.validator.format("请输入一个长度最少是 {0} 的字符串"),
		rangelength: $.validator.format("请输入一个长度介于 {0} 和 {1} 之间的字符串"),
		range: $.validator.format("请输入一个介于 {0} 和 {1} 之间的值"),
		max: $.validator.format("请输入一个最大为 {0} 的值"),
		min: $.validator.format("请输入一个最小为 {0} 的值"),
		qq: "请输入合法的QQ号码",
		mobile: "请输入合法的手机号码",
		telephone: "请输入合法的电话号码",
		msn: "请输入合法的MSN账号名",
		zipcode: "请输入合法的邮编",
		idno: "请输入合法的身份证号码",
		Chinese: "请输入中文字符",
		bankAccount: "请输入正确的银行账号"
	},

	autoCreateRanges: false,

	prototype: {

		init: function() {

			this.labelContainer = $(this.settings.errorLabelContainer);
			this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm);
			this.containers = $(this.settings.errorContainer).add( this.settings.errorLabelContainer );
			this.submitted = {};
			this.valueCache = {};
			this.pendingRequest = 0;
			this.pending = {};
			this.invalid = {};
			this.reset();

			var groups = (this.groups = {});
			$.each(this.settings.groups, function(key, value) {
				$.each(value.split(/\s/), function(index, name) {
					groups[name] = key;
				});
			});
			var rules = this.settings.rules;
			$.each(rules, function(key, value) {
				rules[key] = $.validator.normalizeRule(value);
			});

			function delegate(event) {
				var validator = $.data(this[0].form, "validator"),
					eventType = "on" + event.type.replace(/^validate/, "");
				if (validator.settings[eventType]) {
					validator.settings[eventType].call(validator, this[0], event);
				}
			}
			$(this.currentForm)
				.validateDelegate(":text, [type='password'], [type='file'], select, textarea, " +
					"[type='number'], [type='search'] ,[type='tel'], [type='url'], " +
					"[type='email'], [type='datetime'], [type='date'], [type='month'], " +
					"[type='week'], [type='time'], [type='datetime-local'], " +
					"[type='range'], [type='color'] ",
					"focusin focusout keyup", delegate)
				.validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", delegate);

			if (this.settings.invalidHandler) {
				$(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler);
			}
		},

		// http://docs.jquery.com/Plugins/Validation/Validator/form
		form: function() {
			this.checkForm();
			// [submitted]干啥用？ 将errorMap填入
			$.extend(this.submitted, this.errorMap);
			// [invalid]
			this.invalid = $.extend({}, this.errorMap);
			if (!this.valid()) {
				$(this.currentForm).triggerHandler("invalid-form", [this]);
			}
			this.showErrors();
			return this.valid();
		},

		checkForm: function() {
			// 校验器数据准备（重置），与form无关
			this.prepareForm();
			// 表单域逐一校验
			for ( var i = 0, elements = (this.currentElements = this.elements()); elements[i]; i++ ) {
				this.check( elements[i] );
			}
			return this.valid();
		},

		// http://docs.jquery.com/Plugins/Validation/Validator/element
		element: function( element ) {
			element = this.validationTargetFor( this.clean( element ) );
			this.lastElement = element;
			this.prepareElement( element );
			this.currentElements = $(element);
			var result = this.check( element ) !== false;
			if (result) {
				delete this.invalid[element.name];
			} else {
				this.invalid[element.name] = true;
			}
			if ( !this.numberOfInvalids() ) {
				// Hide error containers on last error
				this.toHide = this.toHide.add( this.containers );
			}
			this.showErrors();
			return result;
		},

		// http://docs.jquery.com/Plugins/Validation/Validator/showErrors
		showErrors: function(errors) {
			if(errors) {
				// add items to error list and map
				$.extend( this.errorMap, errors );
				this.errorList = [];
				for ( var name in errors ) {
					this.errorList.push({
						message: errors[name],
						element: this.findByName(name)[0]
					});
				}
				// remove items from success list
				this.successList = $.grep( this.successList, function(element) {
					return !(element.name in errors);
				});
			}
			if (this.settings.showErrors) {
				this.settings.showErrors.call( this, this.errorMap, this.errorList );
			} else {
				this.defaultShowErrors();
			}
		},

		// http://docs.jquery.com/Plugins/Validation/Validator/resetForm
		resetForm: function() {
			if ( $.fn.resetForm ) {
				$( this.currentForm ).resetForm();
			}
			this.submitted = {};
			this.lastElement = null;
			this.prepareForm();
			this.hideErrors();
			this.elements().removeClass( this.settings.errorClass ).removeData( "previousValue" );
		},

		numberOfInvalids: function() {
			return this.objectLength(this.invalid);
		},

		objectLength: function( obj ) {
			var count = 0;
			for ( var i in obj ) {
				count++;
			}
			return count;
		},

		hideErrors: function() {
			this.addWrapper( this.toHide ).hide();
		},

		valid: function() {
			return this.size() === 0;
		},

		size: function() {
			return this.errorList.length;
		},

		focusInvalid: function() {
			if( this.settings.focusInvalid ) {
				try {
					$(this.findLastActive() || this.errorList.length && this.errorList[0].element || [])
					.filter(":visible")
					.focus()
					// manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
					.trigger("focusin");
				} catch(e) {
					// ignore IE throwing errors when focusing hidden elements
				}
			}
		},

		findLastActive: function() {
			var lastActive = this.lastActive;
			return lastActive && $.grep(this.errorList, function(n) {
				return n.element.name === lastActive.name;
			}).length === 1 && lastActive;
		},

		elements: function() {
			var validator = this,
				rulesCache = {};

			// select all valid inputs inside the form (no submit or reset buttons)
			return $(this.currentForm)
			.find("input, select, textarea")
			.not(":submit, :reset, :image, [disabled]")
			.not( this.settings.ignore )
			.filter(function() {
				if ( !this.name && validator.settings.debug && window.console ) {
					console.error( "%o has no name assigned", this);
				}

				// select only the first element for each name, and only those with rules specified
				if ( this.name in rulesCache || !validator.objectLength($(this).rules()) ) {
					return false;
				}

				rulesCache[this.name] = true;
				return true;
			});
		},

		clean: function( selector ) {
			return $( selector )[0];
		},

		errors: function() {
			var errorClass = this.settings.errorClass.replace(' ', '.');
			return $( this.settings.errorElement + "." + errorClass, this.errorContext );
		},

		reset: function() {
			this.successList = [];
			this.errorList = [];
			this.errorMap = {};
			this.toShow = $([]);
			this.toHide = $([]);
			this.currentElements = $([]);
		},

		prepareForm: function() {
			// 校验器重置
			this.reset();
			// [toHide]干啥？
			this.toHide = this.errors().add( this.containers );
		},

		prepareElement: function( element ) {
			this.reset();
			this.toHide = this.errorsFor(element);
		},

		elementValue: function( element ) {
			var type = $(element).attr('type'),
				val = $(element).val();

			if ( type === 'radio' || type === 'checkbox' ) {
				return $('input[name="' + $(element).attr('name') + '"]:checked').val();
			}

			if ( typeof val === 'string' ) {
				return val.replace(/\r/g, "");
			}
			return val;
		},

		check: function( element ) {
			element = this.validationTargetFor( this.clean( element ) );
			
			// .rules() 哪里来的？
			var rules = $(element).rules();

			var dependencyMismatch = false;
			var val = this.elementValue(element);
			var result;

			for (var method in rules ) {
				var rule = { method: method, parameters: rules[method] };
				try {
					result = $.validator.methods[method].call( this, val, element, rule.parameters );
					// if a method indicates that the field is optional and therefore valid,
					// don't mark it as valid when there are no other rules
					if ( result === "dependency-mismatch" ) {
						dependencyMismatch = true;
						continue;
					}
					dependencyMismatch = false;

					if ( result === "pending" ) {
						this.toHide = this.toHide.not( this.errorsFor(element) );
						return;
					}

					if( !result ) {
						this.formatAndAdd( element, rule );
						return false;
					}

				} catch(e) {
					if ( this.settings.debug && window.console ) {
						console.log("exception occured when checking element " + element.id + ", check the '" + rule.method + "' method", e);
					} else {
						alert("exception occured when checking element " + element.id + ", check the '" + rule.method + "' method");
					}
					throw e;
				}
			}

			if (dependencyMismatch) {
				return;
			}

			if ( this.objectLength(rules) ) {
				this.successList.push(element);
			}

			return true;
		},

		// return the custom message for the given element and validation method
		// specified in the element's "messages" metadata
		customMetaMessage: function(element, method) {
			if (!$.metadata) {
				return;
			}
			//console.log($(element).metadata(conf_metadata));
			var meta = this.settings.meta ? $(element).metadata(conf_metadata)[this.settings.meta] : $(element).metadata(conf_metadata);
			return meta && meta.messages && meta.messages[method];
		},

		// return the custom message for the given element and validation method
		// specified in the element's HTML5 data attribute
		customDataMessage: function(element, method) {
			return $(element).data('msg-' + method.toLowerCase()) || (element.attributes && $(element).attr('data-msg-' + method.toLowerCase()));
		},

		// return the custom message for the given element name and validation method
		customMessage: function( name, method ) {
			var m = this.settings.messages[name];
			return m && (m.constructor === String ? m : m[method]);
		},

		// return the first defined argument, allowing empty strings
		findDefined: function() {
			for(var i = 0; i < arguments.length; i++) {
				if (arguments[i] !== undefined) {
					return arguments[i];
				}
			}
			return undefined;
		},

		defaultMessage: function( element, method) {
			return this.findDefined(
				this.customMessage( element.name, method ),
				this.customDataMessage( element, method ),
				this.customMetaMessage( element, method ),
				// title is never undefined, so handle empty string as undefined
				!this.settings.ignoreTitle && element.title || undefined,
				$.validator.messages[method],
				"<strong>Warning: No message defined for " + element.name + "</strong>"
			);
		},

		formatAndAdd: function( element, rule ) {
			var message = this.defaultMessage( element, rule.method ),
				theregex = /\$?\{(\d+)\}/g;
			if ( typeof message === "function" ) {
				message = message.call(this, rule.parameters, element);
			} else if (theregex.test(message)) {
				message = $.validator.format(message.replace(theregex, '{$1}'), rule.parameters);
			}
			this.errorList.push({
				message: message,
				element: element
			});

			this.errorMap[element.name] = message;
			this.submitted[element.name] = message;
		},

		addWrapper: function(toToggle) {
			if ( this.settings.wrapper ) {
				toToggle = toToggle.add( toToggle.parent( this.settings.wrapper ) );
			}
			return toToggle;
		},

		defaultShowErrors: function() {
			var i, elements;
			for ( i = 0; this.errorList[i]; i++ ) {
				var error = this.errorList[i];
				if ( this.settings.highlight ) {
					this.settings.highlight.call( this, error.element, this.settings.errorClass, this.settings.validClass );
				}
				this.showLabel( error.element, error.message );
			}
			if( this.errorList.length ) {
				this.toShow = this.toShow.add( this.containers );
			}
			if (this.settings.success) {
				for ( i = 0; this.successList[i]; i++ ) {
					this.showLabel( this.successList[i] );
				}
			}
			if (this.settings.unhighlight) {
				for ( i = 0, elements = this.validElements(); elements[i]; i++ ) {
					this.settings.unhighlight.call( this, elements[i], this.settings.errorClass, this.settings.validClass );
				}
			}
			this.toHide = this.toHide.not( this.toShow );
			this.hideErrors();
			this.addWrapper( this.toShow ).show();
		},

		validElements: function() {
			return this.currentElements.not(this.invalidElements());
		},

		invalidElements: function() {
			return $(this.errorList).map(function() {
				return this.element;
			});
		},

		showLabel: function(element, message) {
			var label = this.errorsFor( element );
			if ( label.length ) {
				// refresh error/success class
				label.removeClass( this.settings.validClass ).addClass( this.settings.errorClass );

				// check if we have a generated label, replace the message then
				if ( label.attr("generated") ) {
					label.html(message);
				}
			} else {
				// create label
				label = $("<" + this.settings.errorElement + "/>")
					.attr({"for":  this.idOrName(element), generated: true})
					.addClass(this.settings.errorClass)
					.html(message || "");
				if ( this.settings.wrapper ) {
					// make sure the element is visible, even in IE
					// actually showing the wrapped element is handled elsewhere
					label = label.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
				}
				if ( !this.labelContainer.append(label).length ) {
					if ( this.settings.errorPlacement ) {
						this.settings.errorPlacement(label, $(element) );
					} else {


						var $el = $(element);

						var $labelCtn = $($el.attr('data-labelctn'));
						if (!$labelCtn.length) {
							var $f = $el.parents('.field');
							$labelCtn = $f.children('.info');
							if (!$labelCtn.length) {
								$labelCtn = $('<span class="info"></span>').appendTo($f);
							}
						}

						
						var $tipsLabels = $labelCtn.find('.input-tips');
						if ($tipsLabels.length) {
							$tipsLabels.hide();
							$el.data('tips-labels', $tipsLabels);
						}

						label.appendTo($labelCtn);

						// 错误提示默认插入位置
						//label.insertAfter(element);
					
					}
				}
			}
			if ( !message && this.settings.success ) {
				label.text("");
				if ( typeof this.settings.success === "string" ) {
					label.addClass( this.settings.success );
				} else {
					this.settings.success( label, element );
				}
			}
			this.toShow = this.toShow.add(label);
		},

		errorsFor: function(element) {
			var name = this.idOrName(element);
			return this.errors().filter(function() {
				return $(this).attr('for') === name;
			});
		},

		idOrName: function(element) {
			return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name);
		},

		validationTargetFor: function(element) {
			// if radio/checkbox, validate first element in group instead
			if (this.checkable(element)) {
				element = this.findByName( element.name ).not(this.settings.ignore)[0];
			}
			return element;
		},

		checkable: function( element ) {
			return (/radio|checkbox/i).test(element.type);
		},

		findByName: function( name ) {
			return $(this.currentForm).find('[name="' + name + '"]');
		},

		getLength: function(value, element) {
			switch( element.nodeName.toLowerCase() ) {
			case 'select':
				return $("option:selected", element).length;
			case 'input':
				if( this.checkable( element) ) {
					return this.findByName(element.name).filter(':checked').length;
				}
			}
			return value.length;
		},

		depend: function(param, element) {
			return this.dependTypes[typeof param] ? this.dependTypes[typeof param](param, element) : true;
		},

		dependTypes: {
			"boolean": function(param, element) {
				return param;
			},
			"string": function(param, element) {
				return !!$(param, element.form).length;
			},
			"function": function(param, element) {
				return param(element);
			}
		},

		optional: function(element) {
			var val = this.elementValue(element);
			return !$.validator.methods.required.call(this, val, element) && "dependency-mismatch";
		},

		startRequest: function(element) {
			if (!this.pending[element.name]) {
				this.pendingRequest++;
				this.pending[element.name] = true;
			}
		},

		stopRequest: function(element, valid) {
			this.pendingRequest--;
			// sometimes synchronization fails, make sure pendingRequest is never < 0
			if (this.pendingRequest < 0) {
				this.pendingRequest = 0;
			}
			delete this.pending[element.name];
			if ( valid && this.pendingRequest === 0 && this.formSubmitted && this.form() ) {
				$(this.currentForm).submit();
				this.formSubmitted = false;
			} else if (!valid && this.pendingRequest === 0 && this.formSubmitted) {
				$(this.currentForm).triggerHandler("invalid-form", [this]);
				this.formSubmitted = false;
			}
		},

		previousValue: function(element) {
			return $.data(element, "previousValue") || $.data(element, "previousValue", {
				old: null,
				valid: true,
				message: this.defaultMessage( element, "remote" )
			});
		}

	},

	classRuleSettings: {
		required: {required: true},
		email: {email: true},
		url: {url: true},
		date: {date: true},
		dateISO: {dateISO: true},
		number: {number: true},
		digits: {digits: true},
		creditcard: {creditcard: true}
	},

	addClassRules: function(className, rules) {
		if ( className.constructor === String ) {
			this.classRuleSettings[className] = rules;
		} else {
			$.extend(this.classRuleSettings, className);
		}
	},

	classRules: function(element) {
		var rules = {};
		var classes = $(element).attr('class');
		if ( classes ) {
			$.each(classes.split(' '), function() {
				if (this in $.validator.classRuleSettings) {
					$.extend(rules, $.validator.classRuleSettings[this]);
				}
			});
		}
		return rules;
	},

	attributeRules: function(element) {
		var rules = {};
		var $element = $(element);

		for (var method in $.validator.methods) {
			var value;

			// support for <input required> in both html5 and older browsers
			if (method === 'required') {
				value = $element.get(0).getAttribute(method);
				// Some browsers return an empty string for the required attribute
				// and non-HTML5 browsers might have required="" markup
				if (value === "") {
					value = true;
				}
				// force non-HTML5 browsers to return bool
				value = !!value;
			} else {
				value = $element.attr(method);
			}

			if (value) {
				rules[method] = value;
			} else if ($element[0].getAttribute("type") === method) {
				rules[method] = true;
			}
		}

		// maxlength may be returned as -1, 2147483647 (IE) and 524288 (safari) for text inputs
		if (rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength)) {
			delete rules.maxlength;
		}

		return rules;
	},

	metadataRules: function(element) {
		if (!$.metadata) {
			return {};
		}

		var meta = $.data(element.form, 'validator').settings.meta;
		
		return meta ?
			$(element).metadata(conf_metadata)[meta] :
			$(element).metadata(conf_metadata);
	},

	staticRules: function(element) {
		var rules = {};
		var validator = $.data(element.form, 'validator');
		if (validator.settings.rules) {
			rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {};
		}
		return rules;
	},

	normalizeRules: function(rules, element) {
		// handle dependency check
		$.each(rules, function(prop, val) {
			// ignore rule when param is explicitly false, eg. required:false
			if (val === false) {
				delete rules[prop];
				return;
			}
			if (val.param || val.depends) {
				var keepRule = true;
				switch (typeof val.depends) {
					case "string":
						keepRule = !!$(val.depends, element.form).length;
						break;
					case "function":
						keepRule = val.depends.call(element, element);
						break;
				}
				if (keepRule) {
					rules[prop] = val.param !== undefined ? val.param : true;
				} else {
					delete rules[prop];
				}
			}
		});

		// evaluate parameters
		$.each(rules, function(rule, parameter) {
			rules[rule] = $.isFunction(parameter) ? parameter(element) : parameter;
		});

		// clean number parameters
		$.each(['minlength', 'maxlength', 'min', 'max'], function() {
			if (rules[this]) {
				rules[this] = Number(rules[this]);
			}
		});
		$.each(['rangelength', 'range'], function() {
			if (rules[this]) {
				rules[this] = [Number(rules[this][0]), Number(rules[this][1])];
			}
		});

		if ($.validator.autoCreateRanges) {
			// auto-create ranges
			if (rules.min && rules.max) {
				rules.range = [rules.min, rules.max];
				delete rules.min;
				delete rules.max;
			}
			if (rules.minlength && rules.maxlength) {
				rules.rangelength = [rules.minlength, rules.maxlength];
				delete rules.minlength;
				delete rules.maxlength;
			}
		}

		// To support custom messages in metadata ignore rule methods titled "messages"
		if (rules.messages) {
			delete rules.messages;
		}

		return rules;
	},

	// Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
	normalizeRule: function(data) {
		if( typeof data === "string" ) {
			var transformed = {};
			$.each(data.split(/\s/), function() {
				transformed[this] = true;
			});
			data = transformed;
		}
		return data;
	},

	// http://docs.jquery.com/Plugins/Validation/Validator/addMethod
	addMethod: function(name, method, message) {
		$.validator.methods[name] = method;
		$.validator.messages[name] = message !== undefined ? message : $.validator.messages[name];
		if (method.length < 3) {
			$.validator.addClassRules(name, $.validator.normalizeRule(name));
		}
	},

	methods: {

		// http://docs.jquery.com/Plugins/Validation/Methods/required
		required: function(value, element, param) {

			// check if dependency is met
			if ( !this.depend(param, element) ) {
				return "dependency-mismatch";
			}
			if ( element.nodeName.toLowerCase() === "select" ) {
				// could be an array for select-multiple or a string, both are fine this way
				var val = $(element).val();
				return val && val.length > 0;
			}
			if ( this.checkable(element) ) {
				return this.getLength(value, element) > 0;
			}
			return $.trim(value).length > 0;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/remote
		remote: function(value, element, param) {
			if ( this.optional(element) ) {
				return "dependency-mismatch";
			}

			var previous = this.previousValue(element);
			if (!this.settings.messages[element.name] ) {
				this.settings.messages[element.name] = {};
			}
			previous.originalMessage = this.settings.messages[element.name].remote;
			this.settings.messages[element.name].remote = previous.message;

			param = typeof param === "string" && {url:param} || param;

			if ( previous.old === value ) {
				return previous.valid;
			}

			previous.old = value;
			var validator = this;
			this.startRequest(element);
			var data = {};
			data[element.name] = value;
			$.ajax($.extend(true, {
				url: param,
				mode: "abort",
				port: "validate" + element.name,
				dataType: "json",
				data: data,
				success: function(response) {
					validator.settings.messages[element.name].remote = previous.originalMessage;
					var valid = response === true || response === "true" || response === 1;
					if ( valid ) {
						var submitted = validator.formSubmitted;
						validator.prepareElement(element);
						validator.formSubmitted = submitted;
						validator.successList.push(element);
						delete validator.invalid[element.name];
						validator.showErrors();
					} else {
						var errors = {};
						var message = response || validator.defaultMessage( element, "remote" );
						errors[element.name] = previous.message = $.isFunction(message) ? message(value) : message;
						validator.invalid[element.name] = true;
						validator.showErrors(errors);
					}
					previous.valid = valid;
					validator.stopRequest(element, valid);
				}
			}, param));
			return "pending";
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/minlength
		minlength: function(value, element, param) {
			var length = $.isArray( value ) ? value.length : this.getLength($.trim(value), element);
			return this.optional(element) || length >= param;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/maxlength
		maxlength: function(value, element, param) {
			var length = $.isArray( value ) ? value.length : this.getLength($.trim(value), element);
			return this.optional(element) || length <= param;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/rangelength
		rangelength: function(value, element, param) {
			var length = $.isArray( value ) ? value.length : this.getLength($.trim(value), element);
			return this.optional(element) || ( length >= param[0] && length <= param[1] );
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/min
		min: function( value, element, param ) {
			return this.optional(element) || value >= param;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/max
		max: function( value, element, param ) {
			return this.optional(element) || value <= param;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/range
		range: function( value, element, param ) {
			return this.optional(element) || ( value >= param[0] && value <= param[1] );
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/email
		email: function(value, element) {
			// contributed by Scott Gonzalez: http://projects.scottsplayground.com/email_address_validation/
			return this.optional(element) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(value);
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/url
		url: function(value, element) {
			// contributed by Scott Gonzalez: http://projects.scottsplayground.com/iri/
			return this.optional(element) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/date
		date: function(value, element) {
			return this.optional(element) || !/Invalid|NaN/.test(new Date(value));
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/dateISO
		dateISO: function(value, element) {
			return this.optional(element) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(value);
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/number
		number: function(value, element) {
			return this.optional(element) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/digits
		digits: function(value, element) {
			return this.optional(element) || /^\d+$/.test(value);
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/creditcard
		// based on http://en.wikipedia.org/wiki/Luhn
		creditcard: function(value, element) {
			if ( this.optional(element) ) {
				return "dependency-mismatch";
			}
			// accept only spaces, digits and dashes
			if (/[^0-9 \-]+/.test(value)) {
				return false;
			}
			var nCheck = 0,
				nDigit = 0,
				bEven = false;

			value = value.replace(/\D/g, "");

			for (var n = value.length - 1; n >= 0; n--) {
				var cDigit = value.charAt(n);
				nDigit = parseInt(cDigit, 10);
				if (bEven) {
					if ((nDigit *= 2) > 9) {
						nDigit -= 9;
					}
				}
				nCheck += nDigit;
				bEven = !bEven;
			}

			return (nCheck % 10) === 0;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/equalTo
		equalTo: function(value, element, param) {
			// bind to the blur event of the target in order to revalidate whenever the target field is updated
			// TODO find a way to bind the event just once, avoiding the unbind-rebind overhead
			var target = $(param);
			if (this.settings.onfocusout) {
				target.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
					$(element).valid();
				});
			}
			return value === target.val();
		},
		
		accept: function(value, element, param) {
			return this.optional(element) || new RegExp('/\.'+param+'$/').test(value);
		},

		qq: function(value, element, param) {
			return this.optional(element) || /^\d{5,20}$/.test(value);
		},
		
		mobile: function(value, element, param) {
			return this.optional(element) || /^1\d{10}$/.test(value);
		},

		telephone: function(value, element, param) {
			return this.optional(element) || /^[0-9-+()]+$/.test(value);
		},
		
		msn: function(value, element, param) {
			return true;
		},
		
		zipcode: function(value, element, param) {
			return this.optional(element) || /^\d+$/.test(value);
		},

		idno: function(value, element, param) {
			return this.optional(element) || IDNo.validate(value);
		},
		
		Chinese: function(value, element, param) {
			return this.optional(element) || /^[\u4e00-\u9fa5]+$/.test(value);
		},
		
		bankAccount: function(value, element, param) {
			return this.optional(element) || /^\d+$/.test(value);
		}

	}

});

// deprecated, use $.validator.format instead
$.format = $.validator.format;

}(jQuery));

// ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()
(function($) {
	var pendingRequests = {};
	// Use a prefilter if available (1.5+)
	if ( $.ajaxPrefilter ) {
		$.ajaxPrefilter(function(settings, _, xhr) {
			var port = settings.port;
			if (settings.mode === "abort") {
				if ( pendingRequests[port] ) {
					pendingRequests[port].abort();
				}
				pendingRequests[port] = xhr;
			}
		});
	} else {
		// Proxy ajax
		var ajax = $.ajax;
		$.ajax = function(settings) {
			var mode = ( "mode" in settings ? settings : $.ajaxSettings ).mode,
				port = ( "port" in settings ? settings : $.ajaxSettings ).port;
			if (mode === "abort") {
				if ( pendingRequests[port] ) {
					pendingRequests[port].abort();
				}
				return (pendingRequests[port] = ajax.apply(this, arguments));
			}
			return ajax.apply(this, arguments);
		};
	}
}(jQuery));

// provides cross-browser focusin and focusout events
// IE has native support, in other browsers, use event caputuring (neither bubbles)

// provides delegate(type: String, delegate: Selector, handler: Callback) plugin for easier event delegation
// handler is only called when $(event.target).is(delegate), in the scope of the jquery-object for event.target
(function($) {
	// only implement if not provided by jQuery core (since 1.4)
	// TODO verify if jQuery 1.4's implementation is compatible with older jQuery special-event APIs
	if (!jQuery.event.special.focusin && !jQuery.event.special.focusout && document.addEventListener) {
		$.each({
			focus: 'focusin',
			blur: 'focusout'
		}, function( original, fix ){
			$.event.special[fix] = {
				setup:function() {
					this.addEventListener( original, handler, true );
				},
				teardown:function() {
					this.removeEventListener( original, handler, true );
				},
				handler: function(e) {
					var args = arguments;
					args[0] = $.event.fix(e);
					args[0].type = fix;
					return $.event.handle.apply(this, args);
				}
			};
			function handler(e) {
				e = $.event.fix(e);
				e.type = fix;
				return $.event.handle.call(this, e);
			}
		});
	}
	$.extend($.fn, {
		validateDelegate: function(delegate, type, handler) {
			return this.bind(type, function(event) {
				var target = $(event.target);
				if (target.is(delegate)) {
					return handler.apply(target, arguments);
				}
			});
		}
	});
}(jQuery));



(function(){
	
	jQuery.validator.addMethod("money", function(value, element) {
		return this.optional(element) || /^\d+(\.\d{0,2})?$/.test(value);
	}, "请输入正确的金额");

	jQuery.validator.addMethod("vcode", function(value, element) {
		return /^\d{4}$/.test(value);
	}, "请输入正确的验证码");

	jQuery.validator.addMethod("birthday", function(value, element) {
		return this.optional(element) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(value);
	}, "请输入正确的生日");
	
	jQuery.validator.addMethod("telephone", function(value, element) {
		return this.optional(element) || (/^(\+)?(\d{1,3})?(-)?([1-9]\d{6,7})$/.test(value));
	}, "请输入正确的座机电话");
	
	jQuery.validator.addMethod("qqNum", function(value, element) {
		return this.optional(element) || (/^[1-9]\d{4,11}$/.test(value));
	}, "请输入正确的QQ号");
	
	jQuery.validator.addMethod("postcodeFun", function(value, element) {
		return this.optional(element) || (/^[1-9]\d{5}$/.test(value));
	}, "请输入正确的邮编");
	
	jQuery.validator.addMethod("adult", function(value, element) {
		var d = new Date(),
			num = d.getFullYear() - Number(value.substr(6,4));
		return this.optional(element) || (num >= 18);
	}, "爱投资只向年满18岁用户提供投资服务");
	
	jQuery.validator.addMethod("identity", function(value, element) {
		var aCity={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "};
		return this.optional(element) || function (sId){
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
		}(value);
	}, "请输入正确的身份证号");
	
	jQuery.validator.addMethod("different", function(value, element,param) {
		var target = $(param);
		return this.optional(element) || (value != target.val());
	}, "新旧密码不能相同");
	
	jQuery.validator.addMethod("sensitiveWord", function(value, element) {
		
		var valueToLowerCase = value.toLowerCase();
		
		for(var i = 0; i<sensitiveWord.length;i++){
			
			var sensitiveWordToLowerCase = sensitiveWord[i].toLowerCase();
			
			if( valueToLowerCase.indexOf(sensitiveWordToLowerCase) >= 0 || !/^[\u4e00-\u9fa5_a-zA-Z0-9]+$/.test(valueToLowerCase)){
				
				return this.optional(element) || false;
				
			}
			
		}
		
		return this.optional(element) || true;
		
	}, "该昵称不允许注册");
	
})();

