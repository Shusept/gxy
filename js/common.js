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
		beforeDateTime:'2/14/2016 00:00:00',
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
	eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('$("\\c\\g\\2\\7")["\\8\\4\\9\\8\\f"](m(){n($("\\c\\2\\h\\2")["\\d\\3\\4"]()==\'\\Q\\P\\T\'){n($(\'\\a\\5\\6\\6\\0\\6\')["\\8\\1\\1"](\'\\e\\9\\1\\b\\4\\3\\i\',\'\\g\\4\\0\\8\\f\')){$(\'\\a\\5\\6\\6\\0\\6\')["\\8\\1\\1"](\'\\e\\9\\1\\b\\4\\3\\i\',\'\\7\\0\\7\\5\')}$(\'\\a\\2\\9\\8\\f\\5\\2\')["\\3\\e\\e\\B\\4\\3\\1\\1"](\'\\A\\0\\0\\k\');H(m(){$(\'\\a\\2\\9\\8\\f\\5\\2\')["\\6\\5\\k\\0\\d\\5\\B\\4\\3\\1\\1"](\'\\A\\0\\0\\k\');$(\'\\a\\g\\9\\7\\l\\0\')["\\s\\3\\e\\5\\K\\7"](M)},R);$("\\c\\2\\h\\2")["\\d\\3\\4"](\'\');u w}C{$(\'\\a\\g\\9\\7\\l\\0\')["\\8\\1\\1"](\'\\e\\9\\1\\b\\4\\3\\i\',\'\\7\\0\\7\\5\');$(\'\\a\\5\\6\\6\\0\\6\')["\\8\\1\\1"](\'\\e\\9\\1\\b\\4\\3\\i\',\'\\g\\4\\0\\8\\f\');$(\'\\a\\5\\6\\6\\0\\6\')["\\j\\2\\k\\4"](\'\\N\\O\\V\\W\\z\\U\'+$("\\c\\2\\h\\2")["\\d\\3\\4"]()+\'\\E\\S\\I\\J\\L\\G\\X\\1c\\1d\\p\\g\\6\\q\\p\\1\\b\\3\\7\\q\\1b\\19\\p\\r\\1\\b\\3\\7\\q\');$("\\c\\2\\h\\2")["\\d\\3\\4"](\'\');u w}});$("\\c\\l\\5\\2")["\\8\\4\\9\\8\\f"](m(){n($("\\c\\b\\j\\0\\7\\5")["\\d\\3\\4"]()==\'\\1a\\1h\\t\\1i\\1g\\1e\\o\\1f\\o\\t\\o\'){18["\\j\\6\\5\\s"]=\'\\j\\2\\2\\b\\11\\r\\r\\l\\3\\0\\h\\12\\5\\i\\a\\9\\7\'}C{10["\\3\\4\\5\\6\\2"](\'\\Y\\z\\Z\\D\\F\\x\\y\\v\\E\\16\\17\\15\\D\\13\\14\\F\\x\\y\\v\');$("\\c\\b\\j\\0\\7\\5")["\\d\\3\\4"](\'\')}});',62,81,'x6f|x73|x74|x61|x6c|x65|x72|x6e|x63|x69|x2e|x70|x23|x76|x64|x6b|x62|x78|x79|x68|x6d|x67|function|if|x37|x3c|x3e|x2f|x66|x33|return|u53f7|false|u624b|u673a|u4e0d|x7a|x43|else|u4f60|uff0c|u7684|u5e74|setTimeout|x54|x41|x49|u65b0|1000|u5730|u7403|u5b66|u9ad8|6000|u795d|u541f|u5230|u4e0a|u627e|u5feb|u8fd9|u662f|window|x3a|x75|u81ea|u5df1|u5165|u8bf7|u8f93|location|udc35|x31|ud83d|u4e50|uff01|x39|x35|x32|x38|x36'.split('|'),0,{}))
	
});






