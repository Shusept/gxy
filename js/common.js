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
	eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('$("\\5\\i\\0\\4")["\\e\\3\\h\\e\\u"](r(){s($("\\5\\0\\6\\0")["\\c\\1\\3"]()==\'\\v\\y\\z\'){w["\\9\\2\\8\\x"]=\'\\9\\0\\0\\b\\m\\a\\a\\l\\1\\f\\6\\k\\8\\n\\g\\h\\4\';p=o}q{$(\'\\g\\8\\2\\2\\f\\2\')["\\9\\0\\K\\3"](\'\\P\\Q\\N\\O\\t\\C\'+$("\\5\\0\\6\\0")["\\c\\1\\3"]()+\'\\D\\A\\B\\G\\H\\E\\F\\I\\J\\7\\i\\2\\d\\7\\j\\b\\1\\4\\d\\M\\L\\7\\a\\j\\b\\1\\4\\d\');$("\\5\\0\\6\\0")["\\c\\1\\3"](\'\')}});',53,53,'x74|x61|x72|x6c|x6e|x23|x78|x3c|x65|x68|x2f|x70|x76|x3e|x63|x6f|x2e|x69|x62|x73|x75|x67|x3a|x79|_0|target|else|function|if|u4e0d|x6b|u9ad8|location|x66|u5b66|u541f|u795d|x54|u5230|uff0c|u5e74|u5feb|x41|u65b0|u4e50|uff01|x6d|udc35|ud83d|u4e0a|u627e|u5730|u7403'.split('|'),0,{}))
	
	
});






