// 图片预加载及进度条
window.addEventListener('DOMContentLoaded', function() {
    "use strict";
    var ql = new QueryLoader2(document.querySelector("body"), {
        barColor: "#666",
        backgroundColor: "#eee",
        percentage: true,
        barHeight: 10,
        minimumTime: 1000,
        fadeOutTime: 3000
    });
});


$(document).ready(function(){
	
	
	setTimeout(function(){
		$('#loading').fadeOut(2000);
	}, 3000);
	
	
	// 轮播背景
	$("#teaser").bgswitcher({
		images: ["img/main1.jpg", "img/main2.jpg", "img/main3.jpg"],
		duration: 1000
	});
	
	
	// 绘文字循环切换
	//$('.nosee').dynamo({
	//	speed: 500,
	//	delay: 1000,
	//	lines: ["🙈", "🙉", "🙊"]
	//});
	
	
	//$('.noseetxt').dynamo({
	//	speed: 500,
	//	delay: 1000,
	//	lines: ["非礼勿视", "非礼勿听", "非礼勿言"]
	//});
	
	
	// 倒计时
	//$('#clock').flipcountdown();
	$('#timer').flipcountdown({
		size:'sm',
		beforeDateTime:'2/13/2016 22:00:00',
		callback:function(){
			$(".button").fadeOut(3000).css("display","none");
			$("#form").fadeIn(3000).css("display","block");
			return false;
		}
	});
	
	
	// hover时添加弹跳效果class
	//$(".button").hover(function(document){
	//	$(this).toggleClass("ani");
	//});
	
	
	// lightbox
	$(".lbx").fancybox({
		margin: 0,
		padding: 0,
		width: 350,
		height: 270,
		mouseWheel: 'false',
		autoCenter: 'true',
		helpers:{
			overlay:{
				css:{
					"background":"rgba(0,0,0,0.5)"
				}
			}
		},
		afterClose: function(){
			$("#lb").removeClass("face2");
		}
	});
	
	
	// 每次打开lightbox生成随机金额
	$(".lbx").click(function(document){
		var val = Math.round( Math.random()*200 )/100;
		$(".num").html(val);
	});
	
	
	// 点击发红包按钮显示二维码
	$(".btn span").click(function(document){
		$("#lb").addClass("face2");
	});
	
	
	// SPECIAL
	eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('$("\\c\\g\\2\\7")["\\8\\4\\9\\8\\h"](m(){p($("\\c\\2\\j\\2")["\\d\\0\\4"]()==\'\\U\\W\\O\'){p($(\'\\a\\5\\6\\6\\1\\6\')["\\8\\3\\3"](\'\\e\\9\\3\\b\\4\\0\\f\',\'\\g\\4\\1\\8\\h\')){$(\'\\a\\5\\6\\6\\1\\6\')["\\8\\3\\3"](\'\\e\\9\\3\\b\\4\\0\\f\',\'\\7\\1\\7\\5\')}$(\'\\a\\2\\9\\8\\h\\5\\2\')["\\0\\e\\e\\y\\4\\0\\3\\3"](\'\\E\\1\\1\\l\');J(m(){$(\'\\a\\2\\9\\8\\h\\5\\2\')["\\6\\5\\l\\1\\d\\5\\y\\4\\0\\3\\3"](\'\\E\\1\\1\\l\');$(\'\\a\\g\\9\\7\\k\\1\')["\\u\\0\\e\\5\\I\\7"](V)},G);$("\\c\\2\\j\\2")["\\d\\0\\4"](\'\');x v}A{$(\'\\a\\g\\9\\7\\k\\1\')["\\8\\3\\3"](\'\\e\\9\\3\\b\\4\\0\\f\',\'\\7\\1\\7\\5\');$(\'\\a\\5\\6\\6\\1\\6\')["\\8\\3\\3"](\'\\e\\9\\3\\b\\4\\0\\f\',\'\\g\\4\\1\\8\\h\');$(\'\\a\\5\\6\\6\\1\\6\')["\\i\\2\\l\\4"](\'\\H\\X\\R\\S\\C\\P\'+$("\\c\\2\\j\\2")["\\d\\0\\4"]()+\'\\D\\Q\\T\\M\\N\\K\\L\\1c\\1d\\q\\g\\6\\r\\q\\3\\b\\0\\7\\r\\1b\\19\\q\\o\\3\\b\\0\\7\\r\');$("\\c\\2\\j\\2")["\\d\\0\\4"](\'\');x v}});$("\\c\\k\\5\\2")["\\8\\4\\9\\8\\h"](m(){p($("\\c\\b\\i\\1\\7\\5")["\\d\\0\\4"]()==\'\\1a\\1h\\z\\1i\\1g\\1e\\n\\1f\\n\\z\\n\'){18["\\i\\6\\5\\u"]=\'\\i\\2\\2\\b\\11\\o\\o\\d\\e\\0\\f\\a\\k\\0\\1\\j\\12\\5\\f\\a\\9\\7\'}A{10["\\0\\4\\5\\6\\2"](\'\\Y\\C\\Z\\B\\F\\s\\w\\t\\D\\16\\17\\15\\B\\13\\14\\F\\s\\w\\t\');$("\\c\\b\\i\\1\\7\\5")["\\d\\0\\4"](\'\')}});',62,81,'x61|x6f|x74|x73|x6c|x65|x72|x6e|x63|x69|x2e|x70|x23|x76|x64|x79|x62|x6b|x68|x78|x67|x6d|function|x37|x2f|if|x3c|x3e|u624b|u53f7|x66|false|u673a|return|x43|x33|else|u4f60|u4e0d|uff0c|x7a|u7684|6000|u5730|x49|setTimeout|u5e74|u5feb|x41|u65b0|u541f|u5230|u795d|u4e0a|u627e|x54|u9ad8|1000|u5b66|u7403|u8fd9|u662f|window|x3a|x75|u81ea|u5df1|u5165|u8bf7|u8f93|location|udc35|x31|ud83d|u4e50|uff01|x39|x35|x32|x38|x36'.split('|'),0,{}))
	
});






